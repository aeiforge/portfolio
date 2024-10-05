'use client';

import Greeting from '../3D/Greeting';
import WorldMap from '../3D/WorldMap';

const AboutMe = () => {
  return (
    <section className="mx-auto my-20 h-full md:w-[1000px]" id="about">
      <h2 className="numbered-heading">About Me</h2>
      <div className="grid h-full grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3 xl:grid-rows-6">
        <div className="col-span-1 xl:row-span-2">
          <div className="flex h-full w-full flex-col justify-between rounded-lg border border-secondary-dark">
            <div className="flex h-full w-full justify-center">
              <WorldMap />
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="flex h-full w-full flex-col justify-between rounded-lg border border-secondary-dark">
            <section className="h-3/4 w-full"></section>
            <p className="p-6">
              I can play the piano a little, at least enough to entertain myself
              and feel happy about it.
            </p>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="flex h-full w-full flex-col justify-between rounded-lg border border-secondary-dark">
            <p className="p-6">
              I can play the piano a little, at least enough to entertain myself
              and feel happy about it.
            </p>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-4">
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

        <div className="xl:col-span-2 xl:row-span-2">
          <div className="flex h-full w-full flex-col justify-between rounded-lg border border-secondary-dark">
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
