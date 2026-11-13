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
uniform vec4 uWake;
uniform vec2 uFlow;
uniform float uStrength;

float band(float value, float center, float width) {
  float distance = (value - center) / width;
  return exp(-distance * distance);
}

float fluteBand(float position, float center, float width) {
  return band(fract(position - center + 0.5), 0.5, width);
}

float ink(vec2 point, vec2 radius) {
  vec2 stretch = point / radius;
  return exp(-dot(stretch, stretch) * 1.6);
}

void main() {
  vec2 uv = gl_FragCoord.xy / uResolution;
  vec2 pixel = vec2(uv.x, 1.0 - uv.y) * uSize;
  vec2 normal = vec2(0.848, 0.530);
  vec2 ridge = vec2(-0.530, 0.848);
  vec2 offset = pixel - uPointer;
  float acrossLight = dot(offset, normal);
  float alongLight = dot(offset, ridge);
  float phase = uFlow.x;
  float energy = uFlow.y;

  // Fold a slower wake into the leading wash so the edge changes as the pointer turns.
  vec2 washPosition = vec2(acrossLight, alongLight);
  washPosition += vec2(
    sin(alongLight / 58.0 + phase) * 24.0 + sin(alongLight / 25.0 - phase) * 9.0,
    sin(acrossLight / 72.0 - phase) * 31.0 + cos(acrossLight / 38.0 + phase) * 13.0
  );
  vec2 nearWake = pixel - uWake.xy;
  vec2 farWake = pixel - uWake.zw;
  float leading = ink(washPosition, vec2(181.0, 147.0));
  float fold = ink(washPosition - vec2(78.0, -73.0), vec2(108.0, 87.0));
  float trailing = ink(vec2(dot(nearWake, normal), dot(nearWake, ridge)) + washPosition * 0.13,
    vec2(141.0, 110.0));
  float plume = ink(vec2(dot(farWake, normal), dot(farWake, ridge)) - vec2(24.0, 36.0),
    vec2(108.0, 98.0));
  float wash = smoothstep(0.035, 0.93, leading * 0.80 + fold * 0.42
    + energy * (trailing * 0.72 + plume * 0.46));

  float along = dot(pixel, ridge);
  float across = dot(pixel, normal) + 10.0 * sin(along / 285.0) + 3.0 * sin(along / 95.0);
  float fluteWidth = clamp(uSize.x * 0.20, 120.0, 247.0);
  across += uStrength * wash * energy * 13.0 * sin(alongLight / 52.0 - phase);
  float flute = fract(across / fluteWidth);
  float sheen = fluteBand(flute, 0.87, 0.17) * 0.031 + fluteBand(flute, 0.97, 0.025) * 0.027;
  float shadow = fluteBand(flute, 0.15, 0.21) * 0.035 + fluteBand(flute, 0.016, 0.037) * 0.021;

  vec3 paper = vec3(0.981, 0.982, 0.952);
  vec3 mint = vec3(0.886, 0.946, 0.912);
  vec3 color = mix(paper, mint, clamp((1.0 - uv.y) * 0.77 + uv.x * 0.29, 0.0, 1.0));
  color += sheen * vec3(1.0, 0.97, 0.86) - shadow * vec3(0.89, 0.58, 0.68);

  // Each flute catches the moving light at a different angle and height.
  float reflectance = band(acrossLight, 0.0, 310.0)
    * band(alongLight + 72.0 * (flute - 0.5), 0.0, 220.0);
  float pigment = 0.39 - 0.12 * fluteBand(flute, 0.88, 0.20);
  vec3 washColor = mix(vec3(0.55, 0.79, 0.59), vec3(0.70, 0.87, 0.67), fold * 0.75);
  color = mix(color, washColor, wash * pigment * uStrength);

  float glint = 0.86 + 0.09 * clamp(acrossLight / 220.0, -1.0, 1.0)
    + 0.035 * sin(alongLight / 105.0);
  float rim = fluteBand(flute, glint, 0.021);
  float lobe = fluteBand(flute, glint - 0.085, 0.114);
  float refraction = fluteBand(flute, glint - 0.21, 0.078);
  float secondaryRim = fluteBand(flute, glint - 0.24, 0.018);
  vec3 reflected = (rim * 0.088 + lobe * 0.031) * vec3(1.0, 0.98, 0.86)
    - refraction * vec3(0.078, 0.023, 0.040)
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
  const wake = gl.getUniformLocation(program, "uWake");
  const flow = gl.getUniformLocation(program, "uFlow");
  const strength = gl.getUniformLocation(program, "uStrength");

  let previous: { x: number; y: number; time: number } | undefined;
  let nearX = 0;
  let nearY = 0;
  let farX = 0;
  let farY = 0;
  let phase = 0;
  let energy = 0;

  function draw(x: number, y: number, intensity: number, time = performance.now()) {
    if (!gl || gl.isContextLost()) return false;
    if (previous && intensity > 0) {
      const elapsed = Math.max(1, Math.min(time - previous.time, 48));
      const distance = Math.hypot(x - previous.x, y - previous.y);
      const impulse = Math.min(1, distance / (elapsed * 0.65));
      energy = Math.max(impulse, energy * Math.exp(-elapsed / 310));
      if (energy < 0.01) energy = 0;
      phase = (phase + elapsed * energy * 0.009) % (2 * Math.PI);
      const nearBlend = 1 - Math.exp(-elapsed / 96);
      const farBlend = 1 - Math.exp(-elapsed / 235);
      nearX += (x - nearX) * nearBlend;
      nearY += (y - nearY) * nearBlend;
      farX += (nearX - farX) * farBlend;
      farY += (nearY - farY) * farBlend;
    } else {
      nearX = farX = x;
      nearY = farY = y;
      phase = energy = 0;
    }
    previous = intensity > 0 ? { x, y, time } : undefined;
    gl.uniform2f(pointer, x, y);
    gl.uniform4f(wake, nearX, nearY, farX, farY);
    gl.uniform2f(flow, phase, energy);
    gl.uniform1f(strength, intensity);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
    return energy > 0;
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
