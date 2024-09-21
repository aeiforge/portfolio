import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const SocialIcons = () => {
  const icons = [
    { name: 'github', url: 'https://github.com/yourusername' },
    { name: 'instagram', url: 'https://instagram.com/yourusername' },
    { name: 'twitter', url: 'https://twitter.com/yourusername' },
    { name: 'linkedin', url: 'https://twitter.com/yourusername' },
    { name: 'codepen', url: 'https://twitter.com/yourusername' },
  ];

  return (
    <section className="social-icons">
      {icons.map((icon) => (
        <Link key={icon.name} href={icon.url} target="_blank" rel="noopener noreferrer" className="social-icon_wrapper">
          <Image
            src={`/icons/${icon.name}.svg`}
            alt={`${icon.name} icon`}
            width={20}
            height={20}
            className="social-icon transition-all duration-300"
          />
        </Link>
      ))}
      <div className="w-px h-24 bg-slate"></div>
    </section>
  );
};

export default SocialIcons;