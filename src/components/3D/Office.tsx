'use client';

import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { AvatarModel } from "./Avatar";
import WorkSpaceModel from "./WorkSpace";
const Office = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.1} />
      <OrbitControls />
      <group>
        <AvatarModel />
        <WorkSpaceModel />
      </group>
    </Canvas>
  )
}

export default Office;