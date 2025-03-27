import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "./OurService.css";
import medCoding from "../assets/med-code.jpg";
import revenue from "../assets/revenue cycle.jpg";
import audit from "../assets/audit.jpg";

const OurServices = () => {
  const [visibleSections, setVisibleSections] = useState({
    title: false,
    section1: false,
    section2: false,
    section3: false,
  });
  const [scrollDirection, setScrollDirection] = useState("down");

  const titleRef = useRef(null);
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);

  // Track scroll direction
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection Observer for visibility
  useEffect(() => {
    const observerOptions = { threshold: 0.5 };
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === titleRef.current) {
            setVisibleSections((prev) => ({ ...prev, title: true }));
          } else if (entry.target === section1Ref.current) {
            setVisibleSections((prev) => ({ ...prev, section1: true }));
          } else if (entry.target === section2Ref.current) {
            setVisibleSections((prev) => ({ ...prev, section2: true }));
          } else if (entry.target === section3Ref.current) {
            setVisibleSections((prev) => ({ ...prev, section3: true }));
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    if (titleRef.current) observer.observe(titleRef.current);
    if (section1Ref.current) observer.observe(section1Ref.current);
    if (section2Ref.current) observer.observe(section2Ref.current);
    if (section3Ref.current) observer.observe(section3Ref.current);

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (section1Ref.current) observer.unobserve(section1Ref.current);
      if (section2Ref.current) observer.unobserve(section2Ref.current);
      if (section3Ref.current) observer.unobserve(section3Ref.current);
    };
  }, []);

  // Animation variants
  const titleVariants = {
    hidden: { opacity: 0, y: scrollDirection === "down" ? 50 : -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", type: "spring", stiffness: 80 },
    },
  };

  const imageVariantsLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut", type: "spring", stiffness: 100 },
    },
  };

  const imageVariantsRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut", type: "spring", stiffness: 100 },
    },
  };

  const contentVariantsLeft = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, delay: 0.3, ease: "easeOut" },
    },
  };

  const contentVariantsRight = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, delay: 0.3, ease: "easeOut" },
    },
  };

  return (
    <div className="our-services-container">
      <div ref={titleRef}>
        <motion.h1
          className="section-title"
          variants={titleVariants}
          initial="hidden"
          animate={visibleSections.title ? "visible" : "hidden"}
        >
          Our Services
        </motion.h1>
      </div>

      <div className="section-wrapper">
        {/* Section 1 with 3 shapes */}
        <div className="shape shape1"></div>
        <div className="shape shape2"></div>
        <div className="shape shape3"></div>
        <motion.div
          ref={section1Ref}
          className="service-section left-image glass-effect"
          variants={sectionVariants}
          initial="hidden"
          animate={visibleSections.section1 ? "visible" : "hidden"}
        >
          <motion.div className="service-image" variants={imageVariantsLeft}>
            <img src={medCoding} alt="Medical Coding" />
          </motion.div>
          <motion.div className="service-content" variants={contentVariantsLeft}>
            <h2>Professional Medical Coding</h2>
            <p>
              We provide comprehensive medical coding solutions that bridge the gap between healthcare providers and accurate documentation. Our team of certified professionals ensures precise code assignment, maximizing reimbursement while maintaining strict compliance with industry regulations.
            </p>
            <ul>
              <li>Accurate ICD-10 and CPT coding</li>
              <li>Comprehensive documentation review</li>
              <li>Revenue optimization strategies</li>
              <li>Reduced claim rejection rates</li>
            </ul>
            <button className="learn-more-btn">Learn More</button>
          </motion.div>
        </motion.div>
      </div>

      <div className="section-wrapper">
        {/* Section 2 with 3 shapes */}
        <div className="shape shape4"></div>
        <div className="shape shape5"></div>
        <div className="shape shape6"></div>
        <motion.div
          ref={section2Ref}
          className="service-section right-image glass-effect"
          variants={sectionVariants}
          initial="hidden"
          animate={visibleSections.section2 ? "visible" : "hidden"}
        >
          <motion.div className="service-image" variants={imageVariantsRight}>
            <img src={revenue} alt="Revenue Cycle Management" />
          </motion.div>
          <motion.div className="service-content" variants={contentVariantsRight}>
            <h2>Revenue Cycle Management</h2>
            <p>
              Our advanced revenue cycle management transforms financial performance for healthcare organizations. We leverage cutting-edge technology and deep industry expertise to streamline billing processes, reduce administrative burdens, and accelerate cash flow.
            </p>
            <ul>
              <li>End-to-end billing solutions</li>
              <li>Real-time financial analytics</li>
              <li>Denial management</li>
              <li>Patient payment optimization</li>
            </ul>
            <button className="learn-more-btn">Learn More</button>
          </motion.div>
        </motion.div>
      </div>

      <div className="section-wrapper">
        {/* Section 3 with 4 shapes */}
        <div className="shape shape7"></div>
        <div className="shape shape8"></div>
        <div className="shape shape9"></div>
        <div className="shape shape10"></div>
        <motion.div
          ref={section3Ref}
          className="service-section left-image glass-effect"
          variants={sectionVariants}
          initial="hidden"
          animate={visibleSections.section3 ? "visible" : "hidden"}
        >
          <motion.div className="service-image" variants={imageVariantsLeft}>
            <img src={audit} alt="Compliance Auditing" />
          </motion.div>
          <motion.div className="service-content" variants={contentVariantsLeft}>
            <h2>Compliance Auditing</h2>
            <p>
              Our rigorous compliance auditing services provide a comprehensive review of medical coding and documentation practices. We identify potential risks, ensure regulatory adherence, and help healthcare providers maintain the highest standards of accuracy and integrity.
            </p>
            <ul>
              <li>Detailed coding audits</li>
              <li>Regulatory compliance checks</li>
              <li>Risk mitigation strategies</li>
              <li>Continuous improvement recommendations</li>
            </ul>
            <button className="learn-more-btn">Learn More</button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default OurServices;