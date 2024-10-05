import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import CanvasLoader from '../common/CanvasLoader';
import AvatarModel from './AvatarModel';

const Greeting = ({ 
  modelUrl, 
  props 
}: { modelUrl: string, props: JSX.IntrinsicElements['group'] }) => {
  return (
    <Canvas>
      <ambientLight intensity={1} />
      <OrbitControls />
      <PerspectiveCamera makeDefault position={[0, 8, 8]} fov={8} />
      <Suspense fallback={<CanvasLoader />}>
        <group {...props}>
          <AvatarModel animation="greeting" modelUrl={modelUrl} />
        </group>
      </Suspense>
    </Canvas>
  );
};

export default Greeting;
