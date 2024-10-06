'use client';

import { motion, useAnimation, useInView } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import renderDescription from 'src/utils/common';
import Greeting from '../3D/Greeting';
import Laying from '../3D/Laying';
import WorldMap from '../3D/WorldMap';

type AboutMeProps = {
  modelUrl: string;
  description: string[];
  expectations: string[];
  keyTechnologies: { name: string; icon: string }[];
  keyTechnologiesDescription: string;
  futureTechnologies: { name: string; icon: string }[];
  futureTechnologiesDescription: string;
  linkProps: Record<string, { href: string }>;
};

const AboutMe = ({
  modelUrl,
  description,
  expectations,
  keyTechnologies,
  keyTechnologiesDescription,
  futureTechnologies,
  futureTechnologiesDescription,
  linkProps,
}: AboutMeProps) => {
  const containerRef = useRef(null);
  const containerControls = useAnimation();
  const containerInView = useInView(containerRef, { once: false, amount: 0.1 });

  useEffect(() => {
    if (containerInView) {
      containerControls.start('visible');
    } else {
      containerControls.start('hidden');
    }
  }, [containerControls, containerInView]);

  const [showModel, setShowModel] = useState(false);

  useEffect(() => {
    if (containerInView) {
      const timer = setTimeout(() => setShowModel(true), 100);
      return () => clearTimeout(timer);
    } else {
      setShowModel(false);
    }
  }, [containerInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.3, delayChildren: 0.1, staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.section
      ref={containerRef}
      initial="hidden"
      animate={containerControls}
      variants={containerVariants}
      className="about"
      id="about">
      <h2 className="numbered-heading">About Me</h2>
      <section className="about_container">
        <motion.section className="about_world-map" variants={itemVariants}>
          <WorldMap />
        </motion.section>

        <motion.section className="about_technologies" variants={itemVariants}>
          <section className="key-technologies">
            {keyTechnologies.map((tech, index) => (
              <div key={index} className="key-technologies_icon">
                <Image src={tech.icon} alt={tech.name} width={40} height={40} />
                <span className="key-technologies_icon-name">{tech.name}</span>
              </div>
            ))}
          </section>
          <p className="p-6" key={0}>
            {renderDescription(keyTechnologiesDescription, linkProps)}
          </p>
        </motion.section>

        <motion.section className="about_technologies" variants={itemVariants}>
          <section className="future-technologies">
            {futureTechnologies.map((tech, index) => (
              <div key={index} className="future-technologies_icon">
                <Image src={tech.icon} alt={tech.name} width={40} height={40} />
                <span className="future-technologies_icon-name">
                  {tech.name}
                </span>
              </div>
            ))}
          </section>
          <p className="p-6" key={0}>
            {renderDescription(futureTechnologiesDescription, linkProps)}
          </p>
        </motion.section>

        <motion.section className="about_greeting" variants={itemVariants}>
          <section className="about_greeting_model">
            {showModel && <Greeting position={[0, 0, 0]} modelUrl={modelUrl} />}
          </section>
          {description.map((paragraph, index) => (
            <p className="p-6" key={index}>
              {renderDescription(paragraph, linkProps)}
            </p>
          ))}
        </motion.section>

        <motion.section className="about_expectations" variants={itemVariants}>
          <section className="about_expectations_model">
            {showModel && (
              <Laying
                position={[-0.8, 2, 0.2]}
                scale={2.5}
                modelUrl={modelUrl}
              />
            )}
          </section>
          {expectations.map((paragraph, index) => (
            <p className="p-6" key={index}>
              {renderDescription(paragraph, linkProps)}
            </p>
          ))}
        </motion.section>
      </section>
    </motion.section>
  );
};

export default AboutMe;
