'use client';

import { useState } from 'react';

const Banner = () => {
  const [isBannerOpen, setIsBannerOpen] = useState(true);

  return (
    <section className="banner">
      <span className="banner_greeting">Hi, my name is</span>
      <h2 className="banner_name">Vinh Nguyen <span className="waving-hand">👋</span></h2>
      <h3 className="banner_sologan">I build things for the Web.</h3>
      <p className="banner_short-intro">
        I'm a full stack developer (React.js & Node.js) with a focus on creating
        (and occasionally designing) exceptional digital experiences that are
        fast, accessible, visually appealing, and responsive. Even though I have
        been creating web applications for over 7 years, I still love it as if
        it was something new.
      </p>
      <section className="banner_info">
        <section className="banner_location">
          <div className="banner_location-icon">
            <svg
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <span>Ho Chi Minh City, Vietnam</span>
        </section>
        <section className="banner_status">
          <div className="banner_status-icon">
            <span className="banner_status-icon-dot"></span>
          </div>
          <span>Available for new projects</span>
        </section>
      </section>
    </section>
  );
};

export default Banner;

{
  /* <div className="mt-8 md:mt-0 md:flex md:w-1/2 md:justify-end">
<div className="relative">
  <div className="relative z-10 h-64 w-64 overflow-hidden rounded-3xl md:h-96 md:w-96">
    <Image
      src="/images/vinh.jpg"
      alt="Vinh's profile picture"
      layout="fill"
      objectFit="cover"
    />
  </div>
  <div className="absolute left-4 top-4 h-64 w-64 rounded-3xl bg-gray-700 md:-left-4 md:h-96 md:w-96"></div>
</div>
</div> */
}
