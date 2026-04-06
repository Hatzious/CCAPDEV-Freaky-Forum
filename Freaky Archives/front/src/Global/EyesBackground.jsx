import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const EYE_PAIRS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
const EYE_PAIRS_LIMIT = 100; // configurable limit for max eyes to spawn

const MIN_SPAWN_INTERVAL = 10000;
const MAX_SPAWN_INTERVAL = 60000;
const MIN_SHOW_DELAY = 250; // time before overlay first appears
const MAX_SHOW_DELAY = 600;
const MIN_HIDE_DURATION = 120;
const MAX_HIDE_DURATION = 220;
const MIN_VISIBLE_DURATION = 2200;
const MAX_VISIBLE_DURATION = 52000;

const getRandomDelay = () => Math.random() * (MAX_SPAWN_INTERVAL - MIN_SPAWN_INTERVAL) + MIN_SPAWN_INTERVAL;
const getShowDelay = () => Math.random() * (MAX_SHOW_DELAY - MIN_SHOW_DELAY) + MIN_SHOW_DELAY;
const getHideDuration = () => Math.random() * (MAX_HIDE_DURATION - MIN_HIDE_DURATION) + MIN_HIDE_DURATION;
const getVisibleDuration = () => Math.random() * (MAX_VISIBLE_DURATION - MIN_VISIBLE_DURATION) + MIN_VISIBLE_DURATION;

// Bias X position to left and right sides of the page
const getRandomXBiased = () => {
  const side = Math.random() < 0.5 ? 'left' : 'right';
  if (side === 'left') {
    return Math.random() * 20; // 0-20% for left side
  } else {
    return Math.random() * 20 + 80; // 80-100% for right side
  }
};

const getRandomEyeNumber = (availableEyes) => {
  const randomIndex = Math.floor(Math.random() * availableEyes.length);
  return availableEyes[randomIndex];
};

export default function EyesBackground() {
  const location = useLocation();
  const [visibleEyes, setVisibleEyes] = useState([]);

  useEffect(() => {
    let spawnCount = 0;
    let spawnTimeoutId;
    const overlayTimeouts = new Map();
    const availableEyeNumbers = [...EYE_PAIRS];

    const updateEye = (eyeId, update) => {
      setVisibleEyes(prev => prev.map(eye => eye.id === eyeId ? { ...eye, ...update } : eye));
    };

    const scheduleBlinkCycle = (eyeId) => {
      const visibleDuration = getVisibleDuration();
      const hideDuration = getHideDuration();

      const hideTimeout = setTimeout(() => {
        updateEye(eyeId, { overlayVisible: false });

        const showTimeout = setTimeout(() => {
          updateEye(eyeId, { overlayVisible: true });
          scheduleBlinkCycle(eyeId);
        }, hideDuration);

        overlayTimeouts.set(`${eyeId}-show`, showTimeout);
      }, visibleDuration);

      overlayTimeouts.set(`${eyeId}-hide`, hideTimeout);
    };

    const spawnEye = () => {
      if (spawnCount >= EYE_PAIRS_LIMIT) {
        return;
      }

      const eyeNumber = getRandomEyeNumber(availableEyeNumbers);

      // const randomX = getRandomXBiased();
      const randomX = Math.random() * 86 + 4;
      const randomY = Math.random() * 86 + 4;
      const showDelay = getShowDelay();
      const eyeId = `eye-${eyeNumber}-${spawnCount}`;

      setVisibleEyes(prev => [
        ...prev,
        {
          id: eyeId,
          number: eyeNumber,
          x: randomX,
          y: randomY,
          overlayVisible: false,
        }
      ]);

      const initialTimeout = setTimeout(() => {
        updateEye(eyeId, { overlayVisible: true });
        scheduleBlinkCycle(eyeId);
      }, showDelay);

      overlayTimeouts.set(`${eyeId}-initial`, initialTimeout);
      spawnCount += 1;

      if (spawnCount < EYE_PAIRS_LIMIT) {
        spawnTimeoutId = setTimeout(spawnEye, getRandomDelay());
      }
    };

    setVisibleEyes([]);
    spawnEye();

    return () => {
      clearTimeout(spawnTimeoutId);
      overlayTimeouts.forEach(clearTimeout);
      overlayTimeouts.clear();
      setVisibleEyes([]);
    };
  }, [location.pathname]);

  return (
    <div className="fixed inset-0 pointer-events-none">
      {visibleEyes.map(eye => (
        <div
          key={eye.id}
          className="absolute"
          style={{
            left: `${eye.x}%`,
            top: `${eye.y}%`,
            willChange: 'transform',
          }}
        >
          <div className="relative inline-block pointer-events-none">
            <div className="relative animate-jitter">
              <img
                src={`/eye gif/eye ${eye.number}.gif`}
                alt="blinking eye"
                className="block w-auto h-auto animate-jitter"
                
              />
              {eye.overlayVisible && (
                <img
                  src={`/eye static/eye ${eye.number}.png`}
                  alt="static eye"
                  className="absolute inset-0 w-full h-full object-cover animate-jitter"
                  style={{ zIndex: 1 }}
                />
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
