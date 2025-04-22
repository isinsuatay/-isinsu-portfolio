'use client';

import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import * as TWEEN from '@tweenjs/tween.js';
import styles from '@/styles/components/ThreeJSComponent.module.scss';

interface SmallDonut extends THREE.Mesh {
  velocity: THREE.Vector3;
}

const RotatingDonut: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const speedMultiplier = useRef(1);
  const mouseRef = useRef(new THREE.Vector2());
  const raycasterRef = useRef(new THREE.Raycaster());
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Scene Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x000000, 0);

    // Lighting
    scene.add(new THREE.AmbientLight(0xffffff, 0.5));
    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    // Main Donut
    const mainGeometry = new THREE.TorusGeometry(2, 0.8, 16, 100);
    const mainMaterial = new THREE.MeshStandardMaterial({
      color: 0x2194ce,
      roughness: 0,
      metalness: 1,
      side: THREE.DoubleSide,
    });
    const mainDonut = new THREE.Mesh(mainGeometry, mainMaterial);
    scene.add(mainDonut);

    // Small Donuts
    const smallDonuts: SmallDonut[] = [];
    const donutGeometry = new THREE.TorusGeometry(0.4, 0.2, 16, 100);

    const createSmallDonut = (): SmallDonut => {
      const smallMaterial = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        roughness: 0,
        metalness: 1,
        side: THREE.DoubleSide,
      });

      const mesh = new THREE.Mesh(donutGeometry, smallMaterial);
      const velocity = new THREE.Vector3(
        Math.random() - 0.5,
        Math.random() - 0.5,
        Math.random() - 0.5
      ).normalize().multiplyScalar(0.005);

      const smallDonut = Object.assign(mesh, { velocity }) as SmallDonut;

      smallDonut.position.set(
        Math.random() * 8 - 4,
        Math.random() * 8 - 4,
        Math.random() * 8 - 4
      );

      scene.add(smallDonut);
      smallDonuts.push(smallDonut);
      return smallDonut;
    };

    for (let i = 0; i < 5; i++) createSmallDonut();

    // Mouse Events
    const onMouseMove = (event: MouseEvent) => {
      const rect = canvasRef.current!.getBoundingClientRect();
      mouseRef.current.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouseRef.current.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    };

    window.addEventListener('mousemove', onMouseMove);

    const clock = new THREE.Clock();
    let frameId: number;
    let elapsed = 0;

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      elapsed += delta;

      if (elapsed > 5) {
        speedMultiplier.current += 0.2;
        elapsed = 0;
      }

      // Raycasting for interaction
      raycasterRef.current.setFromCamera(mouseRef.current, camera);
      const hovered = raycasterRef.current.intersectObjects(smallDonuts);

      mainDonut.rotation.x += 0.01;
      mainDonut.rotation.y += 0.01;

      // Update small donuts
      smallDonuts.forEach((d) => {
        const isHovered = hovered.some((h) => h.object === d);

        if (isHovered) {
          scene.remove(d);
          const index = smallDonuts.indexOf(d);
          if (index !== -1) smallDonuts.splice(index, 1);
          createSmallDonut();
          setScore((prev) => prev + 1);
          return;
        }

        d.position.add(d.velocity.clone().multiplyScalar(speedMultiplier.current));

        if (d.position.distanceTo(mainDonut.position) > 6) {
          scene.remove(d);
          const index = smallDonuts.indexOf(d);
          if (index !== -1) smallDonuts.splice(index, 1);
          createSmallDonut();
        }
      });

      TWEEN.update();
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <>
      <canvas ref={canvasRef} className={styles.canvas} />
      <div className={styles.scoreBox}>Score: {score}</div>
    </>
  );
};

export default RotatingDonut;