"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./page.module.css";

export default function Home() {
  const [isOpeningPortal, setIsOpeningPortal] = useState(false);

  const handleGetStarted = () => {
    setIsOpeningPortal(true);
  };

  const handleBack = () => {
    setIsOpeningPortal(false);
  };

  return (
    <div className={styles.container}>
      {/* Background Hero Layer */}
      <main className={styles.hero}>
        {/* Decorative Corners */}
        <img src="/corner.png" className={styles.cornerTopLeft} alt="" />
        <img src="/corner.png" className={styles.cornerBottomRight} alt="" />
        
        <div className={styles.heroContent}>
          <h1>
            Experience <span className={styles.highlight}>Vaani Setu</span>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <span className={styles.label}>Vaani Setu</span> is an app that <span className={styles.accent}>breaks the language barrier</span>.
          </motion.p>
          <motion.button
            className={styles.btn}
            onClick={handleGetStarted}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Get Started
          </motion.button>
        </div>
      </main>

      {/* Portal Dashboard Layer */}
      <motion.div
        className={styles.portalContainer}
        initial={{ clipPath: "inset(50% 50% 50% 50% round 100vw)" }}
        animate={{ 
          clipPath: isOpeningPortal 
            ? "inset(0% 0% 0% 0% round 0px)" 
            : "inset(50% 50% 50% 50% round 100vw)" 
        }}
        transition={{ 
          duration: 1.1, 
          ease: [0.85, 0, 0.15, 1] 
        }}
      >
        <div className={styles.dashboard}>
          {/* Decorative Corners for Dashboard */}
          <img src="/corner.png" className={styles.cornerTopLeft} alt="" />
          <img src="/corner.png" className={styles.cornerBottomRight} alt="" />
          
          <div className={styles.dashboardContent}>
            <motion.h1 
              animate={isOpeningPortal ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ delay: 0.5 }}
            >
              Welcome to the Future
            </motion.h1>
            <div className={styles.dashboardGrid}>
              <div className={styles.dashboardCard}>
                <h3>Real-time AI</h3>
                <p>Breaking boundaries instantly.</p>
              </div>
              <div className={styles.dashboardCard}>
                <h3>Global Context</h3>
                <p>Understand every nuance.</p>
              </div>
            </div>
            <button className={styles.backBtn} onClick={handleBack}>
              Explore More
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
