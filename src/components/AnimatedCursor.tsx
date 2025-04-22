'use client';

import React, { useEffect } from 'react';
import styles from '@/styles/components/AnimatedCursor.module.scss';

const AnimatedCursor: React.FC = () => {
  useEffect(() => {
    const cursor = document.getElementById('custom-cursor');

    const moveCursor = (e: MouseEvent) => {
      if (cursor) {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      }
    };

    const addHover = () => cursor?.classList.add(styles.cursorHover);
    const removeHover = () => cursor?.classList.remove(styles.cursorHover);

    document.addEventListener('mousemove', moveCursor);

    const interactiveElements = document.querySelectorAll('button, a, input, textarea, select');
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', addHover);
      el.addEventListener('mouseleave', removeHover);
    });

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', addHover);
        el.removeEventListener('mouseleave', removeHover);
      });
    };
  }, []);

  return <div id="custom-cursor" className={styles.customCursor} />;
};

export default AnimatedCursor;

