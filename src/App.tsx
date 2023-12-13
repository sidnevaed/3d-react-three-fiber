import React, { Suspense } from 'react';
import './App.css';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
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
          <Suspense fallback={<Loader/>}>
            <Environment preset="city" background blur={0.5} />
            <ambientLight intensity={0.5} />
            <directionalLight position={[1, 1, 1]} intensity={5} />
            <Mobile/>
            <OrbitControls   minAzimuthAngle={-Math.PI / 4}
              maxAzimuthAngle={Math.PI / 4} minPolarAngle={Math.PI / 6} maxPolarAngle={Math.PI - Math.PI / 6} enableZoom={false}
            />
          </Suspense>
        </Canvas>
      </div>
      <span className="info">Выбранная модель телефона</span>
    </>
  );
};
