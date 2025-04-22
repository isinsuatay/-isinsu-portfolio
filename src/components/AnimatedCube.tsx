import React, { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import styles from '../styles/components/AnimatedCube.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faMedium, faInstagram } from '@fortawesome/free-brands-svg-icons';

const CubeComponent: React.FC = () => {
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const [currentX, setCurrentX] = useState(-20);
  const [currentY, setCurrentY] = useState(30);

  const cubeRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number, clientY: number) => {
    if (cubeRef.current) {
      const deltaX = clientX - startX;
      const deltaY = clientY - startY;

      setCurrentX(prevX => prevX + deltaY / 2);
      setCurrentY(prevY => prevY + deltaX / 2);

      cubeRef.current.style.transformOrigin = 'center';
      cubeRef.current.style.transform = `rotateX(${-currentX}deg) rotateY(${currentY}deg)`;

      setStartX(clientX);
      setStartY(clientY);
    }
  }, [startX, startY, currentX, currentY]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      handleMove(e.clientX, e.clientY);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        handleMove(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('touchmove', handleTouchMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('touchmove', handleTouchMove);
    };
  }, [handleMove]);

  useEffect(() => {
    if (cubeRef.current) {
      cubeRef.current.style.transformOrigin = 'center';
      cubeRef.current.style.transform = `rotateX(${-currentX}deg) rotateY(${currentY}deg)`;
    }
  }, [currentX, currentY]);

  return (
    <div className={styles.center}>
      <div className={styles.cubeContainer}>
        <div className={styles.cube} ref={cubeRef}>
          <div className={`${styles.side} ${styles.front}`}>
            <Link href="/">
              <p>Say Hello</p>
            </Link>
          </div>
          <div className={`${styles.side} ${styles.back}`}>
            <Link href="https://www.linkedin.com/in/%C4%B1%C5%9F%C4%B1nsu-atay-948496299/">
              <FontAwesomeIcon className={styles.icon} icon={faLinkedin} />
            </Link>
          </div>
          <div className={`${styles.side} ${styles.left}`}>
            <Link href="https://medium.com/@isinsu-atay">
              <FontAwesomeIcon className={styles.icon} icon={faMedium} />
            </Link>
          </div>
          <div className={`${styles.side} ${styles.right}`}>
            <Link href="https://github.com/isinsuatay">
              <FontAwesomeIcon className={styles.icon} icon={faGithub} />
            </Link>
          </div>
          <div className={`${styles.side} ${styles.top}`}></div>
          <div className={`${styles.side} ${styles.bottom}`}>
            <Link href="https://www.instagram.com/isiinsuu?igsh=b3dtZGg2NWRha2Nn&utm_source=qr">
              <FontAwesomeIcon className={styles.icon} icon={faInstagram} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CubeComponent;