'use client';

import {
  OrbitControls,
  useAnimations,
  useFBX,
  useGLTF
} from '@react-three/drei';
import { Canvas, useFrame, useGraph } from '@react-three/fiber';
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTF, SkeletonUtils } from 'three-stdlib';

type GLTFAction = {
  name: string;
  keys: {
    time: number;
    value: THREE.Vector3 | THREE.Quaternion | THREE.Vector4;
  }[];
};

type GLTFResult = GLTF & {
  nodes: {
    Wolf3D_Hair: THREE.SkinnedMesh;
    Wolf3D_Glasses: THREE.SkinnedMesh;
    Wolf3D_Body: THREE.SkinnedMesh;
    Wolf3D_Outfit_Bottom: THREE.SkinnedMesh;
    Wolf3D_Outfit_Footwear: THREE.SkinnedMesh;
    Wolf3D_Outfit_Top: THREE.SkinnedMesh;
    EyeLeft: THREE.SkinnedMesh;
    EyeRight: THREE.SkinnedMesh;
    Wolf3D_Head: THREE.SkinnedMesh;
    Wolf3D_Teeth: THREE.SkinnedMesh;
    Hips: THREE.Bone;
  };
  materials: {
    Wolf3D_Hair: THREE.MeshStandardMaterial;
    Wolf3D_Glasses: THREE.MeshStandardMaterial;
    Wolf3D_Body: THREE.MeshStandardMaterial;
    Wolf3D_Outfit_Bottom: THREE.MeshStandardMaterial;
    Wolf3D_Outfit_Footwear: THREE.MeshStandardMaterial;
    Wolf3D_Outfit_Top: THREE.MeshStandardMaterial;
    Wolf3D_Eye: THREE.MeshStandardMaterial;
    Wolf3D_Skin: THREE.MeshStandardMaterial;
    Wolf3D_Teeth: THREE.MeshStandardMaterial;
  };
  animations: GLTFAction[];
};

const Avatar: React.FC<JSX.IntrinsicElements['group']> = props => {
  return (
    <Canvas shadows camera={{ position: [0, 1, 5], fov: 30 }}>
      <ambientLight intensity={1.5} />
      <OrbitControls />
      <group position-y={-1} rotation-x={-Math.PI / 2}>
        <AvatarModel {...props} />
      </group>
    </Canvas>
  );
};

export const AvatarModel: React.FC<JSX.IntrinsicElements['group']> = props => {
  const group = useRef<THREE.Group>(null);
  const { scene } = useGLTF('/models/fixed/minh_normal.glb') as GLTFResult;
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { nodes, materials } = useGraph(clone) as GLTFResult;

  const { animations: typingAnimation } = useFBX(
    '/models/animations/minh_typing.fbx'
  );

  typingAnimation[0].name = 'typing';
  const { actions } = useAnimations(typingAnimation, group);

  useFrame(state => {
    // group.current?.getObjectByName('Head')?.lookAt(state.camera.position);
    // console.log(group.current?.getObjectByName(''))
  });

  useEffect(() => {
    actions['typing']?.reset()?.play();
  }, []);

  return (
    <group position-y={-1} rotation-x={-Math.PI / 2} position={[0, 0, 0]} scale={0.8}>
      <group {...props} ref={group} dispose={null}>
        <ambientLight intensity={1.5} />
        <primitive object={nodes.Hips} />
        <skinnedMesh
          geometry={nodes.Wolf3D_Hair.geometry}
          material={materials.Wolf3D_Hair}
          skeleton={nodes.Wolf3D_Hair.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Glasses.geometry}
          material={materials.Wolf3D_Glasses}
          skeleton={nodes.Wolf3D_Glasses.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Body.geometry}
          material={materials.Wolf3D_Body}
          skeleton={nodes.Wolf3D_Body.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
          material={materials.Wolf3D_Outfit_Bottom}
          skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
          material={materials.Wolf3D_Outfit_Footwear}
          skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Outfit_Top.geometry}
          material={materials.Wolf3D_Outfit_Top}
          skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
        />
        <skinnedMesh
          name="EyeLeft"
          geometry={nodes.EyeLeft.geometry}
          material={materials.Wolf3D_Eye}
          skeleton={nodes.EyeLeft.skeleton}
          morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
          morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
        />
        <skinnedMesh
          name="EyeRight"
          geometry={nodes.EyeRight.geometry}
          material={materials.Wolf3D_Eye}
          skeleton={nodes.EyeRight.skeleton}
          morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
          morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
        />
        <skinnedMesh
          name="Wolf3D_Head"
          geometry={nodes.Wolf3D_Head.geometry}
          material={materials.Wolf3D_Skin}
          skeleton={nodes.Wolf3D_Head.skeleton}
          morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
          morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
        />
        <skinnedMesh
          name="Wolf3D_Teeth"
          geometry={nodes.Wolf3D_Teeth.geometry}
          material={materials.Wolf3D_Teeth}
          skeleton={nodes.Wolf3D_Teeth.skeleton}
          morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
          morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
        />
      </group>
    </group>
  );
};

useGLTF.preload('/models/fixed/minh_normal.glb');

export default Avatar;
