"use client";

import { useEffect, useRef } from "react";

type RGB = [number, number, number];

const hex = (h: string): RGB => {
  const n = parseInt(h.slice(1), 16);
  return [((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255];
};

const VERT = `
attribute vec2 p;
void main() { gl_Position = vec4(p, 0.0, 1.0); }
`;

// Domain-warped fbm gradient with film grain, after React Bits' Grainient.
const FRAG = `
precision highp float;
uniform vec2 uRes;
uniform float uTime;
uniform float uSeed;
uniform vec3 c0;
uniform vec3 c1;
uniform vec3 c2;
uniform vec3 c3;

float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float noise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
             mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
}
float fbm(vec2 p) {
  float v = 0.0, a = 0.5;
  for (int i = 0; i < 5; i++) { v += a * noise(p); p *= 2.0; a *= 0.5; }
  return v;
}

void main() {
  vec2 uv = gl_FragCoord.xy / uRes;
  vec2 p = uv * vec2(uRes.x / uRes.y, 1.0) * 1.3 + uSeed;
  float t = uTime * 0.035;
  vec2 q = vec2(fbm(p + t), fbm(p + vec2(5.2, 1.3) - t));
  float f = fbm(p + 2.2 * q + vec2(t * 0.6, -t * 0.4));

  vec3 col = mix(c0, c1, smoothstep(0.15, 0.6, f));
  col = mix(col, c2, smoothstep(0.35, 0.85, f * q.x * 1.7));
  col = mix(col, c3, smoothstep(0.55, 0.95, q.y * f * 1.9));
  // keep the top-left (where text sits) deeper for contrast
  col *= mix(0.72, 1.0, smoothstep(0.0, 1.1, uv.x * 0.7 + (1.0 - uv.y) * 0.6));

  float g = hash(gl_FragCoord.xy + fract(uTime * 7.0)) - 0.5;
  col += g * 0.09;
  gl_FragColor = vec4(col, 1.0);
}
`;

export default function Grainient({
  colors,
  seed = 0,
  className = "",
}: {
  colors: [string, string, string, string];
  seed?: number;
  className?: string;
}) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const gl = canvas.getContext("webgl", { antialias: false, alpha: false });
    if (!gl) return;

    const compile = (type: number, src: string) => {
      const s = gl.createShader(type)!;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      return s;
    };
    const prog = gl.createProgram()!;
    gl.attachShader(prog, compile(gl.VERTEX_SHADER, VERT));
    gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, FRAG));
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return;
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(prog, "p");
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

    const uRes = gl.getUniformLocation(prog, "uRes");
    const uTime = gl.getUniformLocation(prog, "uTime");
    gl.uniform1f(gl.getUniformLocation(prog, "uSeed"), seed);
    (["c0", "c1", "c2", "c3"] as const).forEach((n, i) =>
      gl.uniform3fv(gl.getUniformLocation(prog, n), hex(colors[i]))
    );

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let visible = false;
    const start = performance.now();

    const draw = () => {
      gl.uniform1f(uTime, reduced ? 12 : (performance.now() - start) / 1000 + 12);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    };
    const loop = () => {
      draw();
      if (visible && !reduced) raf = requestAnimationFrame(loop);
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.max(1, Math.round(canvas.clientWidth * dpr));
      canvas.height = Math.max(1, Math.round(canvas.clientHeight * dpr));
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(uRes, canvas.width, canvas.height);
      draw();
    };

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      cancelAnimationFrame(raf);
      if (visible) loop();
    });
    io.observe(canvas);
    resize();
    canvas.style.opacity = "1";

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      gl.getExtension("WEBGL_lose_context")?.loseContext();
    };
  }, [colors, seed]);

  return (
    <div
      aria-hidden
      className={`absolute inset-0 ${className}`}
      style={{
        background: `radial-gradient(120% 90% at 85% 100%, ${colors[3]}, transparent 60%), linear-gradient(135deg, ${colors[0]}, ${colors[1]} 55%, ${colors[2]})`,
      }}
    >
      <canvas
        ref={ref}
        className="h-full w-full opacity-0 transition-opacity duration-700"
      />
    </div>
  );
}
