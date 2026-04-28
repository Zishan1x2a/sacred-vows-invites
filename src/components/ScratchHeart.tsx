import React, { useEffect, useRef, useState } from 'react';
import { GaneshMark, GoldDivider } from '@/components/wedding/Ornaments';
import confetti from 'canvas-confetti';

interface ScratchHeartProps {
  onReveal: () => void;
  onScratchComplete?: () => void;
}

export const ScratchHeart: React.FC<ScratchHeartProps> = ({ onReveal, onScratchComplete }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  
  const isDrawing = useRef(false);
  const lastPos = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    // Disable body scroll when mounted
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;

      drawInitialState(ctx, window.innerWidth, window.innerHeight);
    };

    const drawInitialState = (ctx: CanvasRenderingContext2D, w: number, h: number) => {
      ctx.globalCompositeOperation = 'source-over';
      
      // Fill dark cinematic background
      const bgGrad = ctx.createLinearGradient(0, 0, 0, h);
      bgGrad.addColorStop(0, '#2a0808');
      bgGrad.addColorStop(0.5, '#3a0c0c');
      bgGrad.addColorStop(1, '#1a0f0a');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, w, h);

      // Draw Gold Heart
      const heartWidth = Math.min(w * 0.8, 350);
      const heartHeight = heartWidth * 0.9;
      const x = w / 2;
      const y = h / 2 - heartHeight / 5;

      const goldGrad = ctx.createRadialGradient(x, y, heartWidth * 0.1, x, y, heartWidth);
      goldGrad.addColorStop(0, '#ffe58f');
      goldGrad.addColorStop(0.5, '#d4af37');
      goldGrad.addColorStop(1, '#8a6d1c');

      ctx.fillStyle = goldGrad;
      ctx.shadowColor = 'rgba(212, 175, 55, 0.8)';
      ctx.shadowBlur = 50;

      drawHeartPath(ctx, x, y, heartWidth, heartHeight);

      // Draw Text inside the heart
      ctx.shadowBlur = 0;
      const fontSize = Math.max(20, heartWidth * 0.09);
      ctx.font = `italic 600 ${fontSize}px "Cormorant Garamond", serif`;
      ctx.fillStyle = '#4a0f0f'; // Deeper elegant red
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      
      // The visual center of the heart is around 45% down from its origin
      ctx.fillText('Scratch gently', x, y + heartHeight * 0.42);
      
      ctx.font = `italic 400 ${fontSize * 0.75}px "Cormorant Garamond", serif`;
      ctx.fillStyle = '#5a1515';
      ctx.fillText('to reveal', x, y + heartHeight * 0.56);
      
      // Floating particles effect
      for(let i=0; i<30; i++) {
        ctx.beginPath();
        ctx.arc(
          Math.random() * w, 
          Math.random() * h, 
          Math.random() * 2 + 0.5, 
          0, Math.PI * 2
        );
        ctx.fillStyle = `rgba(212, 175, 55, ${Math.random() * 0.5})`;
        ctx.fill();
      }
    };

    const drawHeartPath = (ctx: CanvasRenderingContext2D, x: number, y: number, width: number, height: number) => {
      ctx.save();
      ctx.beginPath();
      const topCurveHeight = height * 0.3;
      ctx.moveTo(x, y + topCurveHeight);
      ctx.bezierCurveTo(
          x, y, 
          x - width / 2, y, 
          x - width / 2, y + topCurveHeight
      );
      ctx.bezierCurveTo(
          x - width / 2, y + (height + topCurveHeight) / 2, 
          x, y + (height + topCurveHeight) / 2, 
          x, y + height
      );
      ctx.bezierCurveTo(
          x, y + (height + topCurveHeight) / 2, 
          x + width / 2, y + (height + topCurveHeight) / 2, 
          x + width / 2, y + topCurveHeight
      );
      ctx.bezierCurveTo(
          x + width / 2, y, 
          x, y, 
          x, y + topCurveHeight
      );
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    };

    // Delay drawing slightly to ensure fonts are loaded
    setTimeout(() => resizeCanvas(), 100);
    window.addEventListener('resize', resizeCanvas);

    return () => window.removeEventListener('resize', resizeCanvas);
  }, []);

  const getPos = (e: React.MouseEvent | React.TouchEvent | TouchEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return null;
    const rect = canvas.getBoundingClientRect();
    if ('touches' in e) {
      if (e.touches.length === 0) return null;
      return {
        x: e.touches[0].clientX - rect.left,
        y: e.touches[0].clientY - rect.top,
      };
    }
    return {
      x: (e as React.MouseEvent).clientX - rect.left,
      y: (e as React.MouseEvent).clientY - rect.top,
    };
  };

  const handleStart = (e: React.MouseEvent | React.TouchEvent) => {
    if (isRevealed) return;
    isDrawing.current = true;
    lastPos.current = getPos(e);
  };

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDrawing.current || isRevealed) return;
    
    const pos = getPos(e);
    if (!pos || !lastPos.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!ctx || !canvas) return;

    ctx.globalCompositeOperation = 'destination-out';
    // Use radial gradient brush for softer edges
    const brushRadius = 35;
    const radGrad = ctx.createRadialGradient(pos.x, pos.y, 0, pos.x, pos.y, brushRadius);
    radGrad.addColorStop(0, 'rgba(0,0,0,1)');
    radGrad.addColorStop(1, 'rgba(0,0,0,0)');
    
    ctx.fillStyle = radGrad;
    ctx.beginPath();
    ctx.arc(pos.x, pos.y, brushRadius, 0, Math.PI * 2);
    ctx.fill();

    // Also draw a line to avoid gaps if moving fast
    ctx.lineWidth = brushRadius * 1.5;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.beginPath();
    ctx.moveTo(lastPos.current.x, lastPos.current.y);
    ctx.lineTo(pos.x, pos.y);
    ctx.stroke();

    lastPos.current = pos;
  };

  const handleEnd = () => {
    isDrawing.current = false;
    lastPos.current = null;
    checkReveal();
  };

  const checkReveal = () => {
    if (isRevealed) return;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!ctx || !canvas) return;

    const dpr = window.devicePixelRatio || 1;
    const w = canvas.width;
    const h = canvas.height;
    
    // Check central area where heart is
    const checkW = Math.min(w, 400 * dpr);
    const checkH = Math.min(h, 400 * dpr);
    const checkX = (w - checkW) / 2;
    const checkY = (h - checkH) / 2;

    const imageData = ctx.getImageData(checkX, checkY, checkW, checkH);
    const pixels = imageData.data;
    
    let transparentCount = 0;
    // Check every 16th pixel to save time (stride of 16 * 4 = 64)
    for (let i = 3; i < pixels.length; i += 64) {
      if (pixels[i] < 50) {
        transparentCount++;
      }
    }

    const totalChecked = pixels.length / 64;
    const percentTransparent = transparentCount / totalChecked;

    if (percentTransparent > 0.40) { // 40% scratched
      setIsRevealed(true);
      setFadeOut(true);
      if (onScratchComplete) onScratchComplete();
      
      // Trigger fireworks from both sides
      const duration = 2500;
      const end = Date.now() + duration;
      const isMobile = window.innerWidth < 768;
      const pCount = isMobile ? 2 : 6;

      const frame = () => {
        confetti({
          particleCount: pCount,
          angle: 60,
          spread: 55,
          origin: { x: 0, y: 0.8 },
          colors: ['#ffe58f', '#d4af37', '#8a6d1c', '#ffffff', '#e3242b'],
          zIndex: 1000
        });
        confetti({
          particleCount: pCount,
          angle: 120,
          spread: 55,
          origin: { x: 1, y: 0.8 },
          colors: ['#ffe58f', '#d4af37', '#8a6d1c', '#ffffff', '#e3242b'],
          zIndex: 1000
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      };
      frame();
      
      // Wait for fade out to complete before fully unmounting
      setTimeout(() => {
        onReveal();
      }, 1500); 
    }
  };

  // Prevent default touch actions (scrolling) on the canvas natively
  useEffect(() => {
    const canvas = canvasRef.current;
    const preventDefault = (e: TouchEvent) => {
        if (!isRevealed) e.preventDefault();
    };
    if (canvas) {
        canvas.addEventListener('touchmove', preventDefault, { passive: false });
    }
    return () => {
        if (canvas) canvas.removeEventListener('touchmove', preventDefault);
    };
  }, [isRevealed]);

  return (
    <div className={`fixed inset-0 z-[100] bg-[#2a0808] transition-all duration-[1.5s] ease-in-out ${fadeOut ? 'opacity-0 pointer-events-none scale-110' : 'opacity-100 scale-100'}`}>
      
      {/* Underlying revealed content (what they see through the scratch) */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none opacity-90">
         <div className="animate-[fadeIn_2s_ease-out_forwards] flex flex-col items-center">
             <GaneshMark size={140} className="drop-shadow-[0_0_40px_rgba(212,175,55,0.8)] opacity-95 animate-[pulse_3s_ease-in-out_infinite]" />
             <div className="mt-10 max-w-[200px] w-full opacity-80">
                <GoldDivider />
             </div>
         </div>
      </div>

      <canvas
        ref={canvasRef}
        onMouseDown={handleStart}
        onMouseMove={handleMove}
        onMouseUp={handleEnd}
        onMouseLeave={handleEnd}
        onTouchStart={handleStart}
        onTouchMove={handleMove}
        onTouchEnd={handleEnd}
        onTouchCancel={handleEnd}
        className={`absolute inset-0 cursor-crosshair touch-none transition-opacity duration-[1.5s] ${isRevealed ? 'opacity-0' : 'opacity-100'}`}
      />
    </div>
  );
};
