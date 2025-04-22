"use client";

import { useEffect, useState } from "react";
import styles from "@/styles/components/Timeline.module.scss";

type Event = {
  year: string;
  title: string;
  description: string;
};

const Timeline = () => {
  const [currentEventIndex, setCurrentEventIndex] = useState<number>(0);

  const events: Event[] = [
    {
      year: "2020-Present",
      title: "Freelance and Personal Projects",
      description:
        "Started working as a freelancer and focused on personal projects. Developed customized software for various industries. Conducted data analysis with Python and R. Gained full-stack development and project management experience.",
    },
    {
      year: "2022",
      title: "Associate Degree in Computer Programming",
      description:
        "Graduated from Atatürk University. Focused on algorithm development and data structures. Learned Java and Python.",
    },
    {
      year: "2023",
      title: "Bachelor's Degree in Mathematics",
      description:
        "Graduated from Gazi University. Improved skills in C++ and Python. Gained knowledge in data modeling and analysis.",
    },
    {
      year: "2023",
      title: "Full Stack Web Developer Training",
      description:
        "Completed training at NEOS Academy. Worked with React, Node.js, Django, and MongoDB. Gained UI/UX and full-stack development skills.",
    },
    {
      year: "2024",
      title: "NextJs Developer",
      description:
        "Currently working as a Next.js developer. Focusing on SSR, API integration, and dynamic interfaces. Optimizing performance and improving UX.",
    },
    {
      year: "2025",
      title: "Computer Instructor & Project Management Intern",
      description:
        "Currently teaching the 'Computer System Maintenance and Repair' course at Çankaya Public Education Center. I provide training on hardware, software, OS installation, and troubleshooting, helping students enhance their technical skills. Additionally, I am interning as a project management intern at SCA Social, supporting AI and data science projects.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentEventIndex((prevIndex) =>
        prevIndex < events.length - 1 ? prevIndex + 1 : 0
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [events.length]);

  return (
    <div className={styles.timeline}>
      {events.map((event, index) => (
        <div
          key={index}
          className={`${styles.event} ${
            index <= currentEventIndex ? styles.show : ""
          }`}
          style={{ animationDelay: `${index * 0.8}s` }}
        >
          <div className={styles["event-date"]}>{event.year}</div>
          <div className={styles["event-description"]}>
            <h3>{event.title}</h3>
            <p>{event.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
