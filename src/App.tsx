import React, { Suspense } from 'react';
import './App.css';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Mobile } from './components/Mobile';
import { Loader } from './components/Loader';

export const App = (): React.JSX.Element => {
  return (
    <>
      <div id="canvas-container">
        <Canvas camera={{
          fov: 75,
          position: [0, 0, 3]
        }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[1, 1, 1]} intensity={5} />
          <Suspense fallback={<Loader/>}>
            <Mobile/>
          </Suspense>
          <OrbitControls   minAzimuthAngle={-Math.PI / 4}
            maxAzimuthAngle={Math.PI / 4} minPolarAngle={Math.PI / 6} maxPolarAngle={Math.PI - Math.PI / 6} enableZoom={false}
          />
        </Canvas>
      </div>
      <span className="info">Выбранная модель телефона</span>
    </>
  );
};
