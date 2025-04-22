"use client";

import { useEffect } from 'react';
import RotatingDonut from '../components/ThreeJsComponent';
import TextApp from '../components/AnimatedTextComponent';
import styles from "@/styles/pages/HomePage.module.scss";

function HomePage() {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className={styles.homePageContainer}>
      <header className={styles.header}>
        <TextApp />
      </header>
      <main className={styles.main}>
        <RotatingDonut />
      </main>
    </div>
  );
}

export default HomePage;