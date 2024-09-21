import { notFound } from 'next/navigation';
import About from 'src/components/About';
import Banner from 'src/components/Banner';
import Navbar from 'src/components/NavBar';
import SocialIcons from 'src/components/SocialIcons';
import VerticalGmail from 'src/components/VerticalGmail';

interface Member {
  fullName: string;
  role: string;
  description: string;
  image: string;
  contact: {
    phone: string;
    email: string;
    skype: string;
    linkedin: string;
    github: string;
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
    description: 'Lorem ipsum dolor sit amet consectetur...',
    image: '/images/vinhdang.jpg',
    contact: {
      phone: '+84 902 818 547',
      email: 'anlalayker@gmail.com',
      skype: 'live:431e5eda01cde393',
      linkedin: 'linkedin.com/in/vinh-dang-85164b1b6',
      github: 'github.com/vinhdk',
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
    notFound();
  }

  return (
    <>
      <header className="header">
        <Navbar />
      </header>
      <main className="main">
        <Banner />
        <SocialIcons />
        <VerticalGmail />
        <About />
      </main>
    </>
  );
}
