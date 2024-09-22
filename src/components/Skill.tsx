'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import Image from 'next/image';

interface Skill {
  name: string;
  icon: string;
  frequency: number;
}

const skills: Skill[] = [
  { name: 'Go', icon: '/icons/go.svg', frequency: 2 },
  { name: 'Angular', icon: '/icons/angular.svg', frequency: 2 },
  { name: 'React', icon: '/icons/react.svg', frequency: 5 },
  { name: 'TypeScript', icon: '/icons/typescript.svg', frequency: 5 },
  { name: 'NextJS', icon: '/icons/nestjs.svg', frequency: 4 },
  { name: 'GraphQL', icon: '/icons/graphql.svg', frequency: 3 },
  { name: 'Javascript', icon: '/icons/javascript.svg', frequency: 5 },
  { name: 'RabbitMQ', icon: '/icons/rabbitmq.svg', frequency: 3 },
  { name: 'MongoDB', icon: '/icons/mongodb.svg', frequency: 4 },
  { name: 'Node.js', icon: '/icons/nodejs.svg', frequency: 5 },
  { name: 'Tailwind', icon: '/icons/tailwindcss.svg', frequency: 1 },
  { name: 'Docker', icon: '/icons/docker.svg', frequency: 3 },
];

const otherTechnologies = [
  'Gatsby', 'Ethereum', 'Zod', 'Mocha', 'Redux', 'PostgreSQL', 'AWS', 'Vercel', 'Netlify', 'MongoDB', 'Kotlin', 'Swift'
];

const Skill = () => {
  const containerRef = useRef(null);
  const skillsRef = useRef(null);
  const techRef = useRef(null);
  
  const containerControls = useAnimation();
  const skillsControls = useAnimation();
  const techControls = useAnimation();
  
  const containerInView = useInView(containerRef, { once: false, amount: 0.1 });
  const skillsInView = useInView(skillsRef, { once: false, amount: 0.1 });
  const techInView = useInView(techRef, { once: false, amount: 0.1 });

  useEffect(() => {
    if (containerInView) {
      containerControls.start("visible");
    } else {
      containerControls.start("hidden");
    }
  }, [containerControls, containerInView]);

  useEffect(() => {
    if (skillsInView) {
      skillsControls.start("visible");
    } else {
      skillsControls.start("hidden");
    }
  }, [skillsControls, skillsInView]);

  useEffect(() => {
    if (techInView) {
      techControls.start("visible");
    } else {
      techControls.start("hidden");
    }
  }, [techControls, techInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const skillsVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.25
      }
    }
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  const barVariants = {
    hidden: { width: 0 },
    visible: { 
      width: '100%',
      transition: {
        duration: 1.2
      }
    }
  };

  const techContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const techVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const getFrequencyText = (frequency: number) => {
    switch(frequency) {
      case 1: return 'Rarely';
      case 2: return 'Occasionally';
      case 3: return 'Sometimes';
      case 4: return 'Often';
      case 5: return 'Very Often';
      default: return 'Unknown';
    }
  };

  const getFrequencyPercentage = (frequency: number) => {
    const maxFrequency = 5;
    return (frequency / maxFrequency) * 100;
  };

  return (
    <motion.div
      id="experience"
      ref={containerRef}
      initial="hidden"
      animate={containerControls}
      variants={containerVariants}
      className="skills"
    >
      <h2 className="numbered-heading">Experience</h2>
      <motion.div
        ref={skillsRef}
        variants={skillsVariants}
        initial="hidden"
        animate={skillsControls}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {skills.map((skill, index) => (
          <motion.div 
            key={index} 
            variants={itemVariants} 
            className="bg-primary-dark border border-secondary-dark p-4 rounded-lg"
          >
            <div className="flex items-center mb-2">
              <Image src={skill.icon} alt={skill.name} width={24} height={24} className="mr-2" />
              <h3 className="text-lg font-bold text-lightest-slate">{skill.name}</h3>
            </div>
            <div className="relative pt-1">
              <div className="flex mb-2 items-center justify-between">
                <div>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-secondary-dark bg-primary-dark border border-secondary-dark">
                    {getFrequencyText(skill.frequency)}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-xs font-semibold inline-block text-secondary-dark">
                    {getFrequencyPercentage(skill.frequency).toFixed(0)}%
                  </span>
                </div>
              </div>
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-primary-dark border border-secondary-dark">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${getFrequencyPercentage(skill.frequency)}%` }}
                  transition={{ duration: 1.2 }}
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-secondary-dark"
                ></motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
      <h3 className="text-xl sm:text-2xl font-bold mt-8 mb-4 text-center text-lightest-slate">Other Technologies</h3>
      <motion.div
        ref={techRef}
        variants={techContainerVariants}
        initial="hidden"
        animate={techControls}
        className="flex flex-wrap justify-center gap-2"
      >
        {otherTechnologies.map((tech, index) => (
          <motion.span
            key={index}
            variants={techVariants}
            className="bg-secondary-dark text-primary-light px-3 py-1 rounded-full text-sm"
          >
            {tech}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Skill;