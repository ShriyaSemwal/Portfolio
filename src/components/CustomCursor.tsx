import React, { useEffect, useRef, useState } from 'react';

interface Point {
  x: number;
  y: number;
  age: number;
}

const CustomCursor: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const pointsRef = useRef<Point[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [enabled, setEnabled] = useState(false);

  // Check if device supports a fine pointer (mouse)
  useEffect(() => {
    const media = window.matchMedia('(pointer: fine)');
    setEnabled(media.matches);
    const listener = (e: MediaQueryListEvent) => setEnabled(e.matches);
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      
      // Update custom cursor position
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }

      // Add point for the trail
      pointsRef.current.push({ x: e.clientX, y: e.clientY, age: 0 });

      // Detect hover on interactive elements
      const target = e.target as HTMLElement;
      if (target) {
        const hovering = !!target.closest('a, button, .project-card, .contact-card, .skill-pill, .exp-tag, .scroll-top-btn');
        setIsHovered(hovering);
      }
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [enabled]);

  // Canvas drawing loop
  useEffect(() => {
    if (!enabled) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const updateAndDraw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const points = pointsRef.current;
      const maxLife = 40; // frames the line lives

      if (points.length > 1) {
        ctx.beginPath();
        ctx.strokeStyle = 'rgba(74, 55, 40, 0.25)'; // Dark brown text color, semi-transparent
        ctx.lineWidth = 1.5;
        ctx.setLineDash([4, 4]); // Dashed sketch style
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';

        ctx.moveTo(points[0].x, points[0].y);
        for (let i = 1; i < points.length; i++) {
          const xc = (points[i].x + points[i - 1].x) / 2;
          const yc = (points[i].y + points[i - 1].y) / 2;
          ctx.quadraticCurveTo(points[i - 1].x, points[i - 1].y, xc, yc);
        }
        ctx.stroke();
      }

      // Age points and remove dead ones
      pointsRef.current = points
        .map(p => ({ ...p, age: p.age + 1 }))
        .filter(p => p.age < maxLife);

      animationId = requestAnimationFrame(updateAndDraw);
    };

    updateAndDraw();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      {/* Sketch Trail Canvas */}
      <canvas ref={canvasRef} className="cursor-trail-canvas" />

      {/* Custom Dot Cursor */}
      <div 
        ref={cursorRef} 
        className={`custom-dot-cursor${isHovered ? ' hovering' : ''}${isClicked ? ' clicked' : ''}`}
      >
        <div className="dot-inner" />
      </div>
    </>
  );
};

export default CustomCursor;
