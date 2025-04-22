"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "@/styles/components/AccordionCard.module.scss";

type AccordionCardProps = {
  title: string;
  children: React.ReactNode;
};

const AccordionCard = ({ title, children }: AccordionCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className={styles.card} ref={cardRef}>
      <div className={styles.header} onClick={() => setIsOpen(!isOpen)}>
        <h3>{title}</h3>
        <span className={`${styles.arrow} ${isOpen ? styles.open : ""}`}>▼</span>
      </div>

      <AnimatePresence initial={false}>
        <motion.div
          className={styles.content}
          ref={contentRef}
          initial={{ height: 0, opacity: 0 }}
          animate={
            isOpen
              ? { height: contentRef.current?.scrollHeight, opacity: 1 }
              : { height: 0, opacity: 0 }
          }
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          style={{ overflow: "hidden" }}
        >
          <div>{children}</div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default AccordionCard;

