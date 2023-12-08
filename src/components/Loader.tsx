import React from 'react';
import { Html, useProgress } from '@react-three/drei';

export const Loader = ():React.JSX.Element => {
  const { progress } = useProgress();
  console.log(progress);
  return <Html center>{progress} % loaded</Html>;
};
