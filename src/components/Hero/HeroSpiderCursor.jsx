import { useRef, useEffect } from "react";

const { sin, cos, PI, hypot, min, max } = Math;

function rnd(x = 1, dx = 0) {
  return Math.random() * x + dx;
}
function many(n, f) {
  return [...Array(n)].map((_, i) => f(i));
}
function lerp(a, b, t) {
  return a + (b - a) * t;
}
function pt(x, y) {
  return { x, y };
}
function noise(x, y, t = 101) {
  const w0 = sin(
    0.3 * x + 1.4 * t + 2.0 + 2.5 * sin(0.4 * y + -1.3 * t + 1.0)
  );
  const w1 = sin(
    0.2 * y + 1.5 * t + 2.8 + 2.3 * sin(0.5 * x + -1.2 * t + 0.5)
  );
  return w0 + w1;
}

function createSpider(width, height) {
  const pts = many(333, () => ({
    x: rnd(width),
    y: rnd(height),
    len: 0,
    r: 0,
  }));

  const pts2 = many(9, (i) => ({
    x: cos((i / 9) * PI * 2),
    y: sin((i / 9) * PI * 2),
  }));

  let seed = rnd(100);
  let tx = rnd(width);
  let ty = rnd(height);
  let x = rnd(width);
  let y = rnd(height);
  const kx = rnd(0.5, 0.5);
  const ky = rnd(0.5, 0.5);
  const walkRadius = pt(rnd(50, 50), rnd(50, 50));
  let r = width / rnd(100, 150);

  return {
    follow(px, py) {
      tx = px;
      ty = py;
    },
    tick(t, ctx, w, h) {
      const selfMoveX = cos(t * kx + seed) * walkRadius.x;
      const selfMoveY = sin(t * ky + seed) * walkRadius.y;
      const fx = tx + selfMoveX;
      const fy = ty + selfMoveY;

      x += min(w / 100, (fx - x) / 10);
      y += min(w / 100, (fy - y) / 10);

      let i = 0;
      pts.forEach((pt) => {
        const dx = pt.x - x;
        const dy = pt.y - y;
        const len = hypot(dx, dy);
        let rad = min(2, w / len / 5);
        pt.t = 0;
        const increasing = len < w / 10 && i++ < 8;
        const dir = increasing ? 0.1 : -0.1;
        if (increasing) rad *= 1.5;
        pt.r = rad;
        pt.len = max(0, min(pt.len + dir, 1));

        // draw lines from circle points toward pt
        pts2.forEach((pt2) => {
          if (!pt.len) return;
          const x0 = lerp(x + pt2.x * r, pt.x, pt.len * pt.len);
          const y0 = lerp(y + pt2.y * r, pt.y, pt.len * pt.len);
          const x1 = x + pt2.x * r;
          const y1 = y + pt2.y * r;

          ctx.beginPath();
          ctx.moveTo(x0, y0);
          many(100, (j) => {
            const u = (j + 1) / 100;
            const lx = lerp(x0, x1, u);
            const ly = lerp(y0, y1, u);
            const k = noise(lx / 5 + x0, ly / 5 + y0, t) * 2;
            ctx.lineTo(lx + k, ly + k);
          });
          ctx.stroke();
        });

        ctx.beginPath();
        ctx.ellipse(pt.x, pt.y, pt.r, pt.r, 0, 0, PI * 2);
        ctx.fill();
      });
    },
  };
}

export default function HeroSpiderCursor() {
  const canvasRef = useRef(null);
  const spidersRef = useRef([]);
  const rafRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const section = document.getElementById("hero");
    if (!canvas || !section) return;

    const ctx = canvas.getContext("2d");

    let w = 0;
    let h = 0;

    function resize() {
      const rect = section.getBoundingClientRect();
      const nw = Math.floor(rect.width);
      const nh = Math.floor(rect.height);
      if (nw === w && nh === h) return;
      w = nw;
      h = nh;
      canvas.width = w;
      canvas.height = h;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      spidersRef.current = many(2, () => createSpider(w, h));
    }

    let pointerX = w / 2;
    let pointerY = h / 2;

    const handlePointerMove = (e) => {
      const rect = section.getBoundingClientRect();
      pointerX = e.clientX - rect.left;
      pointerY = e.clientY - rect.top;
      spidersRef.current.forEach((spider) => spider.follow(pointerX, pointerY));
    };

    resize();
    section.addEventListener("pointermove", handlePointerMove);

    const ro = new ResizeObserver(() => {
      resize();
      spidersRef.current.forEach((spider) => spider.follow(pointerX, pointerY));
    });
    ro.observe(section);

    // Use CSS variables for theme-aware colors
    const getStyles = () => {
      const style = getComputedStyle(document.documentElement);
      const primary = style.getPropertyValue("--primary").trim() || "24 100% 50%";
      const hsl = primary.replace(/\s+/g, ", ");
      return {
        stroke: `hsla(${hsl}, 0.35)`,
        fill: `hsla(${hsl}, 0.25)`,
      };
    };

    function anim(t) {
      if (!canvas.isConnected) return;
      const rect = section.getBoundingClientRect();
      if (rect.width !== w || rect.height !== h) resize();

      const { stroke, fill } = getStyles();

      ctx.clearRect(0, 0, w, h);

      ctx.strokeStyle = stroke;
      ctx.fillStyle = fill;
      ctx.lineWidth = 1;

      const timeSec = t / 1000;
      spidersRef.current.forEach((spider) => spider.tick(timeSec, ctx, w, h));

      rafRef.current = requestAnimationFrame(anim);
    }
    rafRef.current = requestAnimationFrame(anim);

    return () => {
      section.removeEventListener("pointermove", handlePointerMove);
      ro.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="hero-spider-canvas"
      aria-hidden
      style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}
