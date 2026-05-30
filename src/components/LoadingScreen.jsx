import { useEffect } from 'react';

const LoadingScreen = ({ loading }) => {
  return (
    <div className={`loading-screen ${!loading ? 'hidden' : ''}`} aria-hidden={!loading}>
      <div className="loading-logo">AK</div>
      <div className="loading-bar">
        <div className="loading-progress" />
      </div>
      <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', fontFamily: 'var(--font-mono)' }}>
        Loading portfolio...
      </p>
    </div>
  );
};

export default LoadingScreen;
