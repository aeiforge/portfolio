'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

const About = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Kích hoạt animation cho các phần tử con
          if (contentRef.current) contentRef.current.classList.add('is-visible');
          if (imageRef.current) imageRef.current.classList.add('is-visible');
        } else {
          // Reset animation khi section không còn trong viewport
          if (contentRef.current) contentRef.current.classList.remove('is-visible');
          if (imageRef.current) imageRef.current.classList.remove('is-visible');
        }
      });
    }, { threshold: 0.1 });

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const technologies = [
    'JavaScript (ES6+)',
    'TypeScript',
    'React',
    'Eleventy',
    'Node.js',
    'WordPress'
  ];

  return (
    <section ref={sectionRef} id="about" className="about">
      <h2 className="numbered-heading">About Me</h2>
      <div className="inner">
        <div ref={contentRef} className="about-content animate-up">
          <div>
            <p>
              Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
            </p>
            <p>
              Fast-forward to today, and I've had the privilege of working at <span className="highlight">an advertising agency</span>, <span className="highlight">a start-up</span>, <span className="highlight">a huge corporation</span>, and <span className="highlight">a student-led design studio</span>. My main focus these days is building accessible, inclusive products and digital experiences at <span className="highlight">Upstatement</span> for a variety of clients.
            </p>
            <p>
              I also recently <span className="highlight">launched a course</span> that covers everything you need to build a web app with the Spotify API using Node & React.
            </p>
            <p>Here are a few technologies I've been working with recently:</p>
            <ul className="skills-list">
              {technologies.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </div>
        </div>
        <div ref={imageRef} className="about-image animate-right">
          <div className="wrapper">
            <div className="image-container">
              <Image
                src="/images/vinhdang.jpg"
                alt="Vinh's profile picture"
                width={300}
                height={300}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;