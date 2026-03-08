import { useRef, useEffect, useState } from "react";

const GRID_COLS = 24;
const GRID_ROWS = 32;

export function PixelGridImage({ src, alt, className = "" }) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const imgRef = useRef(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    const img = imgRef.current;
    if (!container || !canvas || !img || !imageLoaded) return;

    const ctx = canvas.getContext("2d");

    const drawGrid = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      if (w === 0 || h === 0) return;

      canvas.width = w;
      canvas.height = h;

      const cellW = w / GRID_COLS;
      const cellH = h / GRID_ROWS;

      const sample = document.createElement("canvas");
      sample.width = GRID_COLS;
      sample.height = GRID_ROWS;
      const sctx = sample.getContext("2d");
      sctx.drawImage(img, 0, 0, GRID_COLS, GRID_ROWS);

      const data = sctx.getImageData(0, 0, GRID_COLS, GRID_ROWS).data;

      for (let j = 0; j < GRID_ROWS; j++) {
        for (let i = 0; i < GRID_COLS; i++) {
          const idx = (j * GRID_COLS + i) * 4;
          const r = data[idx];
          const g = data[idx + 1];
          const b = data[idx + 2];
          const a = data[idx + 3];
          ctx.fillStyle = `rgba(${r},${g},${b},${a / 255})`;
          ctx.fillRect(i * cellW, j * cellH, cellW + 1, cellH + 1);
        }
      }
    };

    const ro = new ResizeObserver(() => {
      drawGrid();
    });
    ro.observe(container);
    drawGrid();

    return () => ro.disconnect();
  }, [imageLoaded]);

  return (
    <div
      ref={containerRef}
      className={`relative rounded-lg overflow-hidden group cursor-pointer block ${className}`}
    >
      {/* Imagen real: en flujo para definir tamaño del contenedor, visible solo al hover */}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className="block w-full h-auto opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        onLoad={() => setImageLoaded(true)}
      />
      {/* Grilla de píxeles: misma proporción, cubre la foto y se oculta al hover */}
      {imageLoaded && (
        <canvas
          ref={canvasRef}
          aria-hidden
          className="absolute inset-0 w-full h-full group-hover:opacity-0 transition-opacity duration-500"
        />
      )}
    </div>
  );
}
