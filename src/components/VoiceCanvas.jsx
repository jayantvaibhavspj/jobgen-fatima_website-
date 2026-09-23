import React, { useEffect, useRef } from 'react';

export default function VoiceCanvas({ isPlaying = false }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Mouse tracking & shockwave ripple array
    let mouse = { x: width / 2, y: height / 2, active: false };
    const ripples = [];

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const newX = e.clientX - rect.left;
      const newY = e.clientY - rect.top;

      // Add a shockwave ripple every few pixels of mouse movement
      if (Math.hypot(newX - mouse.x, newY - mouse.y) > 15) {
        ripples.push({
          x: newX,
          y: newY,
          radius: 5,
          maxRadius: Math.random() * 60 + 40,
          alpha: 0.6,
          speed: Math.random() * 2 + 1.5,
          color: Math.random() > 0.5 ? 'rgba(245, 158, 11, ' : 'rgba(6, 182, 212, '
        });
        if (ripples.length > 25) ripples.shift();
      }

      mouse.x = newX;
      mouse.y = newY;
      mouse.active = true;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Dynamic Energy Particles Setup
    const particleCount = 55;
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.7,
      vy: (Math.random() - 0.5) * 0.7,
      radius: Math.random() * 2.5 + 1,
      alpha: Math.random() * 0.5 + 0.3,
      color: Math.random() > 0.6 ? '#F59E0B' : (Math.random() > 0.3 ? '#06B6D4' : '#10B981')
    }));

    let phase = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Speed up animation frequency when audio teaser is playing
      phase += isPlaying ? 0.045 : 0.018;

      // 1. Draw Expanding Mouse Cursor Ripples
      for (let i = ripples.length - 1; i >= 0; i--) {
        const r = ripples[i];
        r.radius += r.speed;
        r.alpha -= 0.015;

        if (r.alpha <= 0 || r.radius >= r.maxRadius) {
          ripples.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.beginPath();
        ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `${r.color}${r.alpha})`;
        ctx.lineWidth = 1.8;
        ctx.shadowColor = r.color.replace('rgba', 'rgb').replace(', ', ')');
        ctx.shadowBlur = 8;
        ctx.stroke();
        ctx.restore();
      }

      // 2. Draw Multi-layered Harmonic Sound Ribbon Waves
      const waveLayers = [
        { color: 'rgba(245, 158, 11, 0.4)', shadow: 'rgba(245, 158, 11, 0.6)', amp: 50, freq: 0.005, speed: 1 },
        { color: 'rgba(6, 182, 212, 0.35)', shadow: 'rgba(6, 182, 212, 0.5)', amp: 38, freq: 0.008, speed: 1.4 },
        { color: 'rgba(139, 92, 246, 0.3)', shadow: 'rgba(139, 92, 246, 0.45)', amp: 26, freq: 0.012, speed: 0.8 },
        { color: 'rgba(16, 185, 129, 0.25)', shadow: 'rgba(16, 185, 129, 0.35)', amp: 20, freq: 0.016, speed: 1.8 }
      ];

      waveLayers.forEach((layer) => {
        ctx.save();
        ctx.beginPath();
        ctx.lineWidth = 2.5;
        ctx.strokeStyle = layer.color;
        ctx.shadowColor = layer.shadow;
        ctx.shadowBlur = 14;

        for (let x = 0; x <= width; x += 4) {
          const normX = x / width;
          const envelope = Math.sin(normX * Math.PI); // Envelope to smooth edges

          // Interactive Mouse distortion influence
          let mouseDist = 0;
          if (mouse.active) {
            const dx = x - mouse.x;
            const dy = height / 2 - mouse.y;
            const dist = Math.hypot(dx, dy);
            if (dist < 220) {
              mouseDist = (1 - dist / 220) * 30 * Math.sin(phase * 2.5);
            }
          }

          const y =
            height / 2 +
            Math.sin(x * layer.freq + phase * layer.speed) * (layer.amp + (isPlaying ? 25 : 0)) * envelope +
            mouseDist;

          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
        ctx.restore();
      });

      // 3. Draw Connected Glowing Energy Particles & Constellations
      particles.forEach((p, idx) => {
        p.x += p.vx * (isPlaying ? 1.8 : 1);
        p.y += p.vy * (isPlaying ? 1.8 : 1);

        // Gentle bounce off screen edges
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Mouse attraction
        if (mouse.active) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 150) {
            p.x += (dx / dist) * 0.4;
            p.y += (dy / dist) * 0.4;
          }
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 8;
        ctx.fill();

        // Connect neighboring nodes with translucent energy beams
        for (let j = idx + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(245, 158, 11, ${0.18 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      });

      // 4. Sonic Pulse Rings when Audio Teaser is Active
      if (isPlaying) {
        ctx.save();
        const pulseRadius = (phase * 60) % (Math.min(width, height) * 0.4);
        const opacity = 1 - pulseRadius / (Math.min(width, height) * 0.4);

        ctx.beginPath();
        ctx.arc(width / 2, height / 2, pulseRadius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(245, 158, 11, ${opacity * 0.35})`;
        ctx.lineWidth = 2;
        ctx.shadowColor = '#F59E0B';
        ctx.shadowBlur = 15;
        ctx.stroke();
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isPlaying]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0 transition-opacity duration-700"
    />
  );
}

