import { OrbitControls } from "@react-three/drei";
import AvatarModel from "./AvatarModel";
import { Canvas } from "@react-three/fiber";

const Laying = () => {
  return (
    <Canvas>
      <ambientLight />
      <OrbitControls />
      <pointLight position={[10, 10, 10]} />
      <AvatarModel animation="laying" />
    </Canvas>
  );
};

export default Laying;
