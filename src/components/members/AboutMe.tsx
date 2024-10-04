'use client';

import dynamic from 'next/dynamic';
import Greeting from '../3D/Greeting';
import PlayingPiano from '../3D/PlayingPiano';

const Globe = dynamic(() => import('react-globe.gl'), { ssr: false });

const AboutMe = () => {
  return (
    <section className="mx-auto my-20 h-full md:w-[1000px]" id="about">
      <h2 className="numbered-heading">About Me</h2>
      <div className="grid h-full grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3 xl:grid-rows-6">
        <div className="col-span-1 xl:row-span-4">
          <div className="flex h-full w-full flex-col justify-between rounded-lg border border-secondary-dark">
            <section className="h-3/4 w-full">
              <Greeting position={[0, 0, 0]} />
            </section>
            <p className="p-6">
              Hi, it&apos;s Minh again. I have nearly 5 years of experience as a
              software engineer, along with other hobbies that are summarized in
              this portfolio. Let&apos;s explore together!
            </p>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="flex h-full w-full flex-col justify-between rounded-lg border border-secondary-dark">
            <section className="h-3/4 w-full">
              <PlayingPiano
                rotation={[0, Math.PI, 0]}
                position={[-0.5, -0.2, 0.2]}
              />
            </section>
            <p className="p-6">
              I can play the piano a little, at least enough to entertain myself
              and feel happy about it.
            </p>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="flex h-full w-full flex-col justify-between rounded-lg border border-secondary-dark">
            <div className="flex justify-center h-3/4 w-full">
              <Globe
              height={300}
              width={300}
              backgroundColor="rgba(0, 0, 0, 0)"
              showAtmosphere
              showGraticules
              globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
              bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
              labelsData={[
                {
                  lat: 40,
                  lng: -100,
                  text: 'Rjieka, Croatia',
                  color: 'white',
                  size: 15,
                },
                ]}
              />
            </div>
            <p className="p-6">
            I can play the piano a little, at least enough to entertain myself
            and feel happy about it.
            </p>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="flex h-full w-full flex-col justify-between rounded-lg border border-secondary-dark"></div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="flex h-full w-full flex-col justify-between rounded-lg border border-secondary-dark"></div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
