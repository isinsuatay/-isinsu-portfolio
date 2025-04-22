"use client";

import { useState } from "react";
import styles from "@/styles/pages/AboutPage.module.scss";
import Timeline from "../../components/TimelineComponent";

function AboutPage() {

  
  const [showCV, setShowCV] = useState(false);
  const handleShowCV = () => setShowCV(true);
  const handleCloseCV = () => setShowCV(false);

  return (
    <div className={styles.container}>
      <div className={styles.textBlock}>
        Hello! I am Işınsu Atay, a software developer specialized in software
        development and data analysis. With my education in mathematics and
        computer programming, I embarked on my journey in software development
        and have continuously expanded my knowledge and experience in this
        field.
        <br />
        <br />
        <br />
        <ul>
          <b>TECHNICAL SKILLS</b>
          <br />
          <br />
          <li>
            <b>Software Development:</b> Python, JavaScript, C++, R, Rust
          </li>
          <li>
            <b>Web Technologies:</b> HTML, CSS/SASS-SCSS, Bootstrap, Node.js,
            React.js, Next.js, Vue.js, Nuxt.js, Django, Flask
          </li>
          <li>
            <b>Data Analysis:</b> Python (Pandas, NumPy, SciPy), R, SQL,
            MongoDB, PostgreSQL
          </li>
          <li>
            <b>Tools and Frameworks:</b> Selenium WebDriver, React Native
          </li>
          <li>
            <b>Others:</b> Microsoft Office, jQuery, RestAPI
          </li>
        </ul>
        <br />
        <br />
        I aim to continuously improve my knowledge and skills in software
        development and data analysis, and to make a difference in the industry
        by working on innovative projects in these fields. In this rapidly
        advancing era of technology, I am passionate about learning new things
        and applying what I have learned to my projects.

        {/* CV Button */}
        <div className={styles.cvButton}>
          <button onClick={handleShowCV} className={styles.button}>View My CV</button>
        </div>
      </div>

      {/* Modal */}
      {showCV && (
        <div className={styles.modalOverlay} onClick={handleCloseCV}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <span className={styles.close} onClick={handleCloseCV}>&times;</span>
            <embed src="/cv/my-cv.pdf" width="100%" height="500px" />
          </div>
        </div>
      )}

      <div className={styles.timelineBlock}>
        <Timeline />
      </div>
    </div>
  );
}

export default AboutPage;