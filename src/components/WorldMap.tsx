'use client';
import React from 'react';
import styles from '@/styles/components/WorldMap.module.scss';
import WorldSVG from '@/assets/maps/world.svg?component';

const WorldMap: React.FC = () => {
  return (
    <div className={styles.mapContainer}>
      <div className={styles.svgWrapper}>
        <WorldSVG className={styles.mapSvg} />
        <circle
          cx="1220"
          cy="390"
          r="10"
          className={styles.pulse}
        />
      </div>
      <p className={styles.locationText}>Working remotely from Türkiye 🇹🇷</p>
    </div>
  );
};

export default WorldMap;