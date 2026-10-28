"""Audit built routes; optionally export the before/after route register."""
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlparse, unquote
from collections import Counter
import argparse, csv, json, re

class Page(HTMLParser):
    def __init__(self, html):
        super().__init__(convert_charrefs=True)
        self.title=''; self.description=''; self.canonical=''; self.robots=''
        self.h1=[]; self.links=[]; self.ids=set(); self.images=[]; self.og={}; self.schemas=[]
        self.in_title=False; self.in_h1=False; self.in_json=False; self.json_text=''
        self.text=[]; self.in_script=False; self.in_style=False
        self.feed(html)
    def handle_starttag(self,tag,attrs):
        a=dict(attrs)
        if 'id' in a:self.ids.add(a['id'])
        if tag=='title':self.in_title=True
        if tag=='h1':self.in_h1=True;self.h1.append('')
        if tag=='a' and 'href' in a:self.links.append(a['href'])
        if tag=='link' and a.get('rel')=='canonical':self.canonical=a.get('href','')
        if tag=='img':self.images.append(a)
        if tag=='meta':
            if a.get('name')=='description':self.description=a.get('content','')
            if a.get('name')=='robots':self.robots=a.get('content','')
            if a.get('property','').startswith('og:'):self.og[a['property']]=a.get('content','')
        if tag=='script':
            self.in_script=True
            if a.get('type')=='application/ld+json':self.in_json=True;self.json_text=''
        if tag=='style':self.in_style=True
    def handle_endtag(self,tag):
        if tag=='title':self.in_title=False
        if tag=='h1':self.in_h1=False
        if tag=='style':self.in_style=False
        if tag=='script':
            if self.in_json:self.schemas.append(json.loads(self.json_text))
            self.in_json=False;self.in_script=False
    def handle_data(self,data):
        if self.in_title:self.title+=data
        if self.in_h1:self.h1[-1]+=data
        if self.in_json:self.json_text+=data
        if not self.in_script and not self.in_style:self.text.append(data)

parser=argparse.ArgumentParser();parser.add_argument('--baseline');parser.add_argument('--report',action='store_true');args=parser.parse_args()
brand_source=Path('src/data/brand.ts').read_text()
site_origin=re.search(r'origin: "([^"]+)"', brand_source)[1]
site_host=urlparse(site_origin).netloc
brand_name=re.search(r'name: "([^"]+)"', brand_source)[1]
dist=Path('dist');pages={};htmls={};errors=[];warnings=[]
for file in sorted(dist.rglob('*.html')):
    route='/'+str(file.relative_to(dist)).replace('index.html','')
    htmls[route]=file.read_text();pages[route]=Page(htmls[route])
assert pages, 'Run npm run build first'
redirects={line.split()[0] for line in Path('public/_redirects').read_text().splitlines() if line.strip() and not line.startswith('#')}
sitemap=set(re.findall(r'<loc>(.*?)</loc>',(dist/'sitemap.xml').read_text()))
for route,p in pages.items():
    if not p.title or not p.description or not p.canonical:errors.append(f'{route}: missing metadata')
    if len(p.h1)!=1:errors.append(f'{route}: {len(p.h1)} H1 elements')
    if p.canonical!=site_origin+('/404/' if route=='/404.html' else route):errors.append(f'{route}: unexpected canonical {p.canonical}')
    if p.og.get('og:title')!=p.title or p.og.get('og:description')!=p.description:errors.append(f'{route}: social metadata mismatch')
    if not p.schemas and 'noindex' not in p.robots:errors.append(f'{route}: missing JSON-LD')
    image=urlparse(p.og.get('og:image','')).path
    if not image or not (dist/unquote(image.lstrip('/'))).is_file():errors.append(f'{route}: missing social image {image}')
    if any('alt' not in image for image in p.images):errors.append(f'{route}: image missing alt attribute')
    if 'noindex' not in p.robots and not route.startswith('/campaigns/') and p.canonical not in sitemap:errors.append(f'{route}: missing from sitemap')
    if 'noindex' in p.robots and p.canonical in sitemap:errors.append(f'{route}: noindex page in sitemap')
    for href in p.links:
        parsed=urlparse(href)
        if parsed.scheme and parsed.scheme not in ('http','https'):continue
        if parsed.netloc and parsed.netloc!=site_host:continue
        target=unquote(parsed.path) or route
        if not target.startswith('/'):continue
        if target not in pages and target not in redirects and not (dist/target.lstrip('/')).is_file():errors.append(f'{route}: missing internal link {href}')
        if parsed.fragment and target in pages and unquote(parsed.fragment) not in pages[target].ids:errors.append(f'{route}: missing anchor {href}')
    body=' '.join(p.text)
    for stale in ['Self-serve Voice AI','guided setup available when needed','let Technology Partner connect it to intake']:
        if stale in body:errors.append(f'{route}: stale claim {stale}')
    if route.startswith('/services/') and 'Built-in CRM, contacts, opportunities, and follow-up tasks.' not in body:errors.append(f'{route}: missing Customer OS inclusion')
    if len(p.title)>75:warnings.append(f'{route}: long title ({len(p.title)} characters)')
for field in ['title','description']:
    values=Counter(getattr(p,field) for p in pages.values() if 'noindex' not in p.robots)
    for value,count in values.items():
        if count>1:errors.append(f'Duplicate {field}: {value}')
home=htmls['/'];hero=home[home.index('outcome-hero'):home.index('signal-journey')]
if pages['/'].h1!=['Get the outcome, not the software.']:errors.append('Incorrect homepage H1')
if 'signal-hero-proof' in hero or '$25' in hero:errors.append('Price/CRM callout remains in hero')
if hero.index('Let’s Get to Work')>hero.index('data-industry-carousel'):errors.append('CTAs must precede tiles')
tiles=re.findall(r'<li data-industry-tile[^>]*>.*?<a href="([^"]+)"',hero,re.S)
if len(tiles)!=11 or len(set(tiles))!=11:errors.append('Expected eleven unique industry tiles')
if '<animateMotion' not in hero:errors.append('Hero SVG animation missing')
if not all(pages[target].h1 for target in tiles):errors.append('Invalid tile destination')
voice=' '.join(pages['/services/voice/'].text)
for text in ['custom integrations needed for the agreed voice workflow','$39.99','$0.20','Larger Voice AI deployments']:
    if text.lower() not in voice.lower():errors.append('Voice missing: '+text)

retail=pages.get('/industries/online-retailers/')
if not retail:errors.append('Missing Online Retailers industry page')
else:
    retail_text=' '.join(retail.text)
    if retail.h1!=['Your products deserve a better shopping experience.']:errors.append('Incorrect retailer H1')
    if retail.title!='Shopify & Social Media Management for Online Retailers | Cyber Genie':errors.append('Incorrect retailer SEO title')
    if 'Managed Voice AI for Online Retailers' in retail_text:errors.append('Retailer page contains generic Voice AI section')
    for expected in ['Social media that supports the store', 'A store that is easier to shop', 'Less manual work behind each order', 'Custom features connected to Shopify', 'Review the business', 'Agree priorities', 'Configure, build, and test', 'Manage ongoing improvements', 'Built-in CRM, contacts, opportunities, and follow-up tasks.']:
        if expected not in retail_text:errors.append('Retailer page missing: '+expected)
    for href in ['/services/marketing/','/services/technology-partner/','/services/website-design-hosting/']:
        if href not in retail.links:errors.append('Retailer page missing service link '+href)
if not tiles or tiles[-1]!='/industries/online-retailers/':errors.append('Online Retailers should follow Insurance Agencies in the hero')
baseline=json.loads(Path('tests/fixtures/source-baseline.json').read_text())
expected={entry['path']:entry['robots'] for entry in baseline['routes']}
if set(pages)!=set(expected):errors.append('Route parity mismatch: '+str(set(pages)^set(expected)))
for route,robots in expected.items():
    actual=pages.get(route)
    if actual and (actual.robots or 'index,follow')!=robots:errors.append(route+': indexing decision changed')
if len(sitemap)!=baseline['sitemapCount']:errors.append('Sitemap entry count changed')
actual_redirects=[line for line in Path('public/_redirects').read_text().splitlines() if line and not line.startswith('#')]
if actual_redirects!=baseline['redirects']:errors.append('Legacy redirect rules changed')
for route,html in htmls.items():
    if 'https://fkinnovate.com' in html:errors.append(route+': old canonical origin remains')
    if 'Cyber Genie by FK Innovate' not in ' '.join(pages[route].text):errors.append(route+': missing continuity footer')
    if any('fkinnovate.com' in url for url in [pages[route].canonical,pages[route].og.get('og:url',''),pages[route].og.get('og:image','')]):errors.append(route+': old SEO origin')
# Lock commercial terms to the reviewed source, normalizing the approved brand changes only.
solution_source=Path('src/data/solutions.ts').read_text()
for name,original in baseline['commercialSections'].items():
    match=re.search(r'export const '+name+r'\b[\s\S]*?(?=\nexport const |\Z)',solution_source)
    normalized=original.replace('FK Innovate','Cyber Genie').replace('"https://app.fkinnovate.com/login"','`${brand.appUrl}/login`')
    if not match or match[0]!=normalized:errors.append('Commercial source changed: '+name)
for entry in baseline['articles']:
    if entry['slug'] not in Path('src/data/blogData.ts').read_text():errors.append('Missing article '+entry['slug'])


if args.report:
    baseline=json.loads(Path(args.baseline).read_text()) if args.baseline else {}
    output=Path('content-reports/outcome-revision-route-audit.csv')
    def decision(route):
        if route=='/industries/online-retailers/':return 'Added: Shopify-led retail services, social media, companion websites, delivery process, Customer OS; no generic Voice AI section'
        if route.startswith('/industries/') and route!='/industries/':return 'Revised: managed Voice AI, delivery responsibilities, Customer OS, industry SEO; preserved industry-specific use cases'
        if route.startswith('/services/'):return 'Revised: service-specific delivery, Customer OS, scope and metadata'
        if route.startswith('/solutions/'):return 'Revised: service ownership, specific search intent, shared scope guidance; retained outcome-specific details'
        if 'introducing-voice-ai-service' in route:return 'Revised article passage: required custom integration and testing included; historical subject preserved'
        if route.startswith('/blog/') or route=='/blog/':return 'Reviewed offer references; retained educational subject and historical claims; shared branding/social fallback updated'
        if route.startswith('/campaigns/'):return 'Reviewed: offer-specific scope retained; no changes to price, campaign indexing, or submission behavior'
        if route in ['/terms/','/privacy/']:return 'Reviewed: terms/privacy retained; no new promises of guaranteed revenue or rankings'
        return 'Revised brand, conversion, or onboarding copy; existing behavior preserved'
    with output.open('w',newline='') as f:
        w=csv.writer(f,lineterminator='\n');w.writerow(['route','search_intent','before_title','after_title','before_description','after_description','indexing','content_decision','checks'])
        for route,p in pages.items():
            before=Page(baseline.get(route,{}).get('html',''))
            intent=p.title.replace(' | Cyber Genie','')
            w.writerow([route,intent,before.title,p.title,before.description,p.description,p.robots or 'indexable',decision(route),'PASS' if not any(route+':' in err for err in errors) else 'FAIL'])
    print('Wrote',output)
print(f'{len(pages)} routes, {len(tiles)} unique hero destinations, {len(sitemap)} sitemap URLs')
print(f'{len(errors)} errors; {len(warnings)} advisory title-length warnings')
for line in errors:print('ERROR',line)
for line in warnings:print('NOTE',line)
raise SystemExit(bool(errors))
