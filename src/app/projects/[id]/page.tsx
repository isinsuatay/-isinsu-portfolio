"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { ProjectsData } from "../../../components/lib/data/ProjectData";
import styles from "@/styles/pages/ProjectContentPage.module.scss";

export default function ProjectPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const projectId = parseInt(params.id, 10);
  const project = ProjectsData.find((p) => p.id === projectId);

  if (!project) return <div>Project not found</div>;

  return (
    <div className={styles["projects-container"]}>
      <button className={styles["back-button"]} onClick={() => router.back()}>
        ← Go Back
      </button>

      <div className={styles["project-content-wrapper"]}>
        <motion.div
          className={styles["animated-container"]}
          animate={{ x: "-10%" }}
          transition={{ duration: 1.5 }}
          whileHover={{ scale: 1.05 }}
        >
          <motion.div
            className={styles["expanded-container"]}
            animate={{ width: "100%", height: "auto" }}
            transition={{ duration: 1.5 }}
          >
            <video
              src={project.video}
              autoPlay
              muted
              loop
              playsInline
              className={styles["project-video"]}
            />
          </motion.div>
        </motion.div>

        <div className={styles["project-details"]}>
          <div className={styles["project-title"]}>{project.title}</div>

          <motion.div
            className={styles["project-description"]}
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: "0", opacity: 1, color: "#fff" }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <p>{project.description}</p>

            {/* 🔗 GitHub Link */}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.visitButton}
              >
                View Code
              </a>
            )}

            {/* 🌐 Demo Link */}
            {project.demoLink && (
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.visitButton}
              >
                Live Demo
              </a>
            )}

            {/* 🔧 Technologies Used */}
            {project.technologies && (
              <div className={styles["section"]}>
                <h4>Technologies</h4>
                <ul className={styles["tech-list"]}>
                  {project.technologies.map((tech, index) => (
                    <li key={index}>{tech}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* 🧩 Tags */}
            {project.tags && (
              <div className={styles["section"]}>
                <h4>Tags</h4>
                <div className={styles["tag-list"]}>
                  {project.tags.map((tag, index) => (
                    <span key={index} className={styles["tag"]}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* 🧠 Additional Information */}
            <div className={styles["section"]}>
              <p>
                <strong>Difficulty:</strong> {project.difficulty}
              </p>
              <p>
                <strong>Role:</strong> {project.role}
              </p>
              <p>
                <strong>Duration:</strong> {project.duration}
              </p>
              <p>
                <strong>Year:</strong> {project.year}
              </p>
              <p>
                <strong>Type:</strong> {project.type}
              </p>
            </div>

            {/* ✨ Featured Features */}
            {project.features && (
              <div className={styles["section"]}>
                <h4>Features</h4>
                <ul>
                  {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
