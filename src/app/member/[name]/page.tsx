import { notFound } from 'next/navigation';
import About from 'src/components/About';
import Banner from 'src/components/Banner';
import Navbar from 'src/components/NavBar';
import SocialIcons from 'src/components/SocialIcons';
import Stack from 'src/components/Stack';
import VerticalGmail from 'src/components/VerticalGmail';
import WorkExperience from 'src/components/WorkExperience';

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
  description: string;
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
  };
}

const members: Record<string, Member> = {
  vinh: {
    fullName: 'Vinh Dang',
    role: 'FULLSTACK JAVASCRIPT/TYPESCRIPT',
    slogan: 'I build things for the web',
    description: 'Lorem ipsum dolor sit amet consectetur...',
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
    },
  },
};

const jobs = [
  {
    companyLogo: '/images/upwork-logo.png',
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
    companyLogo: '/images/upwork-logo.png',
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
    companyLogo: '/images/upwork-logo.png',
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
    companyLogo: '/images/upwork-logo.png',
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
    companyLogo: '/images/upwork-logo.png',
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

  return (
    <>
      <header className="header">
        <Navbar />
      </header>
      <main className="main">
        <Banner
          name={member.fullName}
          slogan={member.slogan}
          shortIntro={member.description}
          location={member.contact.location}
          status={member.contact.status}
        />
        <SocialIcons socials={socialIcons} />
        <VerticalGmail email={member.contact.email.name} />
        <About />
        <Stack
          stacks={member.techstack.mainStackList}
          otherStacks={member.techstack.otherStackList}
        />
        <WorkExperience jobs={jobs} />
      </main>
    </>
  );
}
