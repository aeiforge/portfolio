'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="header">
      <nav className="navbar">
        <section className="navbar_logo">
          <h1>Aeiforge</h1>
        </section>
        <section className="navbar_menu desktop important">
          <ul>
            <li>
              <Link href="#about">About</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link href="#experience">Experience</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link href="#work">Work</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link href="#contact">Contact</Link>
            </li>
          </ul>
        </section>
        <section className="navbar_resume desktop important">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            Download CV
          </button>
        </section>
        <section className="navbar_hamburger">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Image
              src={isMenuOpen ? '/icons/close.svg' : '/icons/hamburger.svg'}
              alt="toggle"
              width={24}
              height={24}
            />
          </button>
        </section>
      </nav>
      {isMenuOpen && (
        <>
          <section className="navbar_menu">
            <ul>
              <li>
                <Link href="#about">About</Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link href="#experience">Experience</Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link href="#work">Work</Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link href="#contact">Contact</Link>
              </li>
            </ul>
          </section>
          <section className="navbar_resume">
            <button>Download CV</button>
          </section>
        </>
      )}
    </header>
  );
};

export default Navbar;
