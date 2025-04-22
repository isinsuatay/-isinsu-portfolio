"use client";

import React, { useEffect, useState } from 'react';
import styles from '@/styles/components/AnimatedText.module.scss';

const TextApp: React.FC = () => {
  const [text] = useState<string>('I am a software developer.');
  const [idx, setIdx] = useState<number>(1);
  const [speed] = useState<number>(300); 
  const [pause, setPause] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!pause) {
        setIdx((prevIdx) => {
          if (prevIdx >= text.length) {
            setPause(true);
            setTimeout(() => {
              setIdx(1);
              setPause(false);
            }, 3000);
          }
          return prevIdx + 1;
        });
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, pause]);

  return (
    <div className={styles.textApp}>
      <h2 className={styles.title}>Hi there, I am Işınsu</h2>
      <div className={styles.content}>
        {text.slice(0, idx)}
      </div>
    </div>
  );
};

export default TextApp;