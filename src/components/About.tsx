'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          } else {
            entry.target.classList.remove('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      const animatedElements = sectionRef.current.querySelectorAll(
        '.animate-up, .animate-right'
      );
      animatedElements.forEach(el => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  const technologies = [
    'JavaScript (ES6+)',
    'TypeScript',
    'React',
    'Eleventy',
    'Node.js',
    'WordPress',
  ];

  return (
    <section ref={sectionRef} id="about" className="about">
      <h2 className="numbered-heading">About Me</h2>
      <div className="about_inner">
        <section className="about_content animate-up">
          <p>
            Hello! My name is Brittany and I enjoy creating things that live on
            the internet. My interest in web development started back in 2012
            when I decided to try editing custom Tumblr themes — turns out
            hacking together a custom reblog button taught me a lot about HTML &
            CSS!
          </p>
          <p>
            Fast-forward to today, and I've had the privilege of working at{' '}
            <span className="highlight">an advertising agency</span>,{' '}
            <span className="highlight">a start-up</span>,{' '}
            <span className="highlight">a huge corporation</span>, and{' '}
            <span className="highlight">a student-led design studio</span>. My
            main focus these days is building accessible, inclusive products and
            digital experiences at{' '}
            <span className="highlight">Upstatement</span> for a variety of
            clients.
          </p>
          <p>
            I also recently <span className="highlight">launched a course</span>{' '}
            that covers everything you need to build a web app with the Spotify
            API using Node & React.
          </p>
          <p>Here are a few technologies I've been working with recently:</p>
          <ul className="about_skills">
            {technologies.map((tech, index) => (
              <li className="highlight" key={index}>
                {tech}
              </li>
            ))}
          </ul>
        </section>
        <section className="about_image animate-right">
          <div className="about_image_wrapper">
            <Image
              src="/images/vinhdang.jpg"
              alt="Vinh's profile picture"
              width={300}
              height={300}
            />
          </div>
        </section>
      </div>
    </section>
  );
};

export default About;
