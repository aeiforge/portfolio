'use client';

import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense, useRef } from 'react';
import CanvasLoader from '../common/CanvasLoader';
import AvatarModel from './AvatarModel';
import WorkSpaceModel from './WorkSpaceModel';

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
      <Suspense fallback={<CanvasLoader />}>
        <group position={[-0.5, 0.8, 1]} rotation-y={Math.PI} scale={1}>
          <AvatarModel animation="typing" scale={0.8} />
          <WorkSpaceModel />
        </group>
      </Suspense>
    </Canvas>
  );
};

export default Office;
