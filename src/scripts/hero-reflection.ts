const vertexSource = `
attribute vec2 aPosition;
void main() {
  gl_Position = vec4(aPosition, 0.0, 1.0);
}`;

const fragmentSource = `
precision mediump float;
uniform vec2 uResolution;
uniform vec2 uSize;
uniform vec2 uPointer;
uniform float uStrength;

float band(float value, float center, float width) {
  float distance = (value - center) / width;
  return exp(-distance * distance);
}

float fluteBand(float position, float center, float width) {
  return band(fract(position - center + 0.5), 0.5, width);
}

void main() {
  vec2 uv = gl_FragCoord.xy / uResolution;
  vec2 pixel = vec2(uv.x, 1.0 - uv.y) * uSize;
  vec2 normal = vec2(0.848, 0.530);
  vec2 ridge = vec2(-0.530, 0.848);
  float along = dot(pixel, ridge);
  float across = dot(pixel, normal) + 10.0 * sin(along / 285.0) + 3.0 * sin(along / 95.0);
  float fluteWidth = clamp(uSize.x * 0.20, 120.0, 247.0);
  float flute = fract(across / fluteWidth);
  float sheen = fluteBand(flute, 0.87, 0.17) * 0.031 + fluteBand(flute, 0.97, 0.025) * 0.027;
  float shadow = fluteBand(flute, 0.15, 0.21) * 0.035 + fluteBand(flute, 0.016, 0.037) * 0.021;

  vec3 paper = vec3(0.981, 0.982, 0.952);
  vec3 mint = vec3(0.886, 0.946, 0.912);
  vec3 color = mix(paper, mint, clamp((1.0 - uv.y) * 0.77 + uv.x * 0.29, 0.0, 1.0));
  color += sheen * vec3(1.0, 0.97, 0.86) - shadow * vec3(0.89, 0.58, 0.68);

  // Each flute catches the moving light at a different angle and height.
  vec2 offset = pixel - uPointer;
  float alongLight = dot(offset, ridge);
  float acrossLight = dot(offset, normal);
  float reflectance = band(acrossLight, 0.0, 310.0)
    * band(alongLight + 72.0 * (flute - 0.5), 0.0, 220.0);
  float glint = 0.86 + 0.09 * clamp(acrossLight / 220.0, -1.0, 1.0)
    + 0.035 * sin(alongLight / 105.0);
  float rim = fluteBand(flute, glint, 0.021);
  float lobe = fluteBand(flute, glint - 0.085, 0.114);
  float refraction = fluteBand(flute, glint - 0.21, 0.078);
  float secondaryRim = fluteBand(flute, glint - 0.24, 0.018);
  vec3 reflected = (rim * 0.088 + lobe * 0.031) * vec3(1.0, 0.98, 0.86)
    - refraction * vec3(0.062, 0.019, 0.029)
    + secondaryRim * vec3(0.005, 0.023, 0.024);
  color += uStrength * reflectance * reflected;

  float grain = fract(52.9829189 * fract(dot(gl_FragCoord.xy, vec2(0.06711056, 0.00583715))));
  gl_FragColor = vec4(color + (grain - 0.5) * 0.008, 1.0);
}`;

export function createHeroReflection(canvas: HTMLCanvasElement) {
  const gl = canvas.getContext("webgl", { alpha: false, antialias: false, depth: false });
  if (!gl) return;

  const vertex = gl.createShader(gl.VERTEX_SHADER);
  const fragment = gl.createShader(gl.FRAGMENT_SHADER);
  const program = gl.createProgram();
  const vertices = gl.createBuffer();
  if (!vertex || !fragment || !program || !vertices) return;
  gl.shaderSource(vertex, vertexSource);
  gl.shaderSource(fragment, fragmentSource);
  gl.compileShader(vertex);
  gl.compileShader(fragment);
  gl.attachShader(program, vertex);
  gl.attachShader(program, fragment);
  gl.linkProgram(program);
  gl.deleteShader(vertex);
  gl.deleteShader(fragment);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return;

  gl.useProgram(program);
  gl.bindBuffer(gl.ARRAY_BUFFER, vertices);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
  const position = gl.getAttribLocation(program, "aPosition");
  gl.enableVertexAttribArray(position);
  gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);

  const resolution = gl.getUniformLocation(program, "uResolution");
  const size = gl.getUniformLocation(program, "uSize");
  const pointer = gl.getUniformLocation(program, "uPointer");
  const strength = gl.getUniformLocation(program, "uStrength");

  function draw(x: number, y: number, intensity: number) {
    if (!gl || gl.isContextLost()) return;
    gl.uniform2f(pointer, x, y);
    gl.uniform1f(strength, intensity);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
  }

  canvas.addEventListener("webglcontextlost", () => { canvas.removeAttribute("data-rendered"); });
  return {
    draw,
    resize(width: number, height: number) {
      if (gl.isContextLost()) return;
      const ratio = Math.min(window.devicePixelRatio, 1.25);
      canvas.width = Math.max(1, Math.round(width * ratio));
      canvas.height = Math.max(1, Math.round(height * ratio));
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(resolution, canvas.width, canvas.height);
      gl.uniform2f(size, width, height);
      draw(0, 0, 0);
      canvas.setAttribute("data-rendered", "");
    },
  };
}
