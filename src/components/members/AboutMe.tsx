'use client';

import { motion, useAnimation, useInView } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import Greeting from '../3D/Greeting';
import Laying from '../3D/Laying';
import WorldMap from '../3D/WorldMap';

const AboutMe = ({ modelUrl }: { modelUrl: string }) => {
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

  const keyTechnologies = [
    { name: 'JavaScript', icon: '/icons/javascript.svg' },
    { name: 'TypeScript', icon: '/icons/typescript.svg' },
    { name: 'Angular', icon: '/icons/angular.svg' },
    { name: 'HTML5', icon: '/icons/html5.svg' },
    { name: 'Sass', icon: '/icons/sass.svg' },
    { name: 'Tailwind', icon: '/icons/tailwindcss.svg' },
    { name: 'Nest.js', icon: '/icons/nestjs.svg' },
    { name: 'Docker', icon: '/icons/docker.svg' },
    { name: 'Kubernetes', icon: '/icons/kubernetes.svg' },
  ];

  const futureTechnologies = [
    { name: 'Go', icon: '/icons/go.svg' },
    { name: 'Remix', icon: '/icons/remix.svg' },
    { name: 'Three.js', icon: '/icons/threedotjs.svg' },
  ];

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
      className="mx-auto my-20 h-full md:w-[1000px]"
      id="about">
      <h2 className="numbered-heading">About Me</h2>
      <div className="grid h-full grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3 xl:grid-rows-6">
        <motion.div
          className="col-span-1 xl:row-span-2"
          variants={itemVariants}>
          <div className="flex h-full w-full flex-col justify-between rounded-lg border border-secondary-dark">
            <div className="flex h-full w-full justify-center">
              <WorldMap />
            </div>
          </div>
        </motion.div>

        <motion.div
          className="col-span-1 xl:row-span-3"
          variants={itemVariants}>
          <div className="flex h-full w-full flex-col justify-between rounded-lg border border-secondary-dark">
            <section className="h-3/4 w-full">
              <div className="grid grid-cols-3 gap-4 p-6">
                {keyTechnologies.map((tech, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <Image
                      src={tech.icon}
                      alt={tech.name}
                      width={40}
                      height={40}
                    />
                    <span className="mt-2 text-sm">{tech.name}</span>
                  </div>
                ))}
              </div>
            </section>
            <p className="p-6">
              These are the key tech stacks I've frequently used during project
              development. Learn more here.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="col-span-1 xl:row-span-3"
          variants={itemVariants}>
          <div className="flex h-full w-full flex-col justify-between rounded-lg border border-secondary-dark">
            <section className="h-3/4 w-full">
              <div className="grid grid-cols-3 gap-4 p-6">
                {futureTechnologies.map((tech, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <Image
                      src={tech.icon}
                      alt={tech.name}
                      width={40}
                      height={40}
                    />
                    <span className="mt-2 text-sm">{tech.name}</span>
                  </div>
                ))}
              </div>
            </section>
            <p className="p-6">
              These are the key tech stacks I'm currently learning and
              interested in the next few months.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="xl:col-span-1 xl:row-span-4"
          variants={itemVariants}>
          <div className="flex h-full w-full flex-col justify-between rounded-lg border border-secondary-dark">
            <section className="h-3/4 w-full">
              {showModel && <Greeting position={[0, 0, 0]} modelUrl={modelUrl}/>}
            </section>
            <p className="p-6">
              Hi, I'm Minh. I have nearly 5 years of experience as a software
              engineer with skills across CRM, finance, blockchain, healthcare,
              and oil and gas. Learn more here!
            </p>
          </div>
        </motion.div>

        <motion.div
          className="xl:col-span-2 xl:row-span-3"
          variants={itemVariants}>
          <div className="flex h-full w-full flex-col justify-between rounded-lg border border-secondary-dark">
            <section className="h-3/4 w-full">
              {showModel && <Laying position={[-0.8, 2, 0.2]} scale={2.5} modelUrl={modelUrl} />}
            </section>
            <p className="p-6">
              I am currently here looking for a second job as a freelancer.
              Although based in Ho Chi Minh City, Vietnam, I am very flexible
              with time zone communications and locations. Please feel free to
              contact me if you are looking for someone who can meet your job
              requirements.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutMe;
