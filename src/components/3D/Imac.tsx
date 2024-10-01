'use client';

import * as THREE from 'three';
import React from 'react';
import { PerspectiveCamera, useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';

type GLTFAction = {
  name: string
  action: {
    CLIP: THREE.AnimationClip
  }
}

type GLTFResult = GLTF & {
  nodes: {
    Screen_DarkBlue_0: THREE.Mesh
    Screen_LightBlue_0: THREE.Mesh
    Screen_Black_0: THREE.Mesh
    Screen_White_0: THREE.Mesh
    Screen_Screen_0: THREE.Mesh
    Screen_Chrome_0: THREE.Mesh
    Screen_CamBlack_0: THREE.Mesh
    Screen_Lens_0: THREE.Mesh
    Screen_Glass_0: THREE.Mesh
    Screen_Black001_0: THREE.Mesh
    Screen_Yellow_0: THREE.Mesh
    Rotate_Metal_0: THREE.Mesh
    Rotate_Metal2_0: THREE.Mesh
    Stand_LightBlue_0: THREE.Mesh
  }
  materials: {
    DarkBlue: THREE.MeshStandardMaterial
    LightBlue: THREE.MeshStandardMaterial
    Black: THREE.MeshStandardMaterial
    White: THREE.MeshStandardMaterial
    Screen: THREE.MeshStandardMaterial
    Chrome: THREE.MeshStandardMaterial
    ['Cam.Black']: THREE.MeshStandardMaterial
    Lens: THREE.MeshStandardMaterial
    Glass: THREE.MeshStandardMaterial
    ['Black.001']: THREE.MeshStandardMaterial
    Yellow: THREE.MeshStandardMaterial
    Metal: THREE.MeshStandardMaterial
    Metal2: THREE.MeshStandardMaterial
  }
  animations: GLTFAction[]
}

export function ImacModel(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/models/fixed/imac_2021.glb') as GLTFResult;

  return (
    <group {...props} dispose={null}>
      <PerspectiveCamera makeDefault position={[0, 150, 150]} />
      <group rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={100}>
        <group position={[0.032, 0, 0.387]}>
          <group position={[-0.03, 0, -0.387]}>
            <mesh geometry={nodes.Screen_DarkBlue_0.geometry} material={materials.DarkBlue} />
            <mesh geometry={nodes.Screen_LightBlue_0.geometry} material={materials.LightBlue} />
            <mesh geometry={nodes.Screen_Black_0.geometry} material={materials.Black} />
            <mesh geometry={nodes.Screen_White_0.geometry} material={materials.White} />
            <mesh geometry={nodes.Screen_Screen_0.geometry} material={materials.Screen} />
            <mesh geometry={nodes.Screen_Chrome_0.geometry} material={materials.Chrome} />
            <mesh geometry={nodes.Screen_CamBlack_0.geometry} material={materials['Cam.Black']} />
            <mesh geometry={nodes.Screen_Lens_0.geometry} material={materials.Lens} />
            <mesh geometry={nodes.Screen_Glass_0.geometry} material={materials.Glass} />
            <mesh geometry={nodes.Screen_Black001_0.geometry} material={materials['Black.001']} />
            <mesh geometry={nodes.Screen_Yellow_0.geometry} material={materials.Yellow} />
          </group>
          <mesh geometry={nodes.Rotate_Metal_0.geometry} material={materials.Metal} />
          <mesh geometry={nodes.Rotate_Metal2_0.geometry} material={materials.Metal2} />
        </group>
        <mesh geometry={nodes.Stand_LightBlue_0.geometry} material={materials.LightBlue} />
      </group>
    </group>
  );
}

useGLTF.preload('/models/fixed/imac_2021.glb');
