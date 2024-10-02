import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import AvatarModel from './Avatar';

const Greeting = (props: JSX.IntrinsicElements['group']) => {
  return (
    <Canvas>
      <ambientLight intensity={1} />
      <OrbitControls />
      <PerspectiveCamera makeDefault position={[0, 8, 8]} fov={8}/>
      <group {...props}>
        <AvatarModel animation="greeting" />
      </group>
    </Canvas>
  );
};

export default Greeting;
