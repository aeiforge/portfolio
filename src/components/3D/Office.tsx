'use client';

import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { ImacModel } from "./Imac";
import { DesktopModel } from "./Desktop";
import { AvatarModel } from "./Avatar";
import WorkSpaceModel from "./WorkSpace";
const Office = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <OrbitControls />
      <group>
        <AvatarModel />
        <WorkSpaceModel />
      </group>
    </Canvas>
  )
}

export default Office;