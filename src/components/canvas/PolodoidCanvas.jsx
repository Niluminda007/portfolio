import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, useGLTF, OrbitControls } from "@react-three/drei";

const PolodoidPhoto = () => {
  const photo = useGLTF("./polaroid/Sketchfab_Scene.glb");
  return (
    <>
      <Environment preset="warehouse" />
      <primitive
        object={photo.scene}
        scale={0.4}
        position={[0, -4, -10]}
        rotation={[1, 0.7, -0.008]}
      />
    </>
  );
};

export const PolodoidCanvas = () => {
  return (
    <Canvas frameloop="demand" shadows gl={{ preserveDrawingBuffer: true }}>
      <perspectiveCamera position={[1, 1, 1]} fov={45} near={1000} />
      <OrbitControls
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        enableZoom={false}
      />
      <PolodoidPhoto />
    </Canvas>
  );
};