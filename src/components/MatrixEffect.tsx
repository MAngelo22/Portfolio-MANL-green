import React, { useEffect, useRef } from 'react';

const MatrixEffect: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const letterWidth = 2; // Factor de escala para el ancho de las letras

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    if (!ctx) return;

    canvas.width = window.innerWidth;  // Asegúrate de que el canvas ocupe el ancho de la ventana
    canvas.height = window.innerHeight; // Y el alto de la ventana

    const columns = Math.floor(canvas.width / 50); // Espaciado horizontal de 50 para mayor separación
    const drops: number[] = Array.from({ length: columns }, () => Math.random() * canvas.height);

    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const letterArray = letters.split('');

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'; // Fondo negro semi-transparente
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      drops.forEach((drop, index) => {
        const text = letterArray[Math.floor(Math.random() * letterArray.length)];
        const x = index * 50; // Espaciado horizontal de 50
        const y = drop; // Usar directamente la posición drop para mayor separación

        const fontSize = 10; // Tamaño de la fuente
        ctx.font = `${fontSize}px monospace`; // Tamaño de la fuente

        // Dibuja la sombra (efecto 3D)
        ctx.fillStyle = 'rgba(0, 255, 0, 0.2)'; // Sombra más clara y semitransparente
        ctx.save(); // Guarda el estado actual del contexto
        ctx.scale(letterWidth, 1); // Escala el ancho de las letras
        ctx.fillText(text, x / letterWidth, y + 4); // Desplaza la sombra hacia abajo
        ctx.restore(); // Restaura el estado del contexto

        // Dibuja las letras principales
        ctx.fillStyle = 'rgba(0, 255, 0, 0.6)'; // Letras verdes semitransparentes
        ctx.save(); // Guarda el estado actual del contexto
        ctx.scale(letterWidth, 1); // Escala el ancho de las letras
        ctx.fillText(text, x / letterWidth, y); // Dibuja las letras
        ctx.restore(); // Restaura el estado del contexto

        // Reiniciar la caída de letras
        if (drop > canvas.height && Math.random() > 0.975) {
          drops[index] = 0; // Reinicia la caída al tope
        }

        // Ajustar la velocidad de caída (valores menores para hacer la caída más lenta)
        drops[index] += Math.random() * 3 + 2; // Distancia de caída ajustada (2 a 5 unidades)
      });
    };

    const interval = setInterval(draw, 50); // Mantener el intervalo en 50 ms

    return () => clearInterval(interval);
  }, [letterWidth]); // Asegúrate de que letterWidth sea una dependencia

  return <canvas ref={canvasRef} className="absolute inset-0 z-0" style={{ width: '100%', height: '100%' }} />;
};

export default MatrixEffect;
