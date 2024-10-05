import dynamic from 'next/dynamic';
import Image from 'next/image';
import React from 'react';
import { GlobeMethods, GlobeProps } from 'react-globe.gl';

const GlobeTmpl = dynamic(
  () => import('react-globe.gl').then(mod => mod.default),
  { ssr: false }
);

const GlobeModel = React.forwardRef<GlobeMethods, GlobeProps>((props, ref) => {
  return <GlobeTmpl {...props} ref={ref as any} />;
});

GlobeModel.displayName = 'GlobeModel';

const WorldMap = () => {
  return (
    <Image
      src="/images/map.png"
      alt="world-map"
      width={310}
      height={310}
      className="w-full h-full rounded-lg"
    />
  );
};

export default WorldMap;
