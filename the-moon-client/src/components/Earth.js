import React from 'react';
import { Canvas } from '@react-three/fiber';
import Moon from './Moon.js';
import { OrbitControls } from '@react-three/drei';


const Earth = () => {
  return (
    <Canvas 
      style={
        {height: "500px"}
      }
      dpr={[1, 2]}
    >
      {/* <OrbitControls /> */}
      <directionalLight intensity={0.5}/>
      <ambientLight intensity={0.2} />
      <Moon />
    </Canvas>
  )
}

export default Earth;