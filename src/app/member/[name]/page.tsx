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
      phone: '+84 344 239 428',
      email: {
        name: 'dev.minhvo@gmail.com',
        url: 'mailto:dev.minhvo@gmail.com',
        icon: '/icons/email.svg',
        hide: false,
      },
      instagram: {
        name: 'instagram.com/mmiinn.06',
        url: 'https://www.instagram.com/mmiinn.06/',
        icon: '/icons/instagram.svg',
        hide: false,
      },
      skype: {
        name: 'live:.cid.a2a8e4905c051bfa',
        url: 'https://join.skype.com/invite/vScj21vZxsI1',
        icon: '/icons/skype.svg',
        hide: false,
      },
      linkedin: {
        name: 'https://www.linkedin.com/in/minh-vo-515986245/',
        url: 'https://www.linkedin.com/in/minh-vo-515986245/',
        icon: '/icons/linkedin.svg',
        hide: false,
      },
      github: {
        name: 'github.com/aeiforge',
        url: 'https://github.com/aeiforge',
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
        hide: true,
      },
      location: 'Ho Chi Minh City, Vietnam',
      status: 'Available for new projects',
    },
    techstack: {
      mainStackList: [
        { name: 'HTML5', icon: '/icons/html5.svg', frequency: 5 },
        { name: 'Sass', icon: '/icons/sass.svg', frequency: 5 },
        { name: 'Tailwind', icon: '/icons/tailwindcss.svg', frequency: 4 },
        { name: 'TypeScript', icon: '/icons/typescript.svg', frequency: 5 },
        { name: 'JavaScript', icon: '/icons/javascript.svg', frequency: 4 },
        { name: 'Angular', icon: '/icons/angular.svg', frequency: 5 },
        { name: 'Ngrx', icon: '/icons/ngrx.svg', frequency: 5 },
        { name: 'Rxjs', icon: '/icons/reactivex.svg', frequency: 5 },
        { name: 'React', icon: '/icons/react.svg', frequency: 3 },
        { name: 'NextJS', icon: '/icons/nestjs.svg', frequency: 2 },
        { name: 'ThreeJS', icon: '/icons/threedotjs.svg', frequency: 2 },
        { name: 'NodeJS', icon: '/icons/nodejs.svg', frequency: 4 },
        { name: 'GraphQL', icon: '/icons/graphql.svg', frequency: 3 },
        { name: 'MongoDB', icon: '/icons/mongodb.svg', frequency: 3 },
        { name: 'PostgreSQL', icon: '/icons/postgresql.svg', frequency: 5 },
      ],
      otherStackList: [
        'Docker',
        'Kubernetes',
        'AWS',
        'Azure',
        'Kafka',
        'RabbitMQ',
        'Go',
        'Zod',
        'Redux',
        'PostgreSQL',
        'Vercel',
        'Netlify',
        'Material UI',
        'PrimeNG',
        'Ant Design',
        'Webpack',
        'Remix',
        'Vite',
        'Babel',
        'Jest',
        'Storybook',
        'Lerna',
        'Nx',
      ],
      keyTechnologies: [
        { name: 'JavaScript', icon: '/icons/javascript.svg' },
        { name: 'TypeScript', icon: '/icons/typescript.svg' },
        { name: 'Angular', icon: '/icons/angular.svg' },
        { name: 'Nest.js', icon: '/icons/nestjs.svg' },
        { name: 'Ngrx', icon: '/icons/ngrx.svg' },
        { name: 'Rxjs', icon: '/icons/reactivex.svg' },
        { name: 'HTML5', icon: '/icons/html5.svg' },
        { name: 'Sass', icon: '/icons/sass.svg' },
        { name: 'Tailwind', icon: '/icons/tailwindcss.svg' },
      ],
      keyTechnologiesDescription:
        "These are the key tech stacks I've {highlight}frequently used{/highlight} during project development. {link}Learn more!{/link}",
      futureTechnologies: [
        { name: 'Go', icon: '/icons/go.svg' },
        { name: 'Gin', icon: '/icons/gin.svg' },
        { name: 'Deno', icon: '/icons/deno.svg' },
        { name: 'Remix', icon: '/icons/remix.svg' },
        { name: 'Three.js', icon: '/icons/threedotjs.svg' },
        { name: 'Lambda', icon: '/icons/awslambda.svg' },
        { name: 'Lerna', icon: '/icons/lerna.svg' },
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
