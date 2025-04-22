"use client";

import CubeComponent from "../../components/AnimatedCube";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import styles from "@/styles/pages/ContactPage.module.scss";
import WorldMap from "../../components/WorldMap";
import AccordionCard from "@/components/AccordionCard";
import WhatICanDo from "@/components/WhatICanDo";

const ContactPage: React.FC = () => {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.contactText}>
        <h2>CONTACT</h2>
        <hr />
      </div>
      <div className={styles.cubeWrapper}>
        <CubeComponent />
      </div>

      <div className={styles.accordionWrapper}>
        <AccordionCard title="📬 Get in Touch">
          <div className={styles.contactEmail}>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            <p>isinsuatay@gmail.com</p>
          </div>
        </AccordionCard>
        <AccordionCard title="🛠️ What Can I Do">
          <WhatICanDo />
        </AccordionCard>
        <AccordionCard title="🌍 Where Do I Live?">
          <div className={styles.mapWrapper}>
            <WorldMap />
          </div>
        </AccordionCard>
      </div>
    </div>
  );
};

export default ContactPage;
