import React, { useRef, useEffect, useState, useCallback } from 'react';
import { type AlphabetItem } from '../../data/alphabetData';
import { AudioService } from '../../services/AudioService';
import { RefreshCw, Volume2 } from 'lucide-react';
import styles from './TracingCanvas.module.css';

interface TracingCanvasProps {
  item: AlphabetItem;
  onComplete?: () => void;
}

interface Point {
  x: number;
  y: number;
}

export const TracingCanvas: React.FC<TracingCanvasProps> = ({ item, onComplete }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [strokes, setStrokes] = useState<Point[][]>([]);
  const [currentStroke, setCurrentStroke] = useState<Point[]>([]);

  // Redraw guide and user strokes
  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    // Clear background
    ctx.clearRect(0, 0, width, height);

    // Draw Guide Lines (Letter Outline / Guide)
    ctx.save();
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
    ctx.lineWidth = Math.max(16, width * 0.08);
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    item.strokeLines.forEach(line => {
      ctx.beginPath();
      ctx.moveTo((line.x1 / 100) * width, (line.y1 / 100) * height);
      ctx.lineTo((line.x2 / 100) * width, (line.y2 / 100) * height);
      ctx.stroke();
    });

    // Draw Dotted Direction Line
    ctx.strokeStyle = '#F59E0B';
    ctx.lineWidth = Math.max(4, width * 0.015);
    ctx.setLineDash([8, 8]);
    item.strokeLines.forEach(line => {
      ctx.beginPath();
      ctx.moveTo((line.x1 / 100) * width, (line.y1 / 100) * height);
      ctx.lineTo((line.x2 / 100) * width, (line.y2 / 100) * height);
      ctx.stroke();
    });
    ctx.restore();

    // Draw Big Letter Backdrop Text
    ctx.save();
    ctx.font = `700 ${height * 0.75}px 'Fredoka', sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = 'rgba(255, 255, 255, 0.08)';
    ctx.fillText(item.letter, width / 2, height / 2 + 10);
    ctx.restore();

    // Draw User Strokes
    ctx.save();
    ctx.strokeStyle = item.color || '#6366F1';
    ctx.lineWidth = Math.max(12, width * 0.05);
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    const allStrokes = [...strokes, currentStroke];
    allStrokes.forEach(stroke => {
      if (stroke.length < 2) return;
      ctx.beginPath();
      ctx.moveTo(stroke[0].x, stroke[0].y);
      for (let i = 1; i < stroke.length; i++) {
        ctx.lineTo(stroke[i].x, stroke[i].y);
      }
      ctx.stroke();
    });
    ctx.restore();
  }, [item, strokes, currentStroke]);

  // Adjust canvas size for high DPI screens
  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas || !canvas.parentElement) return;

    const rect = canvas.parentElement.getBoundingClientRect();
    const size = Math.min(rect.width, 500);

    if (canvas.width !== size || canvas.height !== size) {
      canvas.width = size;
      canvas.height = size;
      draw();
    }
  }, [draw]);

  useEffect(() => {
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    return () => window.removeEventListener('resize', resizeCanvas);
  }, [resizeCanvas]);

  useEffect(() => {
    draw();
  }, [draw]);

  // Pointer Event Handlers (Universal Touch, Mouse, Stylus support)
  const getCanvasPoint = (e: React.PointerEvent<HTMLCanvasElement>): Point => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    return {
      x: (e.clientX - rect.left) * (canvas.width / rect.width),
      y: (e.clientY - rect.top) * (canvas.height / rect.height)
    };
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    setIsDrawing(true);
    const pt = getCanvasPoint(e);
    setCurrentStroke([pt]);
    AudioService.playClickSound();
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const pt = getCanvasPoint(e);
    setCurrentStroke(prev => [...prev, pt]);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch (err) {
      // Ignore if pointer capture lost
    }
    setIsDrawing(false);

    if (currentStroke.length > 0) {
      const updated = [...strokes, currentStroke];
      setStrokes(updated);
      setCurrentStroke([]);

      if (updated.length >= item.strokeLines.length) {
        AudioService.playSuccessSound();
        if (onComplete) onComplete();
      }
    }
  };

  const clearCanvas = () => {
    setStrokes([]);
    setCurrentStroke([]);
    AudioService.playClickSound();
  };

  return (
    <div className={styles.tracingContainer}>
      <div className={styles.canvasHeader}>
        <div className={styles.letterInfo}>
          <span className={styles.bigLetter}>{item.letter}</span>
          <span className={styles.smallLetter}>{item.lowercase}</span>
        </div>
        <div className={styles.actionButtons}>
          <button
            type="button"
            className={styles.iconBtn}
            onClick={() => AudioService.speak(item.letter)}
            aria-label="Ouvir letra"
            title="Ouvir pronúncia"
          >
            <Volume2 size={24} />
          </button>
          <button
            type="button"
            className={styles.iconBtn}
            onClick={clearCanvas}
            aria-label="Limpar desenho"
            title="Limpar canvas"
          >
            <RefreshCw size={24} />
          </button>
        </div>
      </div>

      <div className={styles.canvasWrapper}>
        <canvas
          ref={canvasRef}
          className={styles.canvas}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          aria-label={`Canvas para traçar a letra ${item.letter}`}
        />
      </div>

      <p className={styles.instructionText}>
        Use o dedo ou o mouse para traçar a letra <strong>{item.letter}</strong>
      </p>
    </div>
  );
};
