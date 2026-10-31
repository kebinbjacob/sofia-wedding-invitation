import React, { useEffect, useRef, useState } from 'react';
import { Wind, Play, Pause } from 'lucide-react';

interface Petal {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  angle: number;
  angularSpeed: number;
  flip: number;
  flipSpeed: number;
  colorType: 'blush' | 'deep' | 'ivory';
  opacity: number;
  swingOffset: number;
  swingSpeed: number;
}

export const RosePetalsCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isRunning, setIsRunning] = useState<boolean>(true);
  const [windStrength, setWindStrength] = useState<number>(1);
  const petalsRef = useRef<Petal[]>([]);
  const animFrameRef = useRef<number | null>(null);
  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({ x: -1000, y: -1000, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Color definitions
    // Pale blush pink (#F7D8DC), rose edge (#D49B9F), ivory rose (#FFF5F5)
    const petalColors = {
      blush: {
        fill: '#F7D8DC',
        edge: '#D8A4AB',
        highlight: '#FFF0F2'
      },
      deep: {
        fill: '#E8B6BD',
        edge: '#B87D89',
        highlight: '#FCE7EB'
      },
      ivory: {
        fill: '#FFF7F7',
        edge: '#F0D5D8',
        highlight: '#FFFFFF'
      }
    };

    // Initialize 45-55 petals for optimal poetic density without cluttering
    const petalCount = window.innerWidth < 768 ? 32 : 52;
    const createPetal = (startY?: number): Petal => {
      const typeRand = Math.random();
      const colorType: 'blush' | 'deep' | 'ivory' =
        typeRand < 0.65 ? 'blush' : typeRand < 0.88 ? 'deep' : 'ivory';

      return {
        x: Math.random() * width,
        y: startY !== undefined ? startY : Math.random() * height,
        size: 11 + Math.random() * 14, // 11px to 25px
        speedY: 0.65 + Math.random() * 1.1,
        speedX: -0.3 + Math.random() * 0.6,
        angle: Math.random() * Math.PI * 2,
        angularSpeed: (Math.random() - 0.5) * 0.02,
        flip: Math.random() * Math.PI,
        flipSpeed: 0.015 + Math.random() * 0.025,
        colorType,
        opacity: 0.55 + Math.random() * 0.4,
        swingOffset: Math.random() * 100,
        swingSpeed: 0.012 + Math.random() * 0.018,
      };
    };

    if (petalsRef.current.length === 0) {
      for (let i = 0; i < petalCount; i++) {
        petalsRef.current.push(createPetal());
      }
    }

    const drawPetal = (ctx: CanvasRenderingContext2D, p: Petal) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.angle);

      // 3D tumble via scaleY
      const scaleY = Math.cos(p.flip);
      ctx.scale(1, Math.max(0.12, Math.abs(scaleY)));

      const col = petalColors[p.colorType];
      ctx.globalAlpha = p.opacity;

      // Draw soft romantic teardrop rose petal with subtle gradient
      const radGrad = ctx.createRadialGradient(-p.size * 0.2, -p.size * 0.2, 1, 0, 0, p.size);
      radGrad.addColorStop(0, col.highlight);
      radGrad.addColorStop(0.65, col.fill);
      radGrad.addColorStop(1, col.edge);

      ctx.beginPath();
      ctx.moveTo(0, -p.size * 0.85);
      // Left curved lobe
      ctx.bezierCurveTo(-p.size * 0.75, -p.size * 0.5, -p.size * 0.65, p.size * 0.55, 0, p.size * 0.9);
      // Right curved lobe
      ctx.bezierCurveTo(p.size * 0.65, p.size * 0.55, p.size * 0.75, -p.size * 0.5, 0, -p.size * 0.85);
      ctx.closePath();

      ctx.fillStyle = radGrad;
      ctx.shadowColor = 'rgba(184, 125, 137, 0.22)';
      ctx.shadowBlur = 4;
      ctx.fill();

      // Delicate central petal vein
      ctx.beginPath();
      ctx.moveTo(0, -p.size * 0.6);
      ctx.quadraticCurveTo(p.size * 0.05, 0, 0, p.size * 0.65);
      ctx.strokeStyle = col.edge;
      ctx.lineWidth = 0.6;
      ctx.globalAlpha = p.opacity * 0.35;
      ctx.stroke();

      ctx.restore();
    };

    let tick = 0;
    const render = () => {
      ctx.clearRect(0, 0, width, height);
      tick += 0.02;

      petalsRef.current.forEach((p) => {
        if (isRunning) {
          // Physics: sinusoidal horizontal drift + subtle wind
          const sinDrift = Math.sin(tick * p.swingSpeed * 60 + p.swingOffset) * 0.85;
          const totalWindX = (p.speedX + sinDrift * 0.6) * windStrength;

          p.x += totalWindX;
          p.y += p.speedY * (0.85 + windStrength * 0.25);
          p.angle += p.angularSpeed;
          p.flip += p.flipSpeed;

          // Mouse / Touch interaction (gentle petal dispersion)
          if (mouseRef.current.active) {
            const dx = p.x - mouseRef.current.x;
            const dy = p.y - mouseRef.current.y;
            const dist = Math.hypot(dx, dy);
            if (dist < 100) {
              const force = (100 - dist) / 100;
              p.x += (dx / dist) * force * 3.5;
              p.y += (dy / dist) * force * 3.5;
              p.flip += 0.05;
            }
          }

          // Wrap around borders
          if (p.y > height + 30) {
            p.y = -25;
            p.x = Math.random() * width;
          }
          if (p.x < -30) p.x = width + 20;
          if (p.x > width + 30) p.x = -20;
        }

        drawPetal(ctx, p);
      });

      animFrameRef.current = requestAnimationFrame(render);
    };

    render();

    // Mouse & Touch listeners for gentle petal reaction
    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY, active: true };
    };
    const onTouchMove = (e: TouchEvent) => {
      if (e.touches[0]) {
        mouseRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY, active: true };
      }
    };
    const onLeave = () => {
      mouseRef.current.active = false;
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('touchmove', onTouchMove);
    window.addEventListener('mouseleave', onLeave);
    window.addEventListener('touchend', onLeave);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('mouseleave', onLeave);
      window.removeEventListener('touchend', onLeave);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [isRunning, windStrength]);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="pointer-events-none fixed inset-0 z-30 h-full w-full"
        style={{ pointerEvents: 'none' }}
      />

      {/* Floating Petals Breeze Control Pill */}
      <div className="fixed bottom-6 left-6 z-40 flex items-center gap-1.5 rounded-full border border-[#E8C5CA]/80 bg-[#FFFBF9]/92 px-3 py-1.5 text-xs text-[#5C3843] shadow-md backdrop-blur-md transition-all hover:border-[#B87D89]">
        <span className="flex items-center gap-1 text-[11px] font-medium tracking-wider uppercase text-[#B87D89]">
          <Wind className="h-3.5 w-3.5 animate-pulse text-[#B87D89]" />
          Petals
        </span>
        <div className="mx-1 h-3 w-px bg-[#E8C5CA]" />
        <button
          onClick={() => setIsRunning(!isRunning)}
          title={isRunning ? 'Pause Petal Rain' : 'Resume Petal Rain'}
          className="flex h-5 w-5 items-center justify-center rounded-full text-[#5C3843] transition-colors hover:bg-[#FAF0EE] hover:text-[#B87D89]"
          aria-label={isRunning ? 'Pause Petals' : 'Resume Petals'}
        >
          {isRunning ? <Pause className="h-3 w-3" /> : <Play className="h-3 w-3" />}
        </button>
        <button
          onClick={() => setWindStrength((prev) => (prev === 1 ? 1.6 : prev === 1.6 ? 0.6 : 1))}
          title="Adjust Wind Breeze"
          className="rounded px-1.5 py-0.5 text-[10px] font-semibold text-[#5C3843]/80 transition-colors hover:bg-[#FAF0EE] hover:text-[#B87D89]"
        >
          {windStrength === 1 ? 'Gentle' : windStrength > 1 ? 'Breeze' : 'Calm'}
        </button>
      </div>
    </>
  );
};
