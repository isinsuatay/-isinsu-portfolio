"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ProjectsData } from "../../components/lib/data/ProjectData";
import styles from "@/styles/pages/ProjectListPage.module.scss";

function ProjectsListPage() {
  return (
    <div className={styles.projectsContainer}>
      <div className={styles.gridWrapper}>
        {ProjectsData.map((project) => (
          <motion.div
            className={styles.card}
            variants={project.animationVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            key={project.id}
          >
            <Link href={`/projects/${project.id}`}>
              <motion.div className={styles.card} whileHover={{ scale: 1.03 }}>
                <motion.video
                  src={project.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className={styles.cardImage}
                />
                <div className={styles.cardOverlay}>
                  <h3>{project.title}</h3>
                </div>
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default ProjectsListPage;