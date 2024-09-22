import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer footer--bordered">
      <div className="footer__container">
        <p className="footer__tech-stack">
          Built with Nx, TypeScript, React.js, TailwindCSS, Framer Motion,
          Figma, and Vercel.
        </p>
        <Link
          href="https://github.com/your-repo-link"
          target="_blank"
          rel="noopener noreferrer"
          className="footer__github-link">
          Star this project on Github{' '}
          <Image
            src="/icons/github.svg"
            alt="Github icon"
            width={20}
            height={20}
            className="footer__github-icon"
          />
        </Link>
        <p className="footer__copyright">© Quiet Node 2024</p>
        <p className="footer__language">
          <span className="footer__flag">🇻🇳</span> Vietnamese{' '}
          <span className="footer__flag">🇻🇳</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;