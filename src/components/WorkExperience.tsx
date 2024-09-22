import React from 'react';
import Image from 'next/image';

interface Job {
  companyLogo: string;
  companyName: string;
  position: string;
  duration: string;
  description: string[];
  link: string;
}

interface WorkExperienceProps {
  jobs: Job[];
}

const WorkExperience: React.FC<WorkExperienceProps> = ({ jobs }) => {
  return (
    <section className="work-experience">
      <h2 className="numbered-heading">Where I've Worked</h2>
      <div className="work-experience__container">
        {jobs.map((job, index) => (
          <div key={index} className="work-experience__item">
            <div className="work-experience__left">
              <Image src={job.companyLogo} alt={job.companyName} width={100} height={30} className="work-experience__logo" />
              <h3 className="work-experience__company">{job.companyName}</h3>
              <p className="work-experience__duration">{job.duration}</p>
            </div>
            <div className="work-experience__right">
              <h4 className="work-experience__position">{job.position}</h4>
              <ul className="work-experience__description">
                {job.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              <a href={job.link} className="work-experience__link">Link here</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;