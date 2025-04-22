"use client";

import { useState } from "react";
import styles from "@/styles/components/WhatICanDo.module.scss";

const data = [
  {
    title: "Web Development",
    content:
      "I build scalable, high-performance web applications using modern technologies like React.js, Next.js, Vue.js, Nuxt.js, Node.js, as well as Python frameworks such as Django and Flask.",
  },
  {
    title: "Data Analysis & Python",
    content:
      "With a strong command of Python, I analyze data, extract insights, and support decision-making through data-driven approaches.",
  },
  {
    title: "API & Backend Development",
    content:
      "I design and develop RESTful APIs, manage databases, and optimize backend logic and algorithms for performance and scalability.",
  },
  {
    title: "Business Analysis & Optimization",
    content:
      "I help improve business processes and workflows using analytical thinking, software engineering, and automation tools.",
  },
  {
    title: "Content Creation & Technical Writing",
    content:
      "I share knowledge and write articles about software development, data science, and technology on platforms like Medium.",
  },
];

const WhatICanDo = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className={styles.accordionContainer}>
      <h3 className={styles.title}>What Can I Do?</h3>
      <div className={styles.scrollWrapper}>
        {data.map((item, index) => (
          <div key={index} className={styles.accordionItem}>
            <button
              onClick={() => toggle(index)}
              className={styles.accordionTitle}
            >
              {item.title}
              <span>{activeIndex === index ? "−" : "+"}</span>
            </button>
            {activeIndex === index && (
              <div className={styles.accordionContent}>{item.content}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatICanDo;
