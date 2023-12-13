import React from 'react';
import { Html, useProgress } from '@react-three/drei';

export const Loader = ():React.JSX.Element => {
  const { progress } = useProgress();
  return <Html center style={{ color: 'dark brown', fontSize: '2rem' }}>{progress} % загружено </Html>;
};
