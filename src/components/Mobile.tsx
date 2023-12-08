import React, {  useRef } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

export const Mobile = (): React.JSX.Element => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const meshRef = useRef<THREE.Mesh>(null!);
  const { scene } = useGLTF('./models/galaxy-s23-plus.glb');

  useFrame((_, delta) => {
    meshRef.current.rotation.y += 0.5 * delta;
  });

  return (
    <primitive object={scene} scale={30} position={[0, 0, -2]} ref={meshRef}/>
  );
};
