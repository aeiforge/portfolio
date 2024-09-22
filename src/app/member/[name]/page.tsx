import { notFound } from 'next/navigation';
import About from 'src/components/About';
import Banner from 'src/components/Banner';
import Navbar from 'src/components/NavBar';
import SocialIcons from 'src/components/SocialIcons';
import VerticalGmail from 'src/components/VerticalGmail';

interface SocialContact {
  name: string;
  url: string;
  icon: string;
  hide: boolean;
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
    tools: string[];
    languages: string[];
    frameworks: string[];
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
      tools: ['Git', 'Figma', 'VSCode'],
      languages: ['JavaScript', 'TypeScript'],
      frameworks: ['React', 'Next.js', 'Node.js', 'Nest.js'],
    },
  },
};

export default function MemberPage({ params }: { params: { name: string } }) {
  const memberName = params.name.toLowerCase();
  const member = members[memberName as keyof typeof members];

  if (!member) {
    return notFound();
  }

  const socialIcons = Object.entries(member.contact).reduce((acc, [key, value]) => {
    if (typeof value === 'object' && 'url' in value && !value.hide && key !== 'email') {
      acc.push({
        name: key,
        url: (value as SocialContact).url,
        icon: (value as SocialContact).icon,
      });
    }
    return acc;
  }, [] as Array<{ name: string; url: string; icon: string }>);

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
      </main>
    </>
  );
}
