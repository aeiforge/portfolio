/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.2 public/models/fixed/piano.glb --types --typescript 
Author: Julien Hondaâ (https://sketchfab.com/julien_hondaa)
License: CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)
Source: https://sketchfab.com/3d-models/yamaha-p-115-6c9682901fef4588aa1cfe10b65dd8a6
Title: Yamaha P-115
*/

'use client';

type GLTFAction = SafeAny;

import { useGLTF } from '@react-three/drei';
import { SafeAny } from 'src/types/common';
import * as THREE from 'three';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    piano_lod0_piano_0: THREE.Mesh;
    tabouret_lod0_tabouret_0: THREE.Mesh;
  };
  materials: {
    piano: THREE.MeshStandardMaterial;
    tabouret: THREE.MeshStandardMaterial;
  };
  animations: GLTFAction[];
};

const PianoModel = (props: JSX.IntrinsicElements['group']) => {
  const { nodes, materials } = useGLTF('/models/fixed/piano.glb') as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group
        position={[0.918, 0, -1.541]}
        rotation={[-Math.PI / 2, 0, -0.027]}
        scale={0.013}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes.piano_lod0_piano_0.geometry}
            material={materials.piano}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.tabouret_lod0_tabouret_0.geometry}
            material={materials.tabouret}
            position={[0, 0, 49.391]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
        </group>
      </group>
    </group>
  );
};

useGLTF.preload('/models/fixed/piano.glb');

export default PianoModel;
