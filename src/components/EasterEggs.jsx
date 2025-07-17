import React, { useEffect } from 'react';

const EasterEggs = () => {
  useEffect(() => {
    // Name selection easter egg
    const nameGif = document.createElement('img');
    nameGif.src = 'https://media.giphy.com/media/3o7abKhOpu0NwenH3O/giphy.gif'; // Wave hello GIF
    nameGif.className = 'easter-egg-gif';
    document.body.appendChild(nameGif);

    // Software engineer hover GIF
    const hoverGif = document.createElement('img');
    hoverGif.src = 'https://media.giphy.com/media/26tn33aiTi1jkl6H6/giphy.gif'; // Coding GIF
    hoverGif.className = 'hover-follow-gif';
    document.body.appendChild(hoverGif);

    // Konami code easter egg
    let konamiCode = [];
    const konamiSequence = [
      'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
      'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
      'KeyB', 'KeyA'
    ];

    // Name selection handler
    const handleSelection = () => {
      const selection = window.getSelection();
      const selectedText = selection ? selection.toString().trim() : '';

      if (['Hamzah', 'Hamzah Ahmed'].includes(selectedText)) {
        const range = selection.getRangeAt(0);
        const rect = range.getBoundingClientRect();
        
        nameGif.style.left = `${rect.left + window.scrollX}px`;
        nameGif.style.top = `${rect.top + window.scrollY - 60}px`;
        nameGif.style.display = 'block';
        
        setTimeout(() => {
          nameGif.style.display = 'none';
        }, 3000);
      } else {
        nameGif.style.display = 'none';
      }
    };

    // Software engineer hover handler
    const handleSoftwareEngineerHover = (e) => {
      const trigger = e.target.closest('.software-engineer-trigger');
      if (trigger) {
        hoverGif.style.display = 'block';
        updateGifPosition(e, trigger);
      }
    };

    const handleSoftwareEngineerMove = (e) => {
      const trigger = e.target.closest('.software-engineer-trigger');
      if (trigger) {
        updateGifPosition(e, trigger);
      }
    };

    const handleSoftwareEngineerLeave = (e) => {
      const trigger = e.target.closest('.software-engineer-trigger');
      const relatedTrigger = e.relatedTarget?.closest('.software-engineer-trigger');
      
      if (trigger && !relatedTrigger) {
        hoverGif.style.display = 'none';
      }
    };

    const updateGifPosition = (e, trigger) => {
      const triggerRect = trigger.getBoundingClientRect();
      const x = e.clientX - 40; // Center the GIF horizontally
      const y = triggerRect.bottom + window.scrollY + 10; // Position below the text with 10px gap
      hoverGif.style.left = `${x}px`;
      hoverGif.style.top = `${y}px`;
    };

    // Konami code handler
    const handleKonamiCode = (e) => {
      konamiCode.push(e.code);
      
      if (konamiCode.length > konamiSequence.length) {
        konamiCode.shift();
      }
      
      if (konamiCode.length === konamiSequence.length && 
          konamiCode.every((code, index) => code === konamiSequence[index])) {
        
        // Easter egg: Matrix rain effect
        createMatrixRain();
        konamiCode = []; // Reset
      }
    };

    // Matrix rain effect
    const createMatrixRain = () => {
      const canvas = document.createElement('canvas');
      canvas.style.position = 'fixed';
      canvas.style.top = '0';
      canvas.style.left = '0';
      canvas.style.width = '100%';
      canvas.style.height = '100%';
      canvas.style.zIndex = '10000';
      canvas.style.pointerEvents = 'none';
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      document.body.appendChild(canvas);
      
      const ctx = canvas.getContext('2d');
      const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()';
      const fontSize = 14;
      const columns = canvas.width / fontSize;
      const drops = [];
      
      for (let i = 0; i < columns; i++) {
        drops[i] = 1;
      }
      
      const draw = () => {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = '#0F0';
        ctx.font = fontSize + 'px monospace';
        
        for (let i = 0; i < drops.length; i++) {
          const text = chars[Math.floor(Math.random() * chars.length)];
          ctx.fillText(text, i * fontSize, drops[i] * fontSize);
          
          if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
          }
          drops[i]++;
        }
      };
      
      const interval = setInterval(draw, 33);
      
      // Remove after 5 seconds
      setTimeout(() => {
        clearInterval(interval);
        document.body.removeChild(canvas);
      }, 5000);
    };

    // Add event listeners
    document.addEventListener('selectionchange', handleSelection);
    document.addEventListener('mouseover', handleSoftwareEngineerHover);
    document.addEventListener('mousemove', handleSoftwareEngineerMove);
    document.addEventListener('mouseout', handleSoftwareEngineerLeave);
    document.addEventListener('keydown', handleKonamiCode);

    // Cleanup
    return () => {
      document.removeEventListener('selectionchange', handleSelection);
      document.removeEventListener('mouseover', handleSoftwareEngineerHover);
      document.removeEventListener('mousemove', handleSoftwareEngineerMove);
      document.removeEventListener('mouseout', handleSoftwareEngineerLeave);
      document.removeEventListener('keydown', handleKonamiCode);
      
      if (document.body.contains(nameGif)) {
        document.body.removeChild(nameGif);
      }
      if (document.body.contains(hoverGif)) {
        document.body.removeChild(hoverGif);
      }
    };
  }, []);

  return null;
};

export default EasterEggs;