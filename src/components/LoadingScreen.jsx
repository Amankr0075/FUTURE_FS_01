import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const loadingSteps = [
  "INITIALIZING KERNEL...",
  "LOADING UI MODULES...",
  "ESTABLISHING SECURE CONNECTION...",
  "FETCHING PORTFOLIO ASSETS...",
  "COMPILING SHADERS...",
  "RENDERING 3D ENVIRONMENT...",
  "ACCESSING MAINFRAME...",
  "SYSTEM BOOT SEQUENCE COMPLETE."
];

const LoadingScreen = ({ loading }) => {
  const [progress, setProgress] = useState(0);
  const [stepIndex, setStepIndex] = useState(0);

  useEffect(() => {
    if (loading) {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + Math.floor(Math.random() * 8) + 2; 
        });
      }, 80);
      
      return () => clearInterval(interval);
    }
  }, [loading]);

  useEffect(() => {
    // Determine which step text to show based on progress percentage
    const step = Math.floor((progress / 100) * (loadingSteps.length - 1));
    setStepIndex(step);
  }, [progress]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="premium-loading-screen"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            scale: 1.1,
            filter: "blur(20px)"
          }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99999,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#030305',
            color: '#fff',
            overflow: 'hidden'
          }}
        >
          {/* Professional Fluid Aurora Background */}
          <div style={{
            position: 'absolute',
            inset: 0,
            overflow: 'hidden',
            zIndex: 0,
            opacity: 0.8
          }}>
            {/* Top Right Blob */}
            <motion.div 
              animate={{ 
                x: [0, -30, 0],
                y: [0, 20, 0],
                scale: [1, 1.05, 1],
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
              style={{
                position: 'absolute',
                top: '-20%',
                right: '-10%',
                width: '60vw',
                height: '60vw',
                background: 'radial-gradient(circle, rgba(108,99,255,0.4) 0%, transparent 60%)',
                filter: 'blur(70px)',
                borderRadius: '50%',
                willChange: 'transform'
              }} 
            />
            {/* Bottom Left Blob */}
            <motion.div 
              animate={{ 
                x: [0, 30, 0],
                y: [0, -20, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
              style={{
                position: 'absolute',
                bottom: '-20%',
                left: '-10%',
                width: '70vw',
                height: '70vw',
                background: 'radial-gradient(circle, rgba(67,233,123,0.25) 0%, transparent 60%)',
                filter: 'blur(70px)',
                borderRadius: '50%',
                willChange: 'transform'
              }} 
            />
            {/* Center Core Glow */}
            <motion.div 
              animate={{ 
                scale: [1, 1.05, 1],
                opacity: [0.5, 0.7, 0.5]
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              style={{
                position: 'absolute',
                top: '20%',
                left: '20%',
                width: '60vw',
                height: '60vw',
                background: 'radial-gradient(circle, rgba(255,101,132,0.15) 0%, transparent 70%)',
                filter: 'blur(80px)',
                borderRadius: '50%',
                willChange: 'transform, opacity'
              }} 
            />
            {/* Cinematic Noise Overlay */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'url(\'data:image/svg+xml,%3Csvg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noiseFilter"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%25" height="100%25" filter="url(%23noiseFilter)"/%3E%3C/svg%3E\')',
              opacity: 0.03,
              pointerEvents: 'none'
            }} />
          </div>

          <style>
            {`
              @keyframes dash {
                to { stroke-dashoffset: 0; }
              }
            `}
          </style>

          {/* Interactive Core Animation */}
          <div style={{ position: 'relative', width: '200px', height: '200px', marginBottom: '40px', zIndex: 1 }}>
            {/* Outer Rotating Ring */}
            <motion.svg
              viewBox="0 0 100 100"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
            >
              <circle
                cx="50" cy="50" r="48"
                fill="none"
                stroke="rgba(108, 99, 255, 0.3)"
                strokeWidth="1"
                strokeDasharray="10 5 2 5"
              />
              <circle
                cx="50" cy="50" r="48"
                fill="none"
                stroke="#6c63ff"
                strokeWidth="2"
                strokeDasharray="20 80"
                strokeLinecap="round"
              />
            </motion.svg>

            {/* Inner Counter-Rotating Ring */}
            <motion.svg
              viewBox="0 0 100 100"
              animate={{ rotate: -360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              style={{ position: 'absolute', inset: '10px', width: 'calc(100% - 20px)', height: 'calc(100% - 20px)' }}
            >
              <circle
                cx="50" cy="50" r="48"
                fill="none"
                stroke="rgba(67, 233, 123, 0.3)"
                strokeWidth="1"
                strokeDasharray="5 15"
              />
              <circle
                cx="50" cy="50" r="48"
                fill="none"
                stroke="#43e97b"
                strokeWidth="2"
                strokeDasharray="10 90"
                strokeLinecap="round"
              />
            </motion.svg>

            {/* Center Logo */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1, type: "spring" }}
              style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '3rem',
                fontWeight: 900,
                letterSpacing: '0.05em',
                background: 'linear-gradient(135deg, #ffffff 0%, #a0a0b5 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 0 30px rgba(108, 99, 255, 0.5)'
              }}
            >
              AK
            </motion.div>
          </div>

          {/* Terminal Console Text */}
          <div style={{
            height: '24px',
            overflow: 'hidden',
            marginBottom: '16px',
            zIndex: 1,
            position: 'relative'
          }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={stepIndex}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.2 }}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.85rem',
                  color: 'var(--accent-tertiary)',
                  letterSpacing: '0.1em',
                  textShadow: '0 0 10px rgba(67, 233, 123, 0.4)'
                }}
              >
                &gt; {loadingSteps[stepIndex]}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* High-Tech Progress Bar */}
          <div style={{
            width: '320px',
            height: '4px',
            background: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '2px',
            position: 'relative',
            zIndex: 1,
            marginBottom: '12px',
            border: '1px solid rgba(108, 99, 255, 0.2)'
          }}>
            {/* Progress Fill */}
            <motion.div
              style={{
                height: '100%',
                background: 'linear-gradient(90deg, #6c63ff, #43e97b, #fff)',
                boxShadow: '0 0 20px rgba(108, 99, 255, 0.8), 0 0 10px rgba(67, 233, 123, 0.5)'
              }}
              initial={{ width: 0 }}
              animate={{ width: `${Math.min(progress, 100)}%` }}
              transition={{ ease: "linear", duration: 0.1 }}
            />
            {/* Scanning Laser Line */}
            <motion.div
              animate={{ x: [0, 320, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              style={{
                position: 'absolute',
                top: '-10px',
                left: 0,
                width: '2px',
                height: '24px',
                background: '#fff',
                boxShadow: '0 0 10px #fff'
              }}
            />
          </div>

          {/* Loading Percentage & Data Rate */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '320px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              color: 'var(--text-muted)',
              zIndex: 1
            }}
          >
            <span>SYS.MEM: OK</span>
            <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>
              {Math.min(progress, 100).toString().padStart(3, '0')}%
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
