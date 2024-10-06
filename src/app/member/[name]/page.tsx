'use client';

import { notFound } from 'next/navigation';
import AboutMe from 'src/components/members/AboutMe';
import Banner from 'src/components/members/Banner';
import Footer from 'src/components/members/Footer';
import Navbar from 'src/components/members/NavBar';
import SocialIcons from 'src/components/members/SocialIcons';
import Stack from 'src/components/members/Stack';
import VerticalGmail from 'src/components/members/VerticalGmail';
import WorkExperience from 'src/components/members/WorkExperience';

interface SocialContact {
  name: string;
  url: string;
  icon: string;
  hide: boolean;
}

interface MainStack {
  name: string;
  icon: string;
  frequency: number;
}

interface Member {
  fullName: string;
  role: string;
  slogan: string;
  description: string[];
  shortIntro: string;
  image: string;
  contact: {
    phone: string;
    email: SocialContact;
    instagram: SocialContact;
    skype: SocialContact;
    linkedin: SocialContact;
    github: SocialContact;
    twitter: SocialContact;
    codepen: SocialContact;
    location: string;
    status: string;
  };
  techstack: {
    mainStackList: MainStack[];
    otherStackList: string[];
    keyTechnologies: { name: string; icon: string }[];
    keyTechnologiesDescription: string;
    futureTechnologies: { name: string; icon: string }[];
    futureTechnologiesDescription: string;
  };
  modelUrl: string;
  expectations: string[];
}

const members: Record<string, Member> = {
  vinh: {
    fullName: 'Vinh Dang',
    role: 'Software Engineer',
    slogan: 'I build things for the web',
    description: [
      'Hello! My name is {highlight}Vinh Dang{/highlight} and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!',
    ],
    shortIntro:
      "I'm a fullstack developer with a passion for building web applications.",
    image: '/images/vinhdang.jpg',
    contact: {
      phone: '+84 902 818 547',
      email: {
        name: 'anlalayker@gmail.com',
        url: 'mailto:anlalayker@gmail.com',
        icon: '/icons/email.svg',
        hide: false,
      },
      instagram: {
        name: 'instagram.com/vinhdk',
        url: 'https://instagram.com/vinhdk',
        icon: '/icons/instagram.svg',
        hide: false,
      },
      skype: {
        name: 'live:431e5eda01cde393',
        url: 'skype:431e5eda01cde393',
        icon: '/icons/skype.svg',
        hide: true,
      },
      linkedin: {
        name: 'linkedin.com/in/vinh-dang-85164b1b6',
        url: 'https://linkedin.com/in/vinh-dang-85164b1b6',
        icon: '/icons/linkedin.svg',
        hide: false,
      },
      github: {
        name: 'github.com/vinhdk',
        url: 'https://github.com/vinhdk',
        icon: '/icons/github.svg',
        hide: false,
      },
      twitter: {
        name: 'twitter.com/vinhdk',
        url: 'https://twitter.com/vinhdk',
        icon: '/icons/twitter.svg',
        hide: false,
      },
      codepen: {
        name: 'codepen.io/vinhdk',
        url: 'https://codepen.io/vinhdk',
        icon: '/icons/codepen.svg',
        hide: false,
      },
      location: 'Ho Chi Minh City, Vietnam',
      status: 'Available for new projects',
    },
    techstack: {
      mainStackList: [
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
      ],
      otherStackList: [
        'Gatsby',
        'Ethereum',
        'Zod',
        'Mocha',
        'Redux',
        'PostgreSQL',
        'AWS',
        'Vercel',
        'Netlify',
        'MongoDB',
        'Kotlin',
        'Swift',
      ],
      keyTechnologies: [
        { name: 'JavaScript', icon: '/icons/javascript.svg' },
        { name: 'TypeScript', icon: '/icons/typescript.svg' },
        { name: 'Angular', icon: '/icons/angular.svg' },
        { name: 'HTML5', icon: '/icons/html5.svg' },
        { name: 'Sass', icon: '/icons/sass.svg' },
        { name: 'Tailwind', icon: '/icons/tailwindcss.svg' },
        { name: 'Nest.js', icon: '/icons/nestjs.svg' },
        { name: 'Docker', icon: '/icons/docker.svg' },
        { name: 'Kubernetes', icon: '/icons/kubernetes.svg' },
      ],
      keyTechnologiesDescription:
        'I have a strong foundation in JavaScript and TypeScript, and I am proficient in Angular, React, and Node.js. I have experience with backend development using Nestjs',
      futureTechnologies: [
        { name: 'Go', icon: '/icons/go.svg' },
        { name: 'Remix', icon: '/icons/remix.svg' },
        { name: 'Three.js', icon: '/icons/threedotjs.svg' },
      ],
      futureTechnologiesDescription:
        'I am currently learning about AI and machine learning, and I am interested in the next few months.',
    },
    modelUrl: '/models/fixed/vinh.glb',
    expectations: [
      'I am currently here looking for a {highlight}second job as a freelancer{/highlight}. Although based in Ho Chi Minh City, Vietnam, I am very flexible with {highlight}time zone communications and locations{/highlight}. Please feel free to {link}contact me{/link} if you are looking for someone who can meet your job requirements.',
    ],
  },
  minh: {
    fullName: 'Minh Vo',
    role: 'Software Engineer',
    slogan: 'Software Engineer',
    description: [
      "Hi, I'm  {highlight}Minh{/highlight}. I have nearly 5 years of experience as a {highlight}Software Engineer{/highlight} with skills across CRM, finance, blockchain, healthcare, and oil & gas. {link}Learn more!{/link}",
    ],
    shortIntro:
      "I'm a fullstack developer with a passion for building web/mobile applications.",
    image: '/images/vinhdang.jpg',
    contact: {
      phone: '+84 902 818 547',
      email: {
        name: 'anlalayker@gmail.com',
        url: 'mailto:anlalayker@gmail.com',
        icon: '/icons/email.svg',
        hide: false,
      },
      instagram: {
        name: 'instagram.com/vinhdk',
        url: 'https://instagram.com/vinhdk',
        icon: '/icons/instagram.svg',
        hide: false,
      },
      skype: {
        name: 'live:431e5eda01cde393',
        url: 'skype:431e5eda01cde393',
        icon: '/icons/skype.svg',
        hide: true,
      },
      linkedin: {
        name: 'linkedin.com/in/vinh-dang-85164b1b6',
        url: 'https://linkedin.com/in/vinh-dang-85164b1b6',
        icon: '/icons/linkedin.svg',
        hide: false,
      },
      github: {
        name: 'github.com/vinhdk',
        url: 'https://github.com/vinhdk',
        icon: '/icons/github.svg',
        hide: false,
      },
      twitter: {
        name: 'twitter.com/vinhdk',
        url: 'https://twitter.com/vinhdk',
        icon: '/icons/twitter.svg',
        hide: false,
      },
      codepen: {
        name: 'codepen.io/vinhdk',
        url: 'https://codepen.io/vinhdk',
        icon: '/icons/codepen.svg',
        hide: false,
      },
      location: 'Ho Chi Minh City, Vietnam',
      status: 'Available for new projects',
    },
    techstack: {
      mainStackList: [
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
      ],
      otherStackList: [
        'Gatsby',
        'Ethereum',
        'Zod',
        'Mocha',
        'Redux',
        'PostgreSQL',
        'AWS',
        'Vercel',
        'Netlify',
        'MongoDB',
        'Kotlin',
        'Swift',
      ],
      keyTechnologies: [
        { name: 'JavaScript', icon: '/icons/javascript.svg' },
        { name: 'TypeScript', icon: '/icons/typescript.svg' },
        { name: 'Angular', icon: '/icons/angular.svg' },
        { name: 'HTML5', icon: '/icons/html5.svg' },
        { name: 'Sass', icon: '/icons/sass.svg' },
        { name: 'Tailwind', icon: '/icons/tailwindcss.svg' },
        { name: 'Nest.js', icon: '/icons/nestjs.svg' },
        { name: 'Docker', icon: '/icons/docker.svg' },
        { name: 'Kubernetes', icon: '/icons/kubernetes.svg' },
      ],
      keyTechnologiesDescription:
        "These are the key tech stacks I've {highlight}frequently used{/highlight} during project development. {link}Learn more!{/link}",
      futureTechnologies: [
        { name: 'Go', icon: '/icons/go.svg' },
        { name: 'Remix', icon: '/icons/remix.svg' },
        { name: 'Three.js', icon: '/icons/threedotjs.svg' },
      ],
      futureTechnologiesDescription:
        "These are the key tech stacks I'm {highlight}currently learning{/highlight} and {highlight}interested in{/highlight} the next few months.",
    },
    modelUrl: '/models/fixed/minh.glb',
    expectations: [
      'I am currently here looking for a {highlight}second job as a freelancer{/highlight}. Although based in Ho Chi Minh City, Vietnam, I am very flexible with {highlight}time zone communications and locations{/highlight}. Please feel free to {link}contact me{/link} if you are looking for someone who can meet your job requirements.',
    ],
  },
};

const jobs = [
  {
    companyLogo: '/icons/upwork.svg',
    companyName: 'Upwork',
    position: 'Senior Software Engineering',
    duration: '8/2022 - Present',
    description: [
      'Lorem ipsum dolor sit amet consectetur. Massa in nec arcu volutpat purus porttitor urna feugiat. Pellentesque elementum placerat malesuada in amet ipsum porta.',
      'Id id lectus odio dictum elementum id quis nunc nunc. Pellentesque imperdiet morbi adipiscing orci. Placerat amet ac augue viverra.',
      'Lorem ipsum dolor sit amet consectetur. Massa in nec arcu volutpat purus porttitor urna feugiat. Pellentesque elementum placerat malesuada in amet ipsum porta.',
    ],
    link: '#',
  },
  {
    companyLogo: '/icons/upwork.svg',
    companyName: 'Upwork',
    position: 'Senior Software Engineering',
    duration: '8/2022 - Present',
    description: [
      'Lorem ipsum dolor sit amet consectetur. Massa in nec arcu volutpat purus porttitor urna feugiat. Pellentesque elementum placerat malesuada in amet ipsum porta.',
      'Id id lectus odio dictum elementum id quis nunc nunc. Pellentesque imperdiet morbi adipiscing orci. Placerat amet ac augue viverra.',
      'Lorem ipsum dolor sit amet consectetur. Massa in nec arcu volutpat purus porttitor urna feugiat. Pellentesque elementum placerat malesuada in amet ipsum porta.',
    ],
    link: '#',
  },
  {
    companyLogo: '/icons/upwork.svg',
    companyName: 'Upwork',
    position: 'Senior Software Engineering',
    duration: '8/2022 - Present',
    description: [
      'Lorem ipsum dolor sit amet consectetur. Massa in nec arcu volutpat purus porttitor urna feugiat. Pellentesque elementum placerat malesuada in amet ipsum porta.',
      'Id id lectus odio dictum elementum id quis nunc nunc. Pellentesque imperdiet morbi adipiscing orci. Placerat amet ac augue viverra.',
      'Lorem ipsum dolor sit amet consectetur. Massa in nec arcu volutpat purus porttitor urna feugiat. Pellentesque elementum placerat malesuada in amet ipsum porta.',
    ],
    link: '#',
  },
  {
    companyLogo: '/icons/upwork.svg',
    companyName: 'Upwork',
    position: 'Senior Software Engineering',
    duration: '8/2022 - Present',
    description: [
      'Lorem ipsum dolor sit amet consectetur. Massa in nec arcu volutpat purus porttitor urna feugiat. Pellentesque elementum placerat malesuada in amet ipsum porta.',
      'Id id lectus odio dictum elementum id quis nunc nunc. Pellentesque imperdiet morbi adipiscing orci. Placerat amet ac augue viverra.',
      'Lorem ipsum dolor sit amet consectetur. Massa in nec arcu volutpat purus porttitor urna feugiat. Pellentesque elementum placerat malesuada in amet ipsum porta.',
    ],
    link: '#',
  },
  {
    companyLogo: '/icons/upwork.svg',
    companyName: 'Upwork',
    position: 'Senior Software Engineering',
    duration: '8/2022 - Present',
    description: [
      'Lorem ipsum dolor sit amet consectetur. Massa in nec arcu volutpat purus porttitor urna feugiat. Pellentesque elementum placerat malesuada in amet ipsum porta.',
      'Id id lectus odio dictum elementum id quis nunc nunc. Pellentesque imperdiet morbi adipiscing orci. Placerat amet ac augue viverra.',
      'Lorem ipsum dolor sit amet consectetur. Massa in nec arcu volutpat purus porttitor urna feugiat. Pellentesque elementum placerat malesuada in amet ipsum porta.',
    ],
    link: '#',
  },
];

export default function MemberPage({ params }: { params: { name: string } }) {
  const memberName = params.name.toLowerCase();
  const member = members[memberName as keyof typeof members];

  if (!member) {
    return notFound();
  }

  const socialIcons = Object.entries(member.contact).reduce(
    (acc, [key, value]) => {
      if (
        typeof value === 'object' &&
        'url' in value &&
        !value.hide &&
        key !== 'email'
      ) {
        acc.push({
          name: key,
          url: (value as SocialContact).url,
          icon: (value as SocialContact).icon,
        });
      }
      return acc;
    },
    [] as Array<{ name: string; url: string; icon: string }>
  );

  const linkProps = {
    'Learn more!': {
      href: '#work-experience',
    },
    'contact me': {
      href: '#work-experience',
    },
  };

  return (
    <>
      <Navbar />
      <main className="main">
        <Banner
          name={member.fullName}
          role={member.role}
          shortIntro={member.shortIntro}
          location={member.contact.location}
          status={member.contact.status}
          modelUrl={member.modelUrl}
        />
        <SocialIcons socials={socialIcons} />
        <VerticalGmail email={member.contact.email.name} />
        <AboutMe
          modelUrl={member.modelUrl}
          description={member.description}
          keyTechnologies={member.techstack.keyTechnologies}
          expectations={member.expectations}
          futureTechnologies={member.techstack.futureTechnologies}
          linkProps={linkProps}
          keyTechnologiesDescription={
            member.techstack.keyTechnologiesDescription
          }
          futureTechnologiesDescription={
            member.techstack.futureTechnologiesDescription
          }
        />
        <Stack
          stacks={member.techstack.mainStackList}
          otherStacks={member.techstack.otherStackList}
        />
        <WorkExperience jobs={jobs} />
        <Footer />
      </main>
    </>
  );
}
