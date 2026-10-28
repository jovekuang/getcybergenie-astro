import type { ImageMetadata } from 'astro';
import animalHospitalsImage from '@/assets/industry-animal-hospitals.png';
import autoRepairShopsImage from '@/assets/industry-auto-repair-shops.png';
import dayCaresImage from '@/assets/industry-day-cares.png';
import electriciansImage from '@/assets/industry-electricians.png';
import emergencyRestorationImage from '@/assets/industry-emergency-restoration.png';
import hvacContractorsImage from '@/assets/industry-hvac-contractors.png';
import insuranceAgenciesImage from '@/assets/industry-insurance-agencies.png';
import landscapingCompaniesImage from '@/assets/industry-landscaping-companies.png';
import medspasImage from '@/assets/industry-medspas.png';
import pestControlImage from '@/assets/industry-pest-control.png';
import plumbersImage from '@/assets/industry-plumbers.png';
import propertyManagementImage from '@/assets/industry-property-management.png';
import realtorsImage from '@/assets/industry-realtors.png';
import roofingContractorsImage from '@/assets/industry-roofing-contractors.png';
import onlineRetailersImage from '@/assets/industry-online-retailers.png';

export type IndustryOutcomeSlug = 'get-customers' | 'win-customers' | 'keep-customers';

export type IndustryOutcomeSection = {
  outcome: IndustryOutcomeSlug;
  headline: string;
  linkLabel?: string;
  entries: Array<{
    itemSlug: string;
    displayTitle?: string;
    useCase: string;
  }>;
};

export type VoiceIndustry = {
  slug: string;
  name: string;
  shortName: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  keywords: string;
  hero: string;
  heroTitle?: string;
  pageIntro?: string;
  pageSeoTitle?: string;
  pageSeoDescription?: string;
  serviceName?: string;
  managedSeoTitle?: string;
  showVoiceAi?: boolean;
  journeyIllustration?: 'commerce';
  serviceRecommendations?: Array<{ name: string; href: string; description: string }>;
  deliverySteps?: Array<{ title: string; description: string }>;
  heroImage?: ImageMetadata;
  heroImageAlt?: string;
  painPoints: string[];
  callExamples: string[];
  outcomes: string[];
  faq: Array<{
    question: string;
    answer: string;
  }>;
  outcomeSections?: IndustryOutcomeSection[];
  featureSection?: {
    title: string;
    description: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
  integrationSection?: {
    title: string;
    description: string;
    systems: Array<{
      name: string;
      label: string;
      description: string;
      links?: Array<{
        label: string;
        href: string;
      }>;
    }>;
    note: string;
  };
  whiteGloveCta?: {
    title: string;
    description: string;
  };
  voiceAiSection?: {
    title: string;
    description: string;
    callsTitle: string;
  };
};

export const voiceIndustries: VoiceIndustry[] = [
  {
    slug: 'hvac-contractors',
    name: 'HVAC Contractors',
    shortName: 'HVAC',
    title: 'Customer and operations software for HVAC contractors',
    seoTitle: 'Software for HVAC Contractors',
    seoDescription: 'Managed websites and customer workflows for HVAC contractors. We configure intake, dispatch handoffs, estimate follow-up, and maintenance reminders.',
    keywords: 'HVAC contractor software, HVAC website, HVAC dispatch workflow, HVAC estimate follow-up, HVAC maintenance plan automation',
    hero: 'Connect seasonal demand, service intake, dispatch, estimates, installations, maintenance plans, and follow-up in one practical system.',
    heroTitle: 'Turn seasonal HVAC demand into scheduled, completed, and repeat work.',
    pageIntro: 'Build the website and software workflows behind no-heat and no-cooling response, technician scheduling, replacement estimates, installation updates, maintenance agreements, payments, and tune-up reminders.',
    pageSeoTitle: 'Software for HVAC Contractors | Cyber Genie',
    pageSeoDescription: 'Managed websites and custom software for HVAC contractors, covering lead generation, service intake, dispatch, estimates, installations, payments, and maintenance plans.',
    heroImage: hvacContractorsImage,
    heroImageAlt: 'An HVAC technician reviewing service details with a homeowner beside an outdoor unit',
    painPoints: [
      'Seasonal demand can overwhelm intake and dispatch while technicians are diagnosing, installing, or driving.',
      'Repair, replacement, maintenance-plan, warranty, and indoor-air-quality requests need different workflows.',
      'Equipment details, service history, estimates, parts, and customer updates are often split across systems.',
    ],
    callExamples: [
      'No heat or no cooling emergency calls',
      'Maintenance plan and tune-up questions',
      'Estimate requests for system replacement',
      'Callback details for service windows',
    ],
    outcomes: [
      'Help homeowners find the right repair, replacement, maintenance, or indoor-air-quality service.',
      'Route each request by system issue, urgency, service area, maintenance coverage, and technician availability.',
      'Keep estimates, installation updates, invoices, maintenance renewals, and seasonal tune-ups moving.',
    ],
    outcomeSections: [
      {
        outcome: 'get-customers',
        headline: 'Be the clear local choice before the temperature spikes.',
        entries: [
          { itemSlug: 'optimized-website', displayTitle: 'HVAC Website', useCase: 'Explain repair, replacement, maintenance plans, indoor-air-quality work, equipment brands, financing, and service areas with a clear next step.' },
          { itemSlug: 'local-ai-search-visibility', displayTitle: 'Local HVAC Search Visibility', useCase: 'Improve discovery for no-cooling, no-heat, furnace, heat-pump, mini-split, tune-up, and replacement searches across your service area.' },
          { itemSlug: 'digital-advertising', displayTitle: 'Seasonal HVAC Campaigns', useCase: 'Launch trackable campaigns around peak-weather repairs, tune-ups, system replacements, rebates, and financing offers.' },
          { itemSlug: 'review-management', displayTitle: 'Service Review Management', useCase: 'Request reviews after successful calls and installations while routing comfort, workmanship, or billing concerns back to the right manager.' },
        ],
      },
      {
        outcome: 'win-customers',
        headline: 'Turn every comfort problem into a dispatchable next step.',
        entries: [
          { itemSlug: 'ai-voice', displayTitle: 'HVAC Intake', useCase: 'Capture address, equipment type, symptoms, thermostat behavior, maintenance-plan status, urgency, and callback details without giving unsafe repair advice.' },
          { itemSlug: 'request-pipeline', displayTitle: 'Service Request Pipeline', useCase: 'Separate no-cooling, no-heat, maintenance, warranty, indoor-air-quality, and replacement opportunities with a visible owner and status.' },
          { itemSlug: 'scheduling', displayTitle: 'Dispatch Scheduling', useCase: 'Coordinate service windows by territory, job type, technician capacity, maintenance coverage, and emergency rules.' },
          { itemSlug: 'quoting-follow-up', displayTitle: 'Replacement Estimate Follow-Up', useCase: 'Keep equipment options, financing steps, rebate documents, approvals, and proposal follow-up moving until the homeowner decides.' },
        ],
      },
      {
        outcome: 'keep-customers',
        headline: 'Stay connected from arrival window through the next tune-up.',
        entries: [
          { itemSlug: 'customer-management', displayTitle: 'Customer & Equipment Records', useCase: 'Organize properties, systems, service history, warranties, maintenance agreements, and promised next steps around the tools your office already uses.' },
          { itemSlug: 'project-updates', displayTitle: 'Service & Installation Updates', useCase: 'Send arrival windows, technician updates, parts status, installation milestones, completion notes, and approved care instructions.' },
          { itemSlug: 'invoicing-payments', displayTitle: 'Deposits + Payments', useCase: 'Coordinate replacement deposits, service invoices, payment links, financing handoffs, and overdue reminders with clear staff ownership.' },
          { itemSlug: 'reactivation', displayTitle: 'Maintenance & Tune-Up Reminders', useCase: 'Bring customers back for seasonal tune-ups, filter programs, maintenance-plan renewals, warranty work, and aging-system reviews.' },
        ],
      },
    ],
    faq: [
      {
        question: 'Can the software connect with our HVAC field-service or dispatch platform?',
        answer: 'We can scope eligible integrations for customer records, service requests, scheduling, estimates, invoices, and status updates based on the API and permissions your current platform provides.',
      },
      {
        question: 'Can it separate repair, maintenance, warranty, and replacement opportunities?',
        answer: 'Yes. Intake and pipeline rules can classify the system, symptom, urgency, maintenance coverage, warranty context, property type, and requested service before assigning the next step.',
      },
      {
        question: 'Can it support a seasonal call surge?',
        answer: 'Yes. Voice, text, forms, scheduling, and request-routing workflows can capture demand consistently while preserving your emergency, service-area, and dispatch rules.',
      },
      {
        question: 'Can it follow up on replacement estimates and maintenance agreements?',
        answer: 'Yes. The system can track proposal status, financing steps, missing decisions, maintenance renewals, and approved reminders without relying on an individual inbox.',
      },
      {
        question: 'Can Voice AI still handle after-hours HVAC calls?',
        answer: 'Yes. The focused Voice AI option can collect system symptoms, safety context, address, urgency, and callback information, then follow the escalation rules your team approves.',
      },
    ],
  },
  {
    slug: 'realtors',
    name: 'Realtors',
    shortName: 'Realtors',
    title: 'Websites and client workflow software for Realtors',
    seoTitle: 'Software for Realtors and Real Estate Teams',
    seoDescription: 'Managed listing websites and customer workflows for Realtors. We connect buyer and seller inquiries, showing requests, transaction updates, and follow-up.',
    keywords: 'Realtor software, real estate website, real estate lead routing, showing scheduler, transaction update workflow',
    hero: 'Connect listings, buyer and seller intake, showings, transaction updates, sphere follow-up, reviews, and referrals around the way your team sells real estate.',
    heroTitle: 'Turn local real estate attention into clients, closings, and referrals.',
    pageIntro: 'Build a market-ready website and software workflows for listing discovery, buyer and seller qualification, showing coordination, transaction communication, past-client follow-up, and referrals.',
    pageSeoTitle: 'Software for Realtors and Real Estate Teams | Cyber Genie',
    pageSeoDescription: 'Managed websites and custom software for Realtors, from local listing discovery and lead routing to showings, transaction updates, and past-client referrals.',
    heroImage: realtorsImage,
    heroImageAlt: 'A Realtor reviewing property details with prospective buyers during a home showing',
    painPoints: [
      'Buyer, seller, listing, open-house, and referral leads arrive through disconnected portals, forms, calls, and texts.',
      'Agents need useful context and a clear next action while they are showing property or negotiating.',
      'Transaction updates and past-client follow-up often depend on individual memory and inboxes.',
    ],
    callExamples: [
      'Active listing questions',
      'Showing requests and preferred times',
      'Buyer lead qualification',
      'Seller inquiry capture',
    ],
    outcomes: [
      'Help buyers and sellers understand your markets, listings, process, expertise, and proof.',
      'Route each inquiry by property, representation status, timeline, financing readiness, and responsible agent.',
      'Keep showing, transaction, review, home-anniversary, referral, and sphere follow-up organized.',
    ],
    outcomeSections: [
      {
        outcome: 'get-customers',
        headline: 'Own your local market story beyond the listing portals.',
        entries: [
          { itemSlug: 'optimized-website', displayTitle: 'Real Estate Website', useCase: 'Present listings, neighborhoods, buyer and seller services, relocation expertise, recent results, and clear consultation paths under your own brand.' },
          { itemSlug: 'local-ai-search-visibility', displayTitle: 'Neighborhood Search Visibility', useCase: 'Build useful market, community, school-area, relocation, buying, and selling content around the questions local clients actually research.' },
          { itemSlug: 'social-media-management', displayTitle: 'Listing & Market Content', useCase: 'Turn new listings, open houses, closings, market observations, and client stories into a consistent social presence.' },
          { itemSlug: 'project-showcases', displayTitle: 'Listings & Results', useCase: 'Showcase active properties, sold results, staging transformations, negotiation wins, and approved client stories with credible context.' },
        ],
      },
      {
        outcome: 'win-customers',
        headline: 'Give every buyer and seller inquiry a clear next move.',
        entries: [
          { itemSlug: 'ai-voice', displayTitle: 'Real Estate Intake', useCase: 'Capture the property of interest, representation status, buying or selling timeline, price range, financing readiness, and preferred contact method.' },
          { itemSlug: 'request-pipeline', displayTitle: 'Buyer & Seller Pipeline', useCase: 'Track source, market, property interest, client type, readiness, assigned agent, and next action without losing leads across portals.' },
          { itemSlug: 'scheduling', displayTitle: 'Showing & Consultation Scheduling', useCase: 'Coordinate showing requests, listing consultations, buyer meetings, and open-house follow-up using the availability and representation rules you set.' },
        ],
      },
      {
        outcome: 'keep-customers',
        headline: 'Stay useful from representation agreement through the next referral.',
        entries: [
          { itemSlug: 'customer-management', displayTitle: 'Client & Sphere Management', useCase: 'Organize buyers, sellers, referral partners, past clients, property interests, milestones, and promised follow-up around your existing CRM.' },
          { itemSlug: 'project-updates', displayTitle: 'Transaction Updates', useCase: 'Coordinate approved updates for showings, offers, inspections, appraisal, financing, title, closing, and post-closing next steps.' },
          { itemSlug: 'photo-document-management', displayTitle: 'Listing & Transaction Documents', useCase: 'Keep listing photos, disclosures, inspection files, marketing assets, and approved transaction materials easier for the team to find.' },
          { itemSlug: 'reviews-referrals', displayTitle: 'Reviews + Referrals', useCase: 'Ask at natural closing and post-closing moments, then keep home-anniversary, market-check-in, and referral follow-up moving.' },
        ],
      },
    ],
    faq: [
      {
        question: 'Can the software connect leads from our website and real estate portals?',
        answer: 'We can scope eligible integrations and routing for website forms, listing portals, calendars, CRM records, and communication tools based on each vendor\'s supported access.',
      },
      {
        question: 'Can it handle both buyer and seller workflows?',
        answer: 'Yes. Buyer, seller, listing, relocation, open-house, and referral inquiries can have different intake questions, stages, ownership, and follow-up rules.',
      },
      {
        question: 'Can it provide transaction updates without replacing our transaction coordinator?',
        answer: 'Yes. It can organize approved milestone communication and next steps while keeping negotiation, legal, disclosure, and advisory decisions with the responsible professionals.',
      },
      {
        question: 'Can it help us stay in touch with past clients and our sphere?',
        answer: 'Yes. The system can coordinate home-anniversary, market-review, event, review, and referral outreach using segments and timing your team approves.',
      },
      {
        question: 'Can Voice AI still answer listing calls while agents are showing homes?',
        answer: 'Yes. It can share approved listing facts, capture showing preferences and representation status, and hand off advice, negotiation, and sensitive questions to the agent.',
      },
    ],
  },
  {
    slug: 'plumbers',
    name: 'Plumbers',
    shortName: 'Plumbers',
    title: 'Customer and field-service software for plumbers',
    seoTitle: 'Software for Plumbing Companies',
    seoDescription: 'Managed websites and call workflows for plumbers. We configure job intake, routing, estimate follow-up, arrival updates, and customer reminders.',
    keywords: 'plumbing company software, plumber website, plumbing dispatch workflow, plumbing estimate follow-up, plumbing customer portal',
    hero: 'Connect emergency intake, dispatch, estimates, job updates, photos, invoices, reviews, and recurring service around the way your plumbing company works.',
    heroTitle: 'Move plumbing work from the first leak report to the final payment.',
    pageIntro: 'Build the website and software workflows behind emergency response, drain and sewer calls, water-heater work, repipes, estimates, technician scheduling, job documentation, payment, and follow-up.',
    pageSeoTitle: 'Software for Plumbing Companies | Cyber Genie',
    pageSeoDescription: 'Managed websites and custom software for plumbers, covering emergency intake, dispatch, estimates, job updates, documentation, payments, and repeat service.',
    heroImage: plumbersImage,
    heroImageAlt: 'A plumber explaining an under-sink repair to a homeowner',
    painPoints: [
      'Emergency, diagnostic, estimate, warranty, and commercial requests need different response and dispatch paths.',
      'Technicians and office staff need the same address, access, fixture, damage, photo, and scheduling context.',
      'Estimates, job updates, invoices, reviews, and repeat-service reminders are easy to lose across calls and inboxes.',
    ],
    callExamples: [
      'Burst pipe and leak calls',
      'Drain cleaning questions',
      'Water heater service requests',
      'Estimate and callback requests',
    ],
    outcomes: [
      'Help property owners choose the right emergency, drain, sewer, water-heater, repipe, or commercial plumbing service.',
      'Route each request by active damage, shutoff status, property access, service area, job type, and technician availability.',
      'Keep estimates, arrival updates, job photos, invoices, reviews, and maintenance follow-up moving.',
    ],
    outcomeSections: [
      {
        outcome: 'get-customers',
        headline: 'Make the right plumbing service easy to find in an urgent moment.',
        entries: [
          { itemSlug: 'optimized-website', displayTitle: 'Plumbing Website', useCase: 'Build clear pages for emergency plumbing, drains, sewers, water heaters, leak detection, repipes, fixtures, and commercial service across your territory.' },
          { itemSlug: 'local-ai-search-visibility', displayTitle: 'Local Plumbing Search Visibility', useCase: 'Improve discovery for burst pipes, clogged drains, sewer backups, water-heater failures, leaks, and other high-intent local searches.' },
          { itemSlug: 'digital-advertising', displayTitle: 'Service-Area Campaigns', useCase: 'Run focused campaigns by service, urgency, geography, property type, and availability with trackable intake and follow-up.' },
          { itemSlug: 'review-management', displayTitle: 'Job Review Management', useCase: 'Request reviews after successful repairs and installations while routing workmanship, cleanup, scheduling, or billing concerns internally.' },
        ],
      },
      {
        outcome: 'win-customers',
        headline: 'Give dispatch the details needed before a truck rolls.',
        entries: [
          { itemSlug: 'ai-voice', displayTitle: 'Plumbing Intake', useCase: 'Capture the address, active water or sewage, shutoff status, affected fixtures, property access, photos needed, urgency, and callback details.' },
          { itemSlug: 'request-pipeline', displayTitle: 'Plumbing Request Pipeline', useCase: 'Separate emergencies, diagnostic visits, estimates, warranty callbacks, commercial work, and larger projects with a visible owner and status.' },
          { itemSlug: 'scheduling', displayTitle: 'Dispatch & Estimate Scheduling', useCase: 'Coordinate arrival windows by service area, job type, technician skills, emergency priority, property access, and customer availability.' },
          { itemSlug: 'quoting-follow-up', displayTitle: 'Estimate Follow-Up', useCase: 'Keep repipe, sewer, water-heater, fixture, and commercial proposals moving with options, deposits, approvals, and reminders.' },
        ],
      },
      {
        outcome: 'keep-customers',
        headline: 'Keep the customer informed until the water is back on and the invoice is closed.',
        entries: [
          { itemSlug: 'project-updates', displayTitle: 'Job Updates', useCase: 'Send arrival windows, technician status, diagnostic findings, parts or permit updates, completion notes, and approved care instructions.' },
          { itemSlug: 'photo-document-management', displayTitle: 'Job Photos & Documents', useCase: 'Organize before-and-after photos, fixture details, inspection notes, proposals, permits, warranties, and completion records by job.' },
          { itemSlug: 'invoicing-payments', displayTitle: 'Deposits + Invoices', useCase: 'Coordinate deposits, progress payments, final invoices, payment links, and overdue reminders without asking the owner to chase every balance.' },
          { itemSlug: 'reactivation', displayTitle: 'Repeat Service Reminders', useCase: 'Bring customers back for water-heater maintenance, drain service, inspections, winterization, backflow work, or other scheduled needs.' },
        ],
      },
    ],
    faq: [
      {
        question: 'Can the software connect with our plumbing field-service platform?',
        answer: 'We can scope eligible integrations for customers, properties, service requests, schedules, estimates, invoices, and job status based on the access your current platform supports.',
      },
      {
        question: 'Can it manage both emergency calls and larger plumbing projects?',
        answer: 'Yes. Emergency dispatch, diagnostic service, estimates, repipes, sewer work, water-heater installations, and commercial projects can follow different stages and handoff rules.',
      },
      {
        question: 'Can customers send photos before the appointment?',
        answer: 'Yes. Intake can request and organize approved photos or documents with the service record so dispatch and technicians have better context before arrival.',
      },
      {
        question: 'Can it keep customers updated during multi-day work?',
        answer: 'Yes. The workflow can coordinate approved updates about access, parts, permits, milestones, schedule changes, completion, warranties, and payment.',
      },
      {
        question: 'Can Voice AI still cover after-hours plumbing calls?',
        answer: 'Yes. It can capture active water or sewage, shutoff status, property damage, access, urgency, and callback details, then follow your approved on-call escalation path.',
      },
    ],
  },
  {
    slug: 'property-management',
    name: 'Property Management',
    shortName: 'Property Managers',
    title: 'Resident and property operations software',
    seoTitle: 'Software for Property Management Companies',
    seoDescription: 'Managed websites and customer workflows for property managers. Leasing inquiries, maintenance requests, vendor handoffs, and resident updates connected.',
    keywords: 'property management software workflow, property management website, maintenance request portal, leasing lead routing, resident communication automation',
    hero: 'Connect leasing, resident maintenance, inspections, vendor coordination, owner reporting, renewals, and property communication around your portfolio.',
    heroTitle: 'Keep prospects, residents, owners, vendors, and properties moving together.',
    pageIntro: 'Build the website and software workflows behind rental discovery, leasing inquiries, tours, applications, maintenance triage, work orders, inspections, owner communication, renewals, and resident follow-up.',
    pageSeoTitle: 'Software for Property Management Companies | Cyber Genie',
    pageSeoDescription: 'Managed websites and custom software for property managers, covering leasing, maintenance, vendors, inspections, owners, resident updates, and renewals.',
    heroImage: propertyManagementImage,
    heroImageAlt: 'A property manager and maintenance professional reviewing a tenant request',
    painPoints: [
      'Prospect, resident, owner, vendor, and emergency requests compete for the same office attention.',
      'Maintenance intake needs property, unit, access, pets, photos, urgency, and vendor context before dispatch.',
      'Leasing, work orders, inspections, owner updates, and renewals often span disconnected systems and inboxes.',
    ],
    callExamples: [
      'Maintenance request intake',
      'Leasing availability questions',
      'Move-in and move-out questions',
      'Owner or vendor callback requests',
    ],
    outcomes: [
      'Help prospects understand available properties, qualification criteria, amenities, neighborhoods, and tour steps.',
      'Route leasing and maintenance work by property, unit, request type, urgency, access, vendor, and responsible team.',
      'Keep work-order updates, owner communication, resident notices, renewals, reviews, and referrals organized.',
    ],
    outcomeSections: [
      {
        outcome: 'get-customers',
        headline: 'Make each property and management service easier to understand and trust.',
        entries: [
          { itemSlug: 'optimized-website', displayTitle: 'Property Management Website', useCase: 'Present available rentals, managed communities, owner services, qualification criteria, amenities, neighborhoods, and contact paths clearly.' },
          { itemSlug: 'local-ai-search-visibility', displayTitle: 'Rental & Owner Search Visibility', useCase: 'Improve discovery for available rentals, neighborhood searches, and property owners seeking local management services.' },
          { itemSlug: 'project-showcases', displayTitle: 'Property Showcases', useCase: 'Organize approved photos, floor plans, amenities, virtual tours, neighborhood details, renovations, and management results by property.' },
          { itemSlug: 'review-management', displayTitle: 'Resident & Owner Reviews', useCase: 'Build credible local proof while routing leasing, maintenance, communication, or accounting concerns to the correct team.' },
        ],
      },
      {
        outcome: 'win-customers',
        headline: 'Route leasing and service demand by property, unit, and urgency.',
        entries: [
          { itemSlug: 'ai-voice', displayTitle: 'Leasing & Maintenance Intake', useCase: 'Identify prospects, residents, owners, and vendors, then capture property, unit, issue, urgency, access permission, pets, and contact details.' },
          { itemSlug: 'request-pipeline', displayTitle: 'Leasing & Work-Order Pipeline', useCase: 'Track inquiries, tours, applications, maintenance requests, inspections, vendor assignments, owner approvals, and next actions in the appropriate workflow.' },
          { itemSlug: 'scheduling', displayTitle: 'Tour, Inspection & Vendor Scheduling', useCase: 'Coordinate tours, maintenance windows, inspections, unit turns, and vendor access using property-specific availability and rules.' },
          { itemSlug: 'sales-assistant', displayTitle: 'Property Operations Assistant', useCase: 'Help staff find approved property details, qualification criteria, process answers, request history, and the next responsible person.' },
        ],
      },
      {
        outcome: 'keep-customers',
        headline: 'Give every resident, owner, and vendor a visible next step.',
        entries: [
          { itemSlug: 'customer-management', displayTitle: 'Resident, Owner & Vendor Records', useCase: 'Organize contacts, properties, units, communication preferences, request ownership, and follow-up history around your property-management system.' },
          { itemSlug: 'project-updates', displayTitle: 'Work-Order & Property Updates', useCase: 'Send approved status updates for maintenance, vendor arrival, parts, inspections, unit turns, owner approvals, and completion.' },
          { itemSlug: 'photo-document-management', displayTitle: 'Inspection Photos & Documents', useCase: 'Keep condition photos, inspection reports, estimates, invoices, leases, owner approvals, and vendor files attached to the right property or request.' },
          { itemSlug: 'reactivation', displayTitle: 'Renewal & Follow-Up Workflows', useCase: 'Coordinate lease-renewal steps, owner reviews, resident surveys, vacant-unit follow-up, and former-prospect reactivation at approved times.' },
        ],
      },
    ],
    faq: [
      {
        question: 'Does this replace our property-management system?',
        answer: 'Usually no. We build the resident, leasing, owner, vendor, or reporting workflow around the system of record you already use and scope eligible integrations during discovery.',
      },
      {
        question: 'Can it support both leasing and maintenance?',
        answer: 'Yes. Leasing prospects, residents, owners, vendors, emergencies, inspections, and renewals can follow distinct intake, ownership, scheduling, and communication rules.',
      },
      {
        question: 'Can residents submit photos and access instructions with a maintenance request?',
        answer: 'Yes. The workflow can collect property, unit, issue, photos, access permission, pets, urgency, and preferred contact method before routing the request.',
      },
      {
        question: 'Can this work across multiple properties or regional teams?',
        answer: 'Yes. The system can preserve property-specific availability, access rules, vendors, escalation paths, and staff ownership while adding portfolio-level visibility.',
      },
      {
        question: 'Can Voice AI still cover after-hours property calls?',
        answer: 'Yes. It can distinguish prospects, residents, owners, and vendors; collect maintenance context; flag approved emergency signals; and queue non-urgent work for office follow-up.',
      },
    ],
  },
  {
    slug: 'electricians',
    name: 'Electricians',
    shortName: 'Electricians',
    title: 'Customer and project software for electrical contractors',
    seoTitle: 'Software for Electrical Contractors',
    seoDescription: 'Managed websites and customer workflows for electricians. Project inquiries, estimates, scheduling, and customer updates configured around the business.',
    keywords: 'electrical contractor software, electrician website, electrical service workflow, electrician estimate follow-up, electrical project portal',
    hero: 'Connect urgent service, estimates, panel and EV projects, scheduling, permits, inspections, job updates, invoices, and repeat work.',
    heroTitle: 'Turn electrical inquiries into safely scoped, scheduled, and completed work.',
    pageIntro: 'Build the website and software workflows behind service calls, troubleshooting, panel upgrades, EV chargers, generators, lighting, remodels, estimates, permits, inspections, payment, and follow-up.',
    pageSeoTitle: 'Software for Electrical Contractors | Cyber Genie',
    pageSeoDescription: 'Managed websites and custom software for electricians, covering intake, estimates, scheduling, project updates, permits, inspections, payments, and repeat service.',
    heroImage: electriciansImage,
    heroImageAlt: 'An electrician explaining an electrical panel inspection to a homeowner',
    painPoints: [
      'Emergency service, troubleshooting, estimates, and permitted projects need different intake and scheduling paths.',
      'Panel, service, load, equipment, property, access, and inspection details must stay with the job.',
      'Estimates, deposits, permits, material status, inspections, and customer updates often live in separate places.',
    ],
    callExamples: [
      'Power outage and breaker questions',
      'Panel upgrade inquiries',
      'Lighting and outlet service requests',
      'Estimate appointment scheduling',
    ],
    outcomes: [
      'Help property owners find the right service for troubleshooting, panels, EV charging, generators, lighting, or larger electrical projects.',
      'Route each request by safety context, property type, service area, project scope, permitting needs, and electrician availability.',
      'Keep estimates, deposits, permit and inspection updates, invoices, reviews, and future service organized.',
    ],
    outcomeSections: [
      {
        outcome: 'get-customers',
        headline: 'Explain technical electrical work in terms customers can act on.',
        entries: [
          { itemSlug: 'optimized-website', displayTitle: 'Electrical Contractor Website', useCase: 'Create clear pages for troubleshooting, panels, EV chargers, generators, lighting, rewiring, remodels, commercial work, and service areas.' },
          { itemSlug: 'local-ai-search-visibility', displayTitle: 'Local Electrical Search Visibility', useCase: 'Improve discovery for tripping breakers, partial outages, panel upgrades, EV charging, generator, lighting, and code-related searches.' },
          { itemSlug: 'project-showcases', displayTitle: 'Electrical Project Showcases', useCase: 'Present approved panel, lighting, generator, EV, remodel, and commercial work with scope, constraints, and outcome context.' },
          { itemSlug: 'review-management', displayTitle: 'Job Review Management', useCase: 'Request reviews after successful service and project completion while routing safety, workmanship, schedule, or billing concerns internally.' },
        ],
      },
      {
        outcome: 'win-customers',
        headline: 'Collect the scope and safety context before assigning the work.',
        entries: [
          { itemSlug: 'ai-voice', displayTitle: 'Electrical Service Intake', useCase: 'Capture symptoms, safety concerns, property type, service and panel details, project goal, location, timing, and callback information without giving DIY repair instructions.' },
          { itemSlug: 'request-pipeline', displayTitle: 'Service & Project Pipeline', useCase: 'Separate urgent service, troubleshooting, estimates, panel work, EV chargers, generators, lighting, remodels, and commercial projects by status and owner.' },
          { itemSlug: 'scheduling', displayTitle: 'Service, Estimate & Inspection Scheduling', useCase: 'Coordinate visits by territory, electrician qualification, job type, property access, permit stage, inspection timing, and customer availability.' },
          { itemSlug: 'quoting-follow-up', displayTitle: 'Electrical Estimate Follow-Up', useCase: 'Keep scope questions, options, deposits, financing, permits, approvals, and proposal reminders moving for larger projects.' },
        ],
      },
      {
        outcome: 'keep-customers',
        headline: 'Keep customers informed through permits, inspections, and energization.',
        entries: [
          { itemSlug: 'project-updates', displayTitle: 'Project & Inspection Updates', useCase: 'Send approved updates about arrival, shutdowns, materials, permits, utility coordination, inspections, schedule changes, and completion.' },
          { itemSlug: 'photo-document-management', displayTitle: 'Electrical Job Documents', useCase: 'Organize panel photos, load information, plans, estimates, permits, inspection results, warranties, and completion records by job.' },
          { itemSlug: 'invoicing-payments', displayTitle: 'Deposits + Progress Payments', useCase: 'Coordinate deposits, milestone invoices, final payment, payment links, and overdue follow-up with clear project status.' },
          { itemSlug: 'reviews-referrals', displayTitle: 'Reviews + Property Referrals', useCase: 'Ask satisfied homeowners, builders, property managers, and commercial clients for reviews and introductions after successful completion.' },
        ],
      },
    ],
    faq: [
      {
        question: 'Can the software connect with our estimating or field-service tools?',
        answer: 'We can scope eligible integrations for customer records, service requests, schedules, estimates, projects, invoices, and status data based on vendor access.',
      },
      {
        question: 'Can it handle both service calls and larger electrical projects?',
        answer: 'Yes. Troubleshooting, emergency service, estimates, panels, EV chargers, generators, remodels, and commercial projects can have distinct stages and ownership.',
      },
      {
        question: 'Can it track permits and inspections?',
        answer: 'Yes. A custom workflow can track permit status, utility coordination, required documents, inspection dates, corrections, customer updates, and the next responsible person.',
      },
      {
        question: 'Can customers upload panel or installation photos?',
        answer: 'Yes. The workflow can collect approved photos and documents with property, equipment, access, and project context before an estimate or site visit.',
      },
      {
        question: 'Can Voice AI collect electrical safety context without giving repair advice?',
        answer: 'Yes. It can ask about sparks, burning smells, exposed wires, outages, breakers, and immediate hazards, then route the call for qualified human review without giving DIY instructions.',
      },
    ],
  },
  {
    slug: 'roofing-contractors',
    name: 'Roofing Contractors',
    shortName: 'Roofers',
    title: 'Lead and project software for roofing contractors',
    seoTitle: 'Software for Roofing Contractors',
    seoDescription: 'Managed websites and customer workflows for roofers. Storm inquiries, inspection requests, estimates, production updates, and follow-up connected.',
    keywords: 'roofing contractor software, roofing website, roofing inspection workflow, roofing estimate follow-up, roofing project portal',
    hero: 'Connect storm intake, inspections, estimates, insurance documents, material and production updates, payments, reviews, and referrals.',
    heroTitle: 'Move roofing opportunities from storm call to final walkthrough.',
    pageIntro: 'Build the website and software workflows behind repair and replacement leads, storm response, roof inspections, estimates, insurance documentation, production scheduling, job updates, payments, and referrals.',
    pageSeoTitle: 'Software for Roofing Contractors | Cyber Genie',
    pageSeoDescription: 'Managed websites and custom software for roofers, covering storm leads, inspections, estimates, insurance documentation, production, payments, and referrals.',
    heroImage: roofingContractorsImage,
    heroImageAlt: 'A roofing contractor reviewing roof inspection details with a homeowner',
    painPoints: [
      'Storms create sudden demand across calls, forms, canvassing, referrals, and insurance-driven inquiries.',
      'Repair, replacement, retail, insurance, commercial, and emergency work need different qualification and follow-up.',
      'Inspection photos, estimates, adjuster documents, selections, materials, production, invoices, and updates must stay connected.',
    ],
    callExamples: [
      'Storm damage and leak calls',
      'Roof replacement estimate requests',
      'Inspection scheduling',
      'Insurance-related callback requests',
    ],
    outcomes: [
      'Help property owners understand repair, replacement, storm, insurance, material, warranty, and inspection options.',
      'Route each opportunity by property, roof issue, urgency, inspection status, insurance context, salesperson, and next action.',
      'Keep documentation, selections, production updates, payments, reviews, and referrals moving after the sale.',
    ],
    outcomeSections: [
      {
        outcome: 'get-customers',
        headline: 'Build trust before the homeowner schedules an inspection.',
        entries: [
          { itemSlug: 'optimized-website', displayTitle: 'Roofing Website', useCase: 'Explain repairs, replacements, storm damage, insurance process, materials, warranties, commercial work, financing, and service areas clearly.' },
          { itemSlug: 'local-ai-search-visibility', displayTitle: 'Local Roofing Search Visibility', useCase: 'Improve discovery for leaks, missing shingles, hail, wind damage, roof replacement, inspection, and insurance-related searches.' },
          { itemSlug: 'digital-advertising', displayTitle: 'Storm & Replacement Campaigns', useCase: 'Launch trackable campaigns by storm area, service type, property type, urgency, financing, and inspection availability.' },
          { itemSlug: 'project-showcases', displayTitle: 'Roofing Project Showcases', useCase: 'Present approved before-and-after photos, materials, roof systems, challenges, insurance context, and completed results.' },
        ],
      },
      {
        outcome: 'win-customers',
        headline: 'Turn every roof concern into a qualified inspection or estimate.',
        entries: [
          { itemSlug: 'ai-voice', displayTitle: 'Roofing Lead Intake', useCase: 'Capture address, leak or damage type, roof age, storm timing, insurance involvement, adjuster status, photos, urgency, and inspection preference.' },
          { itemSlug: 'request-pipeline', displayTitle: 'Inspection & Sales Pipeline', useCase: 'Track leads by source, storm, territory, repair or replacement, inspection, adjuster status, salesperson, estimate, and next action.' },
          { itemSlug: 'scheduling', displayTitle: 'Inspection Scheduling', useCase: 'Coordinate inspections by territory, roof type, urgency, salesperson or inspector capacity, weather, access, and homeowner availability.' },
          { itemSlug: 'quoting-follow-up', displayTitle: 'Proposal & Claim Follow-Up', useCase: 'Keep estimates, material options, financing, insurance documents, adjuster steps, approvals, and signature reminders visible.' },
        ],
      },
      {
        outcome: 'keep-customers',
        headline: 'Keep the homeowner informed from material selection through final payment.',
        entries: [
          { itemSlug: 'project-updates', displayTitle: 'Roofing Production Updates', useCase: 'Send approved updates for selections, permits, material delivery, weather delays, crew schedule, decking discoveries, completion, and final walkthrough.' },
          { itemSlug: 'photo-document-management', displayTitle: 'Roof Photos & Claim Documents', useCase: 'Organize inspection photos, measurements, estimates, contracts, selections, insurance files, supplements, invoices, warranties, and completion proof.' },
          { itemSlug: 'invoicing-payments', displayTitle: 'Deposits + Progress Payments', useCase: 'Coordinate deposits, insurance proceeds, supplements, progress invoices, final payment, and overdue follow-up with the project status.' },
          { itemSlug: 'reviews-referrals', displayTitle: 'Reviews + Neighborhood Referrals', useCase: 'Ask after the final walkthrough and turn successful local projects into reviews, yard-sign interest, and neighbor referrals.' },
        ],
      },
    ],
    faq: [
      {
        question: 'Can the software connect sales and production workflows?',
        answer: 'Yes. We can design the handoff from lead and inspection through estimate, contract, insurance steps, selections, production, completion, and payment, with eligible integrations scoped around your current tools.',
      },
      {
        question: 'Can it organize insurance and adjuster documents?',
        answer: 'Yes. The workflow can keep inspection photos, estimates, claim information, adjuster contacts, supplements, approvals, invoices, and completion documents with the roofing project.',
      },
      {
        question: 'Can it support storm-driven lead surges?',
        answer: 'Yes. Calls, texts, forms, scheduling, territory assignment, inspection status, and follow-up can share a structured workflow during peak storm demand.',
      },
      {
        question: 'Can homeowners receive production updates?',
        answer: 'Yes. The system can send approved updates about selections, permits, materials, weather, crew scheduling, discovered conditions, completion, warranties, and payment.',
      },
      {
        question: 'Can Voice AI still qualify storm and roofing calls?',
        answer: 'Yes. It can capture address, roof age, leak or visible damage, storm timing, insurance and adjuster context, urgency, photos needed, and preferred inspection time.',
      },
    ],
  },
  {
    slug: 'landscaping-companies',
    name: 'Landscaping Companies',
    shortName: 'Landscapers',
    title: 'Customer and field-service software for landscaping companies',
    seoTitle: 'Software for Landscaping Companies',
    seoDescription: 'Managed websites and customer workflows for landscapers. We connect estimate requests, recurring maintenance, crew updates, and seasonal follow-up.',
    keywords: 'landscaping company software, landscaper website, landscape estimate workflow, lawn route management, landscaping customer portal',
    hero: 'Connect recurring maintenance, seasonal work, design-build estimates, routes, crews, job updates, invoices, reviews, and renewals.',
    heroTitle: 'Grow landscaping relationships from the first property visit through every season.',
    pageIntro: 'Build the website and software workflows behind lawn and landscape maintenance, cleanups, irrigation, drainage, tree and plant work, hardscapes, design-build estimates, routes, crews, payment, and seasonal follow-up.',
    pageSeoTitle: 'Software for Landscaping Companies | Cyber Genie',
    pageSeoDescription: 'Managed websites and custom software for landscapers, covering estimates, recurring maintenance, routes, projects, crews, updates, invoices, and seasonal retention.',
    heroImage: landscapingCompaniesImage,
    heroImageAlt: 'A landscaping professional reviewing a residential garden plan with a homeowner',
    painPoints: [
      'Recurring maintenance, seasonal service, irrigation, and design-build work have different qualification and scheduling needs.',
      'Property size, access, gates, pets, existing conditions, photos, route density, and crew skills affect the next step.',
      'Estimates, routes, project changes, customer updates, invoices, renewals, and upsells often live in separate tools.',
    ],
    callExamples: [
      'Lawn maintenance inquiries',
      'Seasonal cleanup requests',
      'Irrigation and drainage questions',
      'Landscape design estimate calls',
    ],
    outcomes: [
      'Help property owners understand maintenance, seasonal, irrigation, drainage, hardscape, planting, and design-build services.',
      'Route each request by property, service type, estimate need, territory, route fit, crew requirements, and season.',
      'Keep proposals, project updates, invoices, service renewals, seasonal reminders, reviews, and referrals moving.',
    ],
    outcomeSections: [
      {
        outcome: 'get-customers',
        headline: 'Show the kind of property work you want more of.',
        entries: [
          { itemSlug: 'optimized-website', displayTitle: 'Landscaping Website', useCase: 'Explain recurring maintenance, cleanups, irrigation, drainage, planting, hardscapes, outdoor living, design-build work, and service areas clearly.' },
          { itemSlug: 'local-ai-search-visibility', displayTitle: 'Local Landscaping Search Visibility', useCase: 'Improve discovery for lawn care, cleanups, irrigation repair, drainage, hardscapes, planting, design, and commercial landscape searches.' },
          { itemSlug: 'project-showcases', displayTitle: 'Landscape Project Showcases', useCase: 'Present approved before-and-after photos, plans, materials, plantings, hardscapes, drainage corrections, and maintenance transformations.' },
          { itemSlug: 'social-media-management', displayTitle: 'Seasonal Landscape Content', useCase: 'Turn project progress, property transformations, seasonal advice, crew work, and maintenance results into consistent social proof.' },
        ],
      },
      {
        outcome: 'win-customers',
        headline: 'Separate route-ready maintenance from site-visit projects.',
        entries: [
          { itemSlug: 'ai-voice', displayTitle: 'Landscaping Intake', useCase: 'Capture property type, service need, size, access, gates, pets, current condition, desired timing, photos, and whether an on-site estimate is needed.' },
          { itemSlug: 'request-pipeline', displayTitle: 'Maintenance & Project Pipeline', useCase: 'Separate recurring maintenance, seasonal work, irrigation, drainage, enhancements, hardscapes, and design-build opportunities by owner and next step.' },
          { itemSlug: 'scheduling', displayTitle: 'Estimate & Crew Scheduling', useCase: 'Coordinate property visits and work by territory, route density, crew skills, equipment, season, weather, access, and customer availability.' },
          { itemSlug: 'quoting-follow-up', displayTitle: 'Landscape Proposal Follow-Up', useCase: 'Keep scope options, measurements, design decisions, materials, deposits, approvals, and proposal reminders moving for larger projects.' },
        ],
      },
      {
        outcome: 'keep-customers',
        headline: 'Keep each property on plan through weather and seasonal change.',
        entries: [
          { itemSlug: 'customer-management', displayTitle: 'Customer & Property Records', useCase: 'Organize properties, access instructions, pets, service plans, plant or irrigation notes, preferences, route information, and follow-up history.' },
          { itemSlug: 'project-updates', displayTitle: 'Crew & Project Updates', useCase: 'Send approved service-day, weather-delay, material, design, schedule, completion, and care updates without relying on manual texts.' },
          { itemSlug: 'invoicing-payments', displayTitle: 'Recurring + Project Payments', useCase: 'Coordinate recurring invoices, project deposits, progress payments, final balances, payment links, and exception follow-up.' },
          { itemSlug: 'reactivation', displayTitle: 'Seasonal Service & Renewals', useCase: 'Bring customers back for spring cleanup, irrigation startup, enhancements, fall cleanup, winterization, pruning, and maintenance-plan renewal.' },
        ],
      },
    ],
    faq: [
      {
        question: 'Can the software support recurring maintenance and one-time projects?',
        answer: 'Yes. Route-based maintenance, seasonal work, irrigation, enhancements, and design-build projects can use different intake, estimate, scheduling, update, and billing workflows.',
      },
      {
        question: 'Can it connect with our field-service, routing, or estimating tools?',
        answer: 'We can scope eligible integrations for customers, properties, routes, visits, estimates, crews, invoices, and status data based on each vendor\'s supported access.',
      },
      {
        question: 'Can it help schedule around territory and weather?',
        answer: 'Yes. A custom workflow can account for service area, route density, crew and equipment requirements, property access, weather delays, and approved rescheduling rules.',
      },
      {
        question: 'Can customers receive project and service updates?',
        answer: 'Yes. The system can coordinate approved service-day, schedule, weather, material, milestone, completion, and care communication by property.',
      },
      {
        question: 'Can Voice AI still capture landscaping leads while crews are outside?',
        answer: 'Yes. It can collect property type, service need, size, access, pets, timing, photos needed, and estimate preferences, then create a structured office handoff.',
      },
    ],
  },
  {
    slug: 'pest-control',
    name: 'Pest Control',
    shortName: 'Pest Control',
    title: 'Customer and route software for pest-control companies',
    seoTitle: 'Software for Pest-Control Companies',
    seoDescription: 'Managed websites and customer workflows for pest control companies. Intake, inspections, recurring service reminders, and renewals configured and connected.',
    keywords: 'pest control software, pest control website, pest inspection workflow, pest route management, recurring pest service automation',
    hero: 'Connect infestation intake, inspections, technician routes, recurring plans, preparation instructions, payments, reviews, and renewals.',
    heroTitle: 'Turn urgent pest concerns into organized service and lasting protection.',
    pageIntro: 'Build the website and software workflows behind pest identification, inspection and treatment requests, route scheduling, recurring plans, preparation reminders, service documentation, payment, and renewal.',
    pageSeoTitle: 'Software for Pest-Control Companies | Cyber Genie',
    pageSeoDescription: 'Managed websites and custom software for pest-control companies, covering intake, inspections, routes, recurring plans, preparation, payments, and retention.',
    heroImage: pestControlImage,
    heroImageAlt: 'A pest-control technician explaining a home exterior inspection to a homeowner',
    painPoints: [
      'Different pests, property areas, severity, occupants, pets, and active conditions change the appropriate next step.',
      'One-time treatments, inspections, exclusion work, and recurring plans need different estimates and route rules.',
      'Preparation instructions, service notes, callbacks, payments, renewals, and warranty visits need consistent follow-through.',
    ],
    callExamples: [
      'Rodent, insect, and bed bug calls',
      'Recurring treatment questions',
      'Emergency service requests',
      'New customer estimate calls',
    ],
    outcomes: [
      'Help property owners understand the pests, inspection process, treatment options, recurring protection, and service area.',
      'Route each request by pest, affected area, severity, occupants, pets, property type, service plan, and technician route.',
      'Keep preparation, arrival, service reports, callbacks, invoices, renewals, reviews, and referrals organized.',
    ],
    outcomeSections: [
      {
        outcome: 'get-customers',
        headline: 'Answer the pest question before the customer calls three companies.',
        entries: [
          { itemSlug: 'optimized-website', displayTitle: 'Pest-Control Website', useCase: 'Create clear pages by pest, symptom, property area, inspection need, treatment approach, recurring plan, commercial service, and geography.' },
          { itemSlug: 'local-ai-search-visibility', displayTitle: 'Local Pest Search Visibility', useCase: 'Improve discovery for rodents, termites, ants, roaches, bed bugs, mosquitoes, wildlife, stinging insects, and other local concerns.' },
          { itemSlug: 'digital-advertising', displayTitle: 'Pest & Seasonal Campaigns', useCase: 'Run trackable campaigns by pest pressure, season, neighborhood, inspection type, commercial need, and recurring protection offer.' },
          { itemSlug: 'review-management', displayTitle: 'Service Review Management', useCase: 'Request reviews after resolved service while routing retreatment, communication, scheduling, or billing concerns back to the team.' },
        ],
      },
      {
        outcome: 'win-customers',
        headline: 'Collect the infestation context before assigning the inspection or route.',
        entries: [
          { itemSlug: 'ai-voice', displayTitle: 'Pest-Control Intake', useCase: 'Capture suspected pest, affected area, sightings, severity, timing, children or pets, property type, active spread, service-plan status, and callback details.' },
          { itemSlug: 'request-pipeline', displayTitle: 'Inspection & Service Pipeline', useCase: 'Separate new inspections, one-time treatments, recurring plans, warranty callbacks, exclusions, termite work, wildlife, and commercial accounts.' },
          { itemSlug: 'scheduling', displayTitle: 'Inspection & Route Scheduling', useCase: 'Coordinate visits by service area, pest type, technician certification, route density, urgency, preparation needs, access, and customer availability.' },
          { itemSlug: 'quoting-follow-up', displayTitle: 'Treatment Plan Follow-Up', useCase: 'Keep inspection findings, treatment options, recurring-plan choices, preparation steps, approvals, and estimate reminders moving.' },
        ],
      },
      {
        outcome: 'keep-customers',
        headline: 'Make preparation, service, warranty, and renewal easier to follow.',
        entries: [
          { itemSlug: 'project-updates', displayTitle: 'Preparation & Service Updates', useCase: 'Send approved preparation, arrival, access, treatment, re-entry, follow-up, weather, and retreatment communication by service type.' },
          { itemSlug: 'photo-document-management', displayTitle: 'Inspection & Service Records', useCase: 'Organize pest evidence, inspection photos, diagrams, treatment notes, product records, agreements, invoices, and warranty documentation.' },
          { itemSlug: 'invoicing-payments', displayTitle: 'Recurring + One-Time Payments', useCase: 'Coordinate inspection fees, treatment invoices, recurring-plan billing reminders, payment links, and account exceptions.' },
          { itemSlug: 'reactivation', displayTitle: 'Renewals & Seasonal Protection', useCase: 'Bring customers back for recurring-plan renewals, termite inspections, mosquito season, rodent pressure, exclusion follow-up, and lapsed protection.' },
        ],
      },
    ],
    faq: [
      {
        question: 'Can the software support both one-time treatments and recurring pest plans?',
        answer: 'Yes. Inspections, one-time treatments, recurring protection, warranty callbacks, exclusions, termite, wildlife, and commercial work can have distinct stages and rules.',
      },
      {
        question: 'Can it connect with our route or field-service platform?',
        answer: 'We can scope eligible integrations for customers, properties, service plans, requests, routes, appointments, service status, and invoices based on vendor access.',
      },
      {
        question: 'Can it send preparation instructions for different treatments?',
        answer: 'Yes. Approved instructions can be selected by pest, treatment, property type, occupants, pets, appointment stage, and your operational rules.',
      },
      {
        question: 'Can it track callbacks and warranty service?',
        answer: 'Yes. The workflow can attach the prior service, agreement, issue, evidence, technician notes, follow-up timing, and responsible team member to the callback.',
      },
      {
        question: 'Can Voice AI still collect after-hours pest leads?',
        answer: 'Yes. It can gather suspected pest, affected area, severity, timing, children or pets, property details, and urgency, then create the appropriate follow-up record.',
      },
    ],
  },
  {
    slug: 'auto-repair-shops',
    name: 'Auto Repair Shops',
    shortName: 'Auto Repair',
    title: 'Customer and shop workflow software for auto repair',
    seoTitle: 'Software for Auto Repair Shops',
    seoDescription: 'Managed websites and customer workflows for auto repair shops. Vehicle intake, appointments, estimates, repair updates, and maintenance reminders connected.',
    keywords: 'auto repair shop software, mechanic website, digital vehicle intake, repair status workflow, auto service reminder automation',
    hero: 'Connect vehicle intake, appointments, inspections, estimates, approvals, repair status, payments, reviews, and maintenance reminders.',
    heroTitle: 'Keep every vehicle and customer moving from concern to completed repair.',
    pageIntro: 'Build the website and software workflows behind service discovery, vehicle and symptom intake, appointments, digital inspections, estimates, customer approvals, parts and repair status, payment, reviews, and maintenance reminders.',
    pageSeoTitle: 'Software for Auto Repair Shops | Cyber Genie',
    pageSeoDescription: 'Managed websites and custom software for auto shops, covering vehicle intake, scheduling, inspections, estimates, approvals, repair updates, payment, and retention.',
    heroImage: autoRepairShopsImage,
    heroImageAlt: 'An auto repair service advisor reviewing vehicle information with a customer',
    painPoints: [
      'Service advisors split attention among walk-ins, phones, technicians, estimates, parts, and customer approvals.',
      'Vehicle, symptom, diagnostic, inspection, estimate, authorization, parts, and technician status need one coherent handoff.',
      'Maintenance reminders, declined-work follow-up, reviews, and repeat visits often depend on the shop remembering to reach out.',
    ],
    callExamples: [
      'Repair appointment requests',
      'Vehicle issue intake',
      'Repair status questions',
      'Estimate and callback requests',
    ],
    outcomes: [
      'Help drivers understand your services, vehicles served, diagnostic process, certifications, warranties, and appointment options.',
      'Route each request by vehicle, symptom, drivability, warning lights, service need, appointment type, and advisor ownership.',
      'Keep inspections, estimates, approvals, parts and repair updates, payment, reviews, declined work, and maintenance reminders moving.',
    ],
    outcomeSections: [
      {
        outcome: 'get-customers',
        headline: 'Build trust before a driver hands you the keys.',
        entries: [
          { itemSlug: 'optimized-website', displayTitle: 'Auto Repair Website', useCase: 'Explain diagnostics, maintenance, brakes, tires, suspension, electrical, engine, transmission, vehicles served, warranties, certifications, and scheduling.' },
          { itemSlug: 'local-ai-search-visibility', displayTitle: 'Local Auto Service Visibility', useCase: 'Improve discovery for warning lights, noises, no-starts, brakes, alignments, maintenance, inspections, and make-specific service searches.' },
          { itemSlug: 'review-management', displayTitle: 'Shop Review Management', useCase: 'Request reviews after successful service while routing diagnosis, estimate, authorization, repair, schedule, or billing concerns to the manager.' },
          { itemSlug: 'project-showcases', displayTitle: 'Repair & Shop Proof', useCase: 'Present certifications, equipment, inspection process, technician expertise, warranties, and approved repair stories with useful context.' },
        ],
      },
      {
        outcome: 'win-customers',
        headline: 'Give the service advisor useful vehicle context before the appointment.',
        entries: [
          { itemSlug: 'ai-voice', displayTitle: 'Vehicle & Symptom Intake', useCase: 'Capture year, make, model, mileage, symptoms, warning lights, drivability, when the issue began, preferred timing, tow status, and callback details.' },
          { itemSlug: 'request-pipeline', displayTitle: 'Service Request Pipeline', useCase: 'Track appointment requests, diagnostics, estimates, customer authorizations, parts, technician status, quality check, pickup, and follow-up ownership.' },
          { itemSlug: 'scheduling', displayTitle: 'Bay & Appointment Scheduling', useCase: 'Coordinate drop-offs, waiting appointments, diagnostics, inspections, technician capacity, bay needs, parts timing, and customer transportation.' },
          { itemSlug: 'quoting-follow-up', displayTitle: 'Estimate & Approval Follow-Up', useCase: 'Keep inspection findings, recommended work, estimate questions, approvals, declines, deposits, and promised callback times visible.' },
        ],
      },
      {
        outcome: 'keep-customers',
        headline: 'Keep drivers informed without pulling advisors away from the counter.',
        entries: [
          { itemSlug: 'project-updates', displayTitle: 'Repair Status Updates', useCase: 'Send approved updates for inspection, diagnosis, estimate, authorization, parts, repair progress, quality check, completion, and pickup.' },
          { itemSlug: 'photo-document-management', displayTitle: 'Inspection Photos & Records', useCase: 'Organize digital inspection photos, videos, measurements, estimates, authorizations, invoices, warranties, and technician notes with the vehicle.' },
          { itemSlug: 'invoicing-payments', displayTitle: 'Repair Payments', useCase: 'Coordinate deposits, approved work, final invoices, payment links, financing handoffs, and balance follow-up before or after pickup.' },
          { itemSlug: 'reactivation', displayTitle: 'Maintenance & Declined-Work Follow-Up', useCase: 'Bring customers back for mileage-based service, inspections, seasonal needs, declined repairs, tire rotations, and recommended follow-up.' },
        ],
      },
    ],
    faq: [
      {
        question: 'Does this replace our shop-management system?',
        answer: 'Usually no. We can improve intake, communication, approvals, reporting, or follow-up around the shop system you already use and scope eligible integrations during discovery.',
      },
      {
        question: 'Can customers approve estimates and receive repair updates?',
        answer: 'Yes. A custom workflow can present approved findings and estimates, record authorization, and send status updates based on the stages and permissions your shop defines.',
      },
      {
        question: 'Can it organize digital inspection photos and recommendations?',
        answer: 'Yes. Inspection media, measurements, technician notes, recommendations, estimates, approvals, declines, and future follow-up can stay connected to the vehicle record.',
      },
      {
        question: 'Can it remind customers about maintenance and declined work?',
        answer: 'Yes. The workflow can segment by vehicle, mileage, date, service interval, declined recommendation, tire need, inspection, or other approved follow-up trigger.',
      },
      {
        question: 'Can Voice AI still help while service advisors are busy?',
        answer: 'Yes. It can collect vehicle and symptom details, handle approved appointment and status questions, and avoid diagnosis or unapproved repair pricing.',
      },
    ],
  },
  {
    slug: 'emergency-restoration',
    name: 'Emergency Restoration',
    shortName: 'Restoration',
    title: 'Emergency intake and project software for restoration companies',
    seoTitle: 'Software for Emergency Restoration Companies',
    seoDescription: 'Managed websites and customer workflows for restoration companies. Emergency intake, dispatch handoffs, documentation, and project updates connected.',
    keywords: 'restoration company software, water damage website, restoration intake workflow, mitigation documentation, restoration project portal',
    hero: 'Connect emergency intake, on-call dispatch, mitigation documentation, insurance coordination, project updates, invoices, reviews, and referrals.',
    heroTitle: 'Move every property loss from urgent intake to documented recovery.',
    pageIntro: 'Build the website and software workflows behind water, fire, smoke, mold, biohazard, and storm response, including on-call routing, site documentation, insurance context, mitigation updates, reconstruction handoffs, payment, and referral follow-up.',
    pageSeoTitle: 'Software for Emergency Restoration Companies | Cyber Genie',
    pageSeoDescription: 'Managed websites and custom software for restoration companies, covering emergency intake, dispatch, mitigation documentation, insurance coordination, updates, and payment.',
    heroImage: emergencyRestorationImage,
    heroImageAlt: 'A restoration specialist reviewing water damage with a homeowner',
    painPoints: [
      'Water, fire, smoke, mold, biohazard, and storm losses require different safety, urgency, equipment, and escalation paths.',
      'On-call teams need source control, affected areas, occupants, access, insurance, referral source, and loss timing before dispatch.',
      'Photos, moisture data, work authorization, equipment logs, adjuster communication, project updates, invoices, and reconstruction handoffs must stay connected.',
    ],
    callExamples: [
      'Water damage and flooding calls',
      'Fire and smoke damage intake',
      'Mold inspection requests',
      'Storm damage emergency calls',
    ],
    outcomes: [
      'Help property owners, managers, plumbers, agents, and adjusters understand your emergency response and restoration capabilities.',
      'Route each loss by damage type, active source, safety, occupants, property, referral source, service area, insurance, and on-call coverage.',
      'Keep mitigation documentation, equipment and drying updates, insurance coordination, invoices, reviews, and referral relationships organized.',
    ],
    outcomeSections: [
      {
        outcome: 'get-customers',
        headline: 'Be credible before the property owner needs an emergency response.',
        entries: [
          { itemSlug: 'optimized-website', displayTitle: 'Restoration Website', useCase: 'Explain water, fire, smoke, mold, biohazard, storm, commercial, contents, and reconstruction services with emergency and referral contact paths.' },
          { itemSlug: 'local-ai-search-visibility', displayTitle: 'Emergency Restoration Visibility', useCase: 'Improve discovery for active water loss, fire and smoke cleanup, mold, storm damage, sewage, and emergency restoration searches.' },
          { itemSlug: 'digital-advertising', displayTitle: 'Loss-Type & Territory Campaigns', useCase: 'Run trackable campaigns by loss type, service area, weather event, commercial property need, referral source, and current response capacity.' },
          { itemSlug: 'project-showcases', displayTitle: 'Restoration Case Stories', useCase: 'Present approved loss scenarios, response approach, mitigation documentation, property challenges, and recovery outcomes without exposing sensitive customer details.' },
        ],
      },
      {
        outcome: 'win-customers',
        headline: 'Give the on-call team the loss context needed to respond.',
        entries: [
          { itemSlug: 'ai-voice', displayTitle: 'Emergency Loss Intake', useCase: 'Capture loss type, active source, affected areas, standing water, fire or smoke conditions, safety, occupants, access, insurance, referral source, and urgency.' },
          { itemSlug: 'request-pipeline', displayTitle: 'Loss & Referral Pipeline', useCase: 'Track property-owner, plumber, agent, adjuster, property-manager, and commercial referrals from intake through dispatch, authorization, mitigation, and handoff.' },
          { itemSlug: 'scheduling', displayTitle: 'On-Call Dispatch & Inspection Scheduling', useCase: 'Coordinate emergency dispatch, inspections, monitoring visits, equipment checks, adjuster meetings, and reconstruction handoffs by territory and capacity.' },
          { itemSlug: 'sales-assistant', displayTitle: 'Restoration Operations Assistant', useCase: 'Help staff find approved process answers, job status, contacts, documentation requirements, escalation rules, and the next responsible person.' },
        ],
      },
      {
        outcome: 'keep-customers',
        headline: 'Keep the property owner and referral source informed through recovery.',
        entries: [
          { itemSlug: 'project-updates', displayTitle: 'Mitigation & Recovery Updates', useCase: 'Send approved updates for arrival, source control, equipment, monitoring, drying progress, documentation, adjuster coordination, completion, and reconstruction handoff.' },
          { itemSlug: 'photo-document-management', displayTitle: 'Loss Photos & Documentation', useCase: 'Organize site photos, moisture readings, diagrams, authorizations, equipment logs, daily notes, estimates, insurance communication, invoices, and completion files.' },
          { itemSlug: 'invoicing-payments', displayTitle: 'Restoration Billing Follow-Up', useCase: 'Coordinate deposits, deductibles, progress invoices, insurance-related balances, payment links, and account exceptions with the project status.' },
          { itemSlug: 'reviews-referrals', displayTitle: 'Reviews & Referral Relationships', useCase: 'Request feedback after a resolved loss and maintain appropriate follow-up with property owners, plumbers, agents, managers, and other referral partners.' },
        ],
      },
    ],
    faq: [
      {
        question: 'Can the software support both mitigation and reconstruction workflows?',
        answer: 'Yes. Emergency intake, dispatch, mitigation, monitoring, documentation, contents, estimates, reconstruction handoff, billing, and completion can have connected but distinct stages.',
      },
      {
        question: 'Can it organize photos, moisture readings, and equipment logs?',
        answer: 'Yes. A custom workflow can keep approved field documentation, readings, diagrams, equipment, notes, authorizations, insurance communication, and completion proof with the loss record.',
      },
      {
        question: 'Can it support referral sources and insurance communication?',
        answer: 'Yes. The system can identify the referring plumber, agent, adjuster, manager, or partner; preserve approved contacts and updates; and keep ownership visible.',
      },
      {
        question: 'Can this work across multiple branches or service territories?',
        answer: 'Yes. Intake and dispatch can preserve branch, territory, team, capacity, equipment, escalation, and referral-source rules while adding centralized visibility.',
      },
      {
        question: 'Can Voice AI still cover emergency restoration calls after hours?',
        answer: 'Yes. It can collect loss type, active source, affected areas, safety, occupants, access, insurance, referral source, location, and urgency before alerting the on-call team.',
      },
    ],
  },
  {
    slug: 'medspas',
    name: 'MedSpas',
    shortName: 'MedSpas',
    title: 'Client experience software for MedSpas',
    seoTitle: 'Software for MedSpas',
    seoDescription: 'Managed websites and customer workflows for medspas. Treatment inquiries, consultation booking, client follow-up, and rebooking configured around the practice.',
    keywords: 'MedSpa software, MedSpa website, MedSpa AI receptionist, MedSpa lead follow-up, MedSpa appointment scheduling',
    hero: 'Turn treatment searches and consultation questions into booked, returning clients without adding more front-desk work.',
    heroTitle: 'Get, win, and keep more MedSpa clients.',
    pageIntro: 'Build a connected client journey across treatment pages, local search, calls, texts, consultation booking, follow-up, reviews, and rebooking.',
    pageSeoTitle: 'Software for MedSpas | Cyber Genie',
    pageSeoDescription: 'Help your MedSpa attract qualified clients, respond to treatment inquiries, book consultations, manage follow-up, and earn repeat visits.',
    heroImage: medspasImage,
    heroImageAlt: 'A MedSpa practitioner reviewing a treatment plan with a client',
    painPoints: [
      'Treatment inquiries arrive after hours and often go to the first provider that responds clearly.',
      'Prospects need education and reassurance before they are ready to book a consultation.',
      'Rebooking, aftercare, reviews, and referrals can slip when the front desk is busy.',
    ],
    callExamples: [
      'Treatment and consultation questions',
      'Pricing, financing, and membership inquiries',
      'Appointment booking and rescheduling',
      'Approved pre-visit and aftercare guidance',
    ],
    outcomes: [
      'Present treatments, providers, and proof clearly across search and the website.',
      'Respond to new inquiries quickly and move qualified prospects toward a consultation.',
      'Keep aftercare, rebooking, reviews, and referrals organized after each visit.',
    ],
    outcomeSections: [
      {
        outcome: 'get-customers',
        headline: 'Build trust before a client ever calls.',
        entries: [
          { itemSlug: 'optimized-website', useCase: 'Create clear treatment, provider, pricing-context, and consultation pages around the questions clients actually ask.' },
          { itemSlug: 'local-ai-search-visibility', useCase: 'Improve how your MedSpa appears for local treatment searches and AI-assisted recommendations.' },
          { itemSlug: 'review-management', useCase: 'Turn positive visits into a steady stream of credible reviews while routing concerns back to your team.' },
          { itemSlug: 'project-showcases', useCase: 'Organize approved before-and-after proof, practitioner expertise, and client stories into persuasive website content.' },
        ],
      },
      {
        outcome: 'win-customers',
        headline: 'Move treatment interest toward a booked consultation.',
        entries: [
          { itemSlug: 'ai-voice', useCase: 'Answer routine treatment questions, capture intent, and escalate clinical or sensitive questions to your staff.' },
          { itemSlug: 'request-pipeline', useCase: 'Keep every consultation inquiry visible by treatment, source, status, and next follow-up.' },
          { itemSlug: 'scheduling', useCase: 'Offer consultation times using the availability and booking rules your team approves.' },
        ],
      },
      {
        outcome: 'keep-customers',
        headline: 'Keep the relationship moving after the first appointment.',
        entries: [
          { itemSlug: 'customer-management', useCase: 'Keep client preferences, inquiries, visits, and agreed next steps organized for the team.' },
          { itemSlug: 'project-updates', useCase: 'Send approved pre-visit instructions, aftercare reminders, and check-ins at the right time.' },
          { itemSlug: 'reviews-referrals', useCase: 'Ask satisfied clients for reviews and referrals without relying on the front desk to remember.' },
          { itemSlug: 'reactivation', useCase: 'Reconnect with clients who are due for a repeat treatment, consultation, or seasonal service.' },
        ],
      },
    ],
    faq: [
      { question: 'Can the system answer treatment questions?', answer: 'Yes, for approved non-clinical information such as services, consultation process, preparation, pricing context, and scheduling. Clinical advice and sensitive questions are routed to your licensed team.' },
      { question: 'Can it follow up with new consultation leads?', answer: 'Yes. Voice, text, and pipeline workflows can respond quickly, collect treatment interest, and keep the next follow-up visible until the prospect books or opts out.' },
      { question: 'Can it work with our booking and client systems?', answer: 'We can assess and implement eligible third-party integrations during discovery, subject to the access and capabilities provided by each vendor.' },
      { question: 'Can it support multiple MedSpa locations?', answer: 'Yes. We can configure location-specific pages, phone routing, booking rules, offers, and reporting while preserving a consistent brand experience.' },
      { question: 'Can it help with repeat visits?', answer: 'Yes. Approved rebooking reminders, seasonal campaigns, aftercare check-ins, reviews, referrals, and reactivation workflows can be coordinated around your client journey.' },
    ],
  },
  {
    slug: 'day-cares',
    name: 'Day Cares',
    shortName: 'Day Cares',
    title: 'Enrollment and family communication software for day care centers',
    seoTitle: 'Software for Day Care Centers',
    seoDescription: 'Managed websites and customer workflows for day cares. Program inquiries, tour scheduling, enrollment follow-up, and family communication connected.',
    keywords: 'day care software, child care website, day care enrollment automation, day care tour scheduling, child care lead follow-up',
    hero: 'Turn parent questions into tours and enrollments while keeping waitlists, updates, payments, and referrals organized.',
    heroTitle: 'Help more families find, choose, and stay with your day care.',
    pageIntro: 'Connect local discovery, parent inquiries, tour scheduling, enrollment follow-up, family communication, billing reminders, reviews, and referrals.',
    pageSeoTitle: 'Software for Day Cares | Cyber Genie',
    pageSeoDescription: 'Help families discover your day care, get quick answers, schedule tours, complete enrollment steps, and stay connected after their child starts.',
    heroImage: dayCaresImage,
    heroImageAlt: 'A day care director welcoming a parent and child at a learning center',
    painPoints: [
      'Parents often contact several centers and expect quick answers about openings, ages, schedules, and tuition.',
      'Tour requests, waitlists, and enrollment documents can become scattered across calls, forms, and spreadsheets.',
      'Routine updates and payment reminders take time away from children, families, and staff support.',
    ],
    callExamples: [
      'Age-group availability and waitlist questions',
      'Tour scheduling and rescheduling',
      'Tuition, hours, meals, and program questions',
      'Enrollment step and document reminders',
    ],
    outcomes: [
      'Help families understand your programs, classrooms, philosophy, and availability.',
      'Move inquiries into scheduled tours and organized enrollment follow-up.',
      'Keep family communication, payment reminders, reviews, and referrals moving.',
    ],
    outcomeSections: [
      {
        outcome: 'get-customers',
        headline: 'Give families confidence before their first tour.',
        entries: [
          { itemSlug: 'optimized-website', useCase: 'Explain age groups, schedules, curriculum, safety practices, tuition context, and the tour process clearly.' },
          { itemSlug: 'local-ai-search-visibility', useCase: 'Improve local discovery when parents search for care by age, neighborhood, hours, or program type.' },
          { itemSlug: 'review-management', useCase: 'Build trusted parent proof while giving your team a private path to address concerns.' },
          { itemSlug: 'project-showcases', useCase: 'Show real classrooms, activities, teachers, and family events with approved photos and stories.' },
        ],
      },
      {
        outcome: 'win-customers',
        headline: 'Turn parent questions into tours and enrollment steps.',
        entries: [
          { itemSlug: 'ai-voice', useCase: 'Answer routine program questions and capture age, desired start date, schedule needs, and contact details.' },
          { itemSlug: 'request-pipeline', useCase: 'Track inquiries, tours, waitlists, applications, and next actions in one clear enrollment view.' },
          { itemSlug: 'scheduling', useCase: 'Let qualified families request tours within the times and staffing rules you set.' },
        ],
      },
      {
        outcome: 'keep-customers',
        headline: 'Make routine family communication easier to sustain.',
        entries: [
          { itemSlug: 'customer-management', useCase: 'Keep family contacts, enrollment status, communication preferences, and follow-up history organized.' },
          { itemSlug: 'project-updates', useCase: 'Coordinate approved reminders, classroom updates, event notices, and enrollment next steps.' },
          { itemSlug: 'invoicing-payments', useCase: 'Send clear tuition and payment reminders while keeping exceptions with the right staff member.' },
          { itemSlug: 'reviews-referrals', useCase: 'Invite happy families to share reviews and refer other parents at natural moments.' },
        ],
      },
    ],
    faq: [
      { question: 'Can it answer parents after hours?', answer: 'Yes. It can answer approved questions about programs, hours, age groups, tuition context, tours, and next steps, then create a clean handoff for anything requiring staff review.' },
      { question: 'Can it manage a waitlist?', answer: 'We can build a lightweight waitlist and enrollment pipeline around your current process, including status, age group, desired start date, and follow-up tasks.' },
      { question: 'Can it schedule tours?', answer: 'Yes. Scheduling can follow your approved tour windows, capacity, location, and staffing rules.' },
      { question: 'Does it replace our child care management system?', answer: 'Usually no. Cyber Genie improves the inquiry and family experience around the systems you already use, with eligible integrations scoped during discovery.' },
      { question: 'Can it send family updates?', answer: 'Yes, for approved operational messages and reminders. Sensitive child-specific communication stays within the workflow and review rules you define.' },
    ],
  },
  {
    slug: 'animal-hospitals',
    name: 'Animal Hospitals',
    shortName: 'Animal Hospitals',
    title: 'Veterinary client software for animal hospitals',
    seoTitle: 'Software for Animal Hospitals',
    seoDescription: 'Managed websites and client workflows for animal hospitals. Call routing, reminders, and ezyVet or HVMS integrations configured around approved protocols.',
    keywords: 'animal hospital AI receptionist, veterinary client experience, equine hospital automation, ezyVet integration, HVMS integration, multi-location veterinary marketing',
    hero: 'Create one responsive client experience across calls, texts, scheduling, follow-up, and every hospital location without replacing your PIMS.',
    heroTitle: 'Get, win, and keep clients across every animal hospital.',
    pageIntro: 'Cyber Genie connects local visibility, client communication, scheduling, follow-up, and multi-location reporting around the systems your veterinary teams already use.',
    pageSeoTitle: 'Veterinary Technology Partner for Animal Hospitals | Cyber Genie',
    pageSeoDescription: 'Build a connected client experience for companion and equine hospitals across discovery, intake, routing, scheduling, follow-up, reporting, and managed ezyVet or HVMS integration.',
    serviceName: 'Veterinary Technology Partner for Animal Hospitals',
    heroImage: animalHospitalsImage,
    heroImageAlt: 'An equine veterinarian and care coordinator reviewing a case beside a horse',
    painPoints: [
      'Clients expect fast answers while reception and clinical teams are already coordinating active cases.',
      'Emergency, referral, wellness, surgery, and ambulatory requests need different intake and escalation paths.',
      'Multi-location groups need consistent standards without erasing each hospital\'s specialties, schedule, or local relationships.',
    ],
    callExamples: [
      'New-client and referring-veterinarian intake',
      'Emergency and after-hours call capture',
      'Appointment, prescription refill, medical-record, and patient-status requests',
      'Discharge, follow-up, and recheck coordination',
    ],
    outcomes: [
      'Help clients find the right location, specialty, and next step before they call.',
      'Capture structured context and route each request by urgency, service, hospital, and approved protocol.',
      'Keep reminders, updates, reviews, referrals, and reactivation connected to the existing PIMS workflow.',
    ],
    outcomeSections: [
      {
        outcome: 'get-customers',
        headline: 'Help the right clients find the right hospital.',
        linkLabel: 'Explore Veterinary Visibility',
        entries: [
          { itemSlug: 'optimized-website', displayTitle: 'Veterinary Website', useCase: 'Build clear paths by hospital location, species, specialty, and type of care, from wellness and surgery to emergency, referral, and ambulatory services.' },
          { itemSlug: 'local-ai-search-visibility', displayTitle: 'Local Veterinary Search Visibility', useCase: 'Help pet owners and referring veterinarians find the right location by geography, species, specialty, availability, and care need.' },
          { itemSlug: 'review-management', displayTitle: 'Client Review Management', useCase: 'Build local trust for each hospital while routing sensitive client concerns to the appropriate hospital team.' },
          { itemSlug: 'project-showcases', displayTitle: 'Hospital & Care Highlights', useCase: 'Present hospitals, veterinarians, care teams, specialties, equipment, and approved case stories with credible clinical context.' },
        ],
      },
      {
        outcome: 'win-customers',
        headline: 'Route every request with the context your team needs.',
        linkLabel: 'Explore Veterinary Client Intake',
        entries: [
          { itemSlug: 'ai-voice', displayTitle: 'Veterinary AI Voice', useCase: 'Capture client, patient, hospital location, referring veterinarian, reason for calling, and urgency while escalating clinical decisions to veterinary staff.' },
          { itemSlug: 'request-pipeline', displayTitle: 'Client Request Pipeline', useCase: 'Route client requests by hospital, department, species, service line, urgency, and responsible team member without losing visibility.' },
          { itemSlug: 'scheduling', displayTitle: 'Appointment Scheduling', useCase: 'Coordinate approved appointment types, hospital calendars, veterinarian availability, ambulatory coverage, and location-specific rules.' },
        ],
      },
      {
        outcome: 'keep-customers',
        headline: 'Keep care communication connected after the appointment.',
        linkLabel: 'Explore Veterinary Client Follow-Up',
        entries: [
          { itemSlug: 'customer-management', displayTitle: 'Client Management', useCase: 'Give front-desk and client-service teams a clear view of client requests and follow-up while the PIMS remains the clinical source of truth.' },
          { itemSlug: 'project-updates', displayTitle: 'Patient Update', useCase: 'Coordinate approved discharge reminders, diagnostic-status updates, referral handoffs, rechecks, and care-plan follow-up.' },
          { itemSlug: 'invoicing-payments', displayTitle: 'Billing + Payments', useCase: 'Support client billing, payment reminders, and approved account follow-up without creating another disconnected worklist.' },
          { itemSlug: 'reviews-referrals', displayTitle: 'Client Reviews + Referrals', useCase: 'Invite satisfied clients to leave reviews and refer other pet owners while collecting referring-veterinarian feedback at appropriate moments.' },
        ],
      },
    ],
    featureSection: {
      title: 'One client-service model for one hospital or an entire veterinary network.',
      description: 'Standardize the parts of the client journey that should be consistent, while preserving local phone rules, specialties, clinicians, schedules, and escalation paths.',
      items: [
        { title: 'Location-aware client routing', description: 'Send each call, text, referral, and follow-up task to the right hospital, specialty service, or on-call team.' },
        { title: 'Shared service standards, local control', description: 'Use approved group-level answers and guardrails with hospital-specific hours, services, calendars, and handoffs.' },
        { title: 'Veterinary network visibility', description: 'Compare inquiry volume, response, appointment requests, client needs, and follow-up outcomes across hospital locations.' },
        { title: 'Phased hospital rollout', description: 'Start with one hospital or client workflow, validate it with veterinary staff, and expand through the network in manageable stages.' },
      ],
    },
    integrationSection: {
      title: 'Connect the client experience to the PIMS your teams already use.',
      description: 'Cyber Genie scopes and implements client communication, scheduling, and follow-up around the hospital PIMS, so front-desk and care teams can avoid another disconnected inbox or dashboard.',
      systems: [
        {
          name: 'ezyVet',
          label: 'Official REST API',
          description: 'Use ezyVet\'s official OAuth 2.0 REST API to connect approved client, patient, appointment, communication, and workflow data. Access is provisioned as a Private Integration or Commercial Partnership.',
          links: [
            { label: 'API documentation', href: 'https://developers.ezyvet.com/' },
            { label: 'Access options', href: 'https://developers.ezyvet.com/apply.html' },
          ],
        },
        {
          name: 'HVMS',
          label: 'Hosted or on-premises',
          description: 'HVMS can run in its Azure-hosted environment or on an on-premises server. We confirm the deployment and HVMS-approved access first, then define permitted data, read/write behavior, sync method, security boundary, and ongoing support.',
          links: [
            { label: 'Hosting architecture', href: 'https://hvmssoftware.com/hvms-hosting/' },
            { label: 'Verified integrations', href: 'https://hvmssoftware.com/marketplace/' },
          ],
        },
        {
          name: 'Additional API-ready PIMS',
          label: 'Documented integration paths',
          description: 'Other documented options include Vetspire GraphQL, Provet Cloud REST, Digitail, DaySmart Vet, and IDEXX Data Services for compatible PIMS such as Cornerstone and AVImark.',
          links: [
            { label: 'Vetspire', href: 'https://developer.vetspire.com/' },
            { label: 'Provet Cloud', href: 'https://developers.provetcloud.com/' },
            { label: 'Digitail', href: 'https://documentation.digitail.io/' },
            { label: 'DaySmart Vet', href: 'https://sandbox.vettersoftware.com/docs/' },
            { label: 'IDEXX Data Services', href: 'https://dataservices.idexx.com/' },
          ],
        },
      ],
      note: 'Integration scope, available data, write-back behavior, timing, and cost depend on each vendor\'s supported access, permissions, and technical requirements. No connection is assumed until the practice and vendor authorize the access path.',
    },
    whiteGloveCta: {
      title: 'Want the whole veterinary client experience handled?',
      description: 'A Technology Partner can map the client process and corresponding technologies for your hospital or network, then help manage the agreed platforms, integrations, and improvements.',
    },
    faq: [
      { question: 'Can Cyber Genie integrate with ezyVet?', answer: 'Yes, through ezyVet\'s official OAuth 2.0 REST API when the practice and use case qualify for access. ezyVet supports Private Integrations for an individual practice or organization and Commercial Partnerships for broader distribution. We scope the approved data and workflow before implementation.' },
      { question: 'Can Cyber Genie integrate with HVMS?', answer: 'We can scope an HVMS integration through a vendor-approved access path. HVMS supports both Azure-hosted and on-premises server deployments, so we first confirm the environment, permitted access, data boundaries, sync behavior, and support responsibilities before implementation.' },
      { question: 'Can this support a multi-location veterinary hospital group?', answer: 'Yes. The workflow can support companion, specialty, emergency, and equine hospitals while preserving location-specific services, calendars, escalation rules, and teams. It can also add shared standards, centralized reporting, and a phased rollout across the hospital network.' },
      { question: 'Can AI triage veterinary emergencies?', answer: 'It can collect structured intake and identify approved escalation signals, but it does not diagnose or replace clinical judgment. Emergency and medical decisions are routed to veterinary staff using protocols the organization approves.' },
      { question: 'Will this replace our PIMS?', answer: 'No. The goal is to improve the client experience around your PIMS and keep the PIMS as the clinical source of truth. Any integration is scoped around vendor access, data governance, and staff workflow.' },
      { question: 'Can it support ambulatory equine calls?', answer: 'Yes. Intake can capture owner, patient, farm or boarding location, referring veterinarian, reason for the call, urgency, preferred timing, and the correct hospital or ambulatory team for follow-up.' },
    ],
  },
  {
    slug: 'insurance-agencies',
    name: 'Insurance Agencies',
    shortName: 'Insurance',
    title: 'Client workflow software for insurance agencies',
    seoTitle: 'Software for Insurance Agencies',
    seoDescription: 'Managed websites and customer workflows for insurance agencies. Quote inquiries, producer handoffs, policy-service follow-up, and renewal reminders connected.',
    keywords: 'insurance agency software, insurance agency website, insurance lead follow-up, insurance quote automation, policy renewal workflow',
    hero: 'Turn quote and policy-service inquiries into organized next steps while keeping renewals, reviews, and referrals moving.',
    heroTitle: 'Turn more insurance inquiries into long-term client relationships.',
    pageIntro: 'Connect local discovery, quote intake, phone and text response, producer follow-up, policy service, renewal communication, reviews, and referrals.',
    pageSeoTitle: 'Software for Insurance Agencies | Cyber Genie',
    pageSeoDescription: 'Help your insurance agency capture quote requests, respond faster, organize producer follow-up, support policyholders, and improve renewals and referrals.',
    heroImage: insuranceAgenciesImage,
    heroImageAlt: 'An insurance advisor reviewing coverage information with a business owner',
    painPoints: [
      'Quote shoppers contact several agencies and may move on before a producer can respond.',
      'New business, policy service, claims questions, and renewals need different routing and ownership.',
      'Follow-up often depends on individual inboxes, calendars, and memory.',
    ],
    callExamples: [
      'Personal and commercial quote requests',
      'Policy change and certificate requests',
      'Claims-process and billing questions',
      'Renewal review and callback requests',
    ],
    outcomes: [
      'Explain lines of business and local expertise clearly before prospects call.',
      'Capture quote context and route each opportunity to the right producer or service team.',
      'Keep renewal reviews, policy-service follow-up, reviews, and referrals organized.',
    ],
    outcomeSections: [
      {
        outcome: 'get-customers',
        headline: 'Make expertise and fit clear before the quote request.',
        entries: [
          { itemSlug: 'optimized-website', useCase: 'Create useful personal, commercial, industry, and local coverage pages around real client questions.' },
          { itemSlug: 'local-ai-search-visibility', useCase: 'Improve discovery for local coverage needs, business classes, and the insurance questions prospects ask online.' },
          { itemSlug: 'digital-advertising', useCase: 'Build focused quote campaigns with clear routing, tracking, and follow-up by line of business.' },
          { itemSlug: 'review-management', useCase: 'Build trust with policyholder reviews while giving service concerns a direct path to your team.' },
        ],
      },
      {
        outcome: 'win-customers',
        headline: 'Give every quote request a clear owner and next step.',
        entries: [
          { itemSlug: 'ai-voice', useCase: 'Capture line of business, current coverage, timing, contact details, and urgency without giving unapproved coverage advice.' },
          { itemSlug: 'request-pipeline', useCase: 'Route prospects by personal or commercial line, producer, status, source, and next action.' },
          { itemSlug: 'quoting-follow-up', useCase: 'Coordinate document requests, quote-ready handoffs, reminders, and follow-up without relying on memory.' },
        ],
      },
      {
        outcome: 'keep-customers',
        headline: 'Stay useful between purchase and renewal.',
        entries: [
          { itemSlug: 'customer-management', useCase: 'Organize policyholder requests, ownership, communication history, and promised next steps around your agency workflow.' },
          { itemSlug: 'project-updates', useCase: 'Send approved status updates for policy changes, certificates, documents, and service requests.' },
          { itemSlug: 'reviews-referrals', useCase: 'Ask satisfied policyholders for reviews and introductions at appropriate service moments.' },
          { itemSlug: 'reactivation', useCase: 'Reconnect with lost quotes, former clients, and households or businesses due for a coverage review.' },
        ],
      },
    ],
    faq: [
      { question: 'Can AI provide insurance advice?', answer: 'The system can share approved factual information about your services and process, but licensed advice, coverage interpretation, recommendations, and binding decisions stay with your licensed team.' },
      { question: 'Can it qualify quote requests?', answer: 'Yes. It can collect the line of business, current situation, timing, contact details, and other questions your agency approves before routing the request.' },
      { question: 'Can it separate sales and service calls?', answer: 'Yes. New quotes, policy changes, certificates, billing questions, claims-process questions, and renewal requests can follow different routing and handoff rules.' },
      { question: 'Can it integrate with our agency management system?', answer: 'We can assess and implement eligible third-party integrations during discovery, subject to the vendor\'s API, permissions, and technical requirements.' },
      { question: 'Can it help with renewals and referrals?', answer: 'Yes. Approved reminders, renewal-review outreach, service follow-up, reviews, referrals, and reactivation can be coordinated around your client lifecycle.' },
    ],
  },
  {
    slug: 'online-retailers',
    name: 'Online Retailers',
    shortName: 'Online Retail',
    title: 'Managed Shopify stores and social media for online retailers',
    seoTitle: 'Shopify & Social Media Management for Online Retailers',
    managedSeoTitle: 'Shopify & Social Media Management for Online Retailers | Cyber Genie',
    seoDescription: 'Managed social media, Shopify store improvements, connected workflows, and custom website features for online retailers. We handle setup and ongoing work.',
    keywords: 'Shopify store management, social media management for online retailers, ecommerce workflows, Shopify shopping experience, custom ecommerce website features',
    hero: 'Connect product storytelling, a smoother shopping experience, and the work behind each order with a team that handles implementation.',
    heroTitle: 'Your products deserve a better shopping experience.',
    pageIntro: 'We manage social media, improve your Shopify store, and connect the workflows behind it—with custom website features when your business needs more.',
    serviceName: 'Shopify, social media, and customer workflow management for online retailers',
    heroImage: onlineRetailersImage,
    heroImageAlt: 'Online retail shop owner working at a laptop beside unbranded products and shipping boxes',
    journeyIllustration: 'commerce',
    showVoiceAi: false,
    painPoints: [
      'Social media falls behind while the owner manages products, orders, and customer questions.',
      'Posts and promotions send shoppers to pages that do not clearly match the product or offer.',
      'Product information, collections, navigation, and mobile layouts need ongoing attention to make shopping easier.',
      'Store apps, customer communications, and order-related handoffs leave the team repeating manual work.',
      'A new customer experience needs someone to assess the options, build it, and keep it connected to the store.',
    ],
    callExamples: [],
    outcomes: [
      'Bring relevant shoppers from consistent product storytelling to the right store pages.',
      'Make it easier to explore products, choose an option, and complete a purchase.',
      'Connect customer follow-up and store operations to support repeat business.',
    ],
    outcomeSections: [
      {
        outcome: 'get-customers', headline: 'Turn product stories into store visits.',
        entries: [
          { itemSlug: 'social-media-management', displayTitle: 'Social content for your products', useCase: 'Plan, create, and publish product stories, launches, and promotions that lead shoppers to the relevant product or collection.' },
          { itemSlug: 'optimized-website', displayTitle: 'A clearer path into your store', useCase: 'Align campaign pages, product information, and store navigation so shoppers can find what brought them there.' },
        ],
      },
      {
        outcome: 'win-customers', headline: 'Help shoppers take the next step.',
        entries: [
          { itemSlug: 'sales-assistant', displayTitle: 'Product questions answered', useCase: 'Organize approved product guidance and inquiry handoffs so customers can make an informed choice.' },
          { itemSlug: 'request-pipeline', displayTitle: 'Wholesale and special inquiries', useCase: 'Capture wholesale requests, custom-order questions, and other inquiries that need a person to follow through.' },
        ],
      },
      {
        outcome: 'keep-customers', headline: 'Keep the relationship moving after the sale.',
        entries: [
          { itemSlug: 'customer-management', displayTitle: 'Customer follow-up in one place', useCase: 'Organize contacts, opportunities, and follow-up tasks in Customer OS, with store connections agreed during discovery.' },
          { itemSlug: 'reactivation', displayTitle: 'Thoughtful repeat-customer outreach', useCase: 'Coordinate approved follow-up and relevant offers around customer interests and communication preferences.' },
        ],
      },
    ],
    featureSection: {
      title: 'The work we take off your plate.',
      description: 'Agency-level service. Software-level pricing. Choose the service and scope that fit your store; our team handles the agreed implementation and ongoing work.',
      items: [
        { title: 'Social media that supports the store', description: 'We manage product storytelling, launch and promotion content, and consistent publishing within your selected social plan. Each campaign gives shoppers a clear route to relevant products.' },
        { title: 'A store that is easier to shop', description: 'We improve product and collection organization, navigation, mobile usability, product information, and merchandising, then test the agreed changes through the shopping journey.' },
        { title: 'Less manual work behind each order', description: 'We review app connections, customer communications, and order-related handoffs, then configure and test agreed workflows so routine operations require less repeated effort.' },
        { title: 'Custom features connected to Shopify', description: 'We assess the existing theme, apps, and platform capabilities first. When a companion website or custom experience is the right fit, we build and connect features such as product-selection tools, educational content, wholesale inquiries, or tailored customer journeys.' },
      ],
    },
    integrationSection: {
      title: 'Keep the store and the customer journey connected.',
      description: 'A separate website is an option when it serves a specific business need. It is not a requirement for every retailer.',
      systems: [
        { name: 'Shopify store', label: 'Commerce foundation', description: 'Keep Shopify responsible for products, checkout, and orders where appropriate, while we improve the agreed store experience and supporting workflows.' },
        { name: 'Social and customer tools', label: 'Connected operations', description: 'Coordinate social campaigns, store apps, customer communications, and agreed Customer OS connections around a clear process.' },
        { name: 'Companion website', label: 'Purpose-built features', description: 'Add a separately scoped website or experience when tailored discovery, content, or inquiry workflows call for it, with clear handoffs back to Shopify.' },
      ],
      note: 'We agree the platform approach, access requirements, integration feasibility, and scope before work begins. Shopify subscriptions, paid apps, and other third-party charges remain separate from our service fees.',
    },
    deliverySteps: [
      { title: 'Review the business', description: 'We review your products, audience, store, social channels, and the work your team repeats.' },
      { title: 'Agree priorities', description: 'Together we choose the next improvements, the right service, and a clear scope for delivery.' },
      { title: 'Configure, build, and test', description: 'We handle the agreed setup, development, connections, and testing. You provide business context, access, and feedback.' },
      { title: 'Manage ongoing improvements', description: 'We maintain and improve the agreed work as products, promotions, and operating needs change.' },
    ],
    serviceRecommendations: [
      { name: 'Social Media Management', href: '/services/marketing/', description: 'Product content, launches, promotions, and publishing within your selected social plan.' },
      { name: 'Technology Partner', href: '/services/technology-partner/', description: 'Ongoing Shopify and workflow management, app coordination, and agreed store improvements. Development is scoped to the work involved.' },
      { name: 'Evolving Web Application', href: '/services/website-design-hosting/', description: 'A separately scoped companion web application with integrations, backend database support, and user single sign-on connected to your commerce workflow.' },
    ],
    whiteGloveCta: {
      title: 'Keep your focus on the products and customers.',
      description: 'Tell us where the store or workflow gets in the way. We will map the next steps and identify the right service to handle them.',
    },
    faq: [
      { question: 'Can we keep our existing Shopify store?', answer: 'Yes. We can work with your existing store and assess its theme, apps, and workflows before recommending changes. Shopify can remain the commerce foundation; a rebuild or platform migration is not assumed.' },
      { question: 'Can you manage social media for our products?', answer: 'Yes. Our Social Media Management service covers product storytelling, launches, promotions, and publishing within your chosen plan. We coordinate content and links with the relevant store pages.' },
      { question: 'When would a separate website help?', answer: 'When a specific customer journey or feature is better served by a companion experience, such as product-selection tools, educational content, or wholesale inquiries. We assess Shopify capabilities and existing apps first, then agree whether a separate site is useful and how it connects to the store.' },
      { question: 'How are service scope and platform costs agreed?', answer: 'We review the work and recommend the appropriate service and scope before starting. Shopify subscriptions, paid apps, and other third-party charges are separate. A companion website and advanced development are separately scoped; Shopify management and advanced development are not included in the $25 Essential Website plan. Customer OS CRM is included while a paid Cyber Genie service is active.' },
    ],
  },
];

export const getVoiceIndustryBySlug = (slug: string | undefined) =>
  voiceIndustries.find((industry) => industry.slug === slug);
