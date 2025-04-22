"use client";

import { useEffect } from 'react';
import styles from "@/styles/components/Stars.module.scss"; 

const Stars = () => {
    useEffect(() => {
        const numStars = 300;
        const starsContainer = document.querySelector(`.${styles.starsContainer}`); 

        if (starsContainer) {
            for (let i = 0; i < numStars; i++) {
                const star = document.createElement('div');
                star.classList.add(styles.stars); 
                star.style.top = `${Math.floor(Math.random() * 100)}%`;
                star.style.left = `${Math.floor(Math.random() * 100)}%`;
                star.style.animationDelay = `-${Math.random() * 10}s`;
                starsContainer.appendChild(star);
            }
        }
    }, []);

    return (
        <div className={styles.starsContainer}></div> 
    );
}

export default Stars;