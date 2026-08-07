import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    // Check if device has fine pointer (mouse)
    const mediaQuery = window.matchMedia('(pointer: fine)');
    setIsDesktop(mediaQuery.matches);
    
    const updateMediaQuery = (e) => setIsDesktop(e.matches);
    mediaQuery.addEventListener('change', updateMediaQuery);

    return () => mediaQuery.removeEventListener('change', updateMediaQuery);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName.toLowerCase() === 'button' ||
        target.tagName.toLowerCase() === 'a' ||
        target.closest('button') ||
        target.closest('a') ||
        target.classList.contains('hover-target')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isDesktop]);

  // Spring physics for smooth movement
  const cursorX = useSpring(mousePosition.x, { stiffness: 500, damping: 28, mass: 0.5 });
  const cursorY = useSpring(mousePosition.y, { stiffness: 500, damping: 28, mass: 0.5 });

  if (!isDesktop) return null;

  return (
    <>
      {/* Small dot */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 8,
          height: 8,
          backgroundColor: 'var(--accent-primary)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          x: mousePosition.x - 4, // Immediate tracking for dot
          y: mousePosition.y - 4,
          opacity: isHovered ? 0 : 1,
        }}
      />
      
      {/* Animated ring */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 32,
          height: 32,
          border: '2px solid var(--accent-primary)',
          backgroundColor: isHovered ? 'rgba(108, 99, 255, 0.1)' : 'transparent',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9998,
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovered ? 1.5 : 1,
          borderWidth: isHovered ? '1px' : '2px',
        }}
        transition={{ duration: 0.15 }}
      />
    </>
  );
};

export default CustomCursor;
