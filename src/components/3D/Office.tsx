'use client';

import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useRef } from 'react';
import { AvatarModel } from './Avatar';
import WorkSpaceModel from './WorkSpace';

const Office = () => {
  const controlsRef = useRef(null);

  return (
    <Canvas>
      <PerspectiveCamera makeDefault position={[-3, 1.5, 2]} />
      <ambientLight intensity={0.1} />
      <OrbitControls
        ref={controlsRef}
        enablePan={false}
        enableRotate={false}
        minDistance={2}
        maxDistance={10}
      />
      <group position={[-0.5, 0.8, 1]} rotation-y={Math.PI} scale={1.1}>
        <AvatarModel />
        <WorkSpaceModel />
      </group>
    </Canvas>
  );
};

export default Office;
