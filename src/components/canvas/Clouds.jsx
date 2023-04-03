import { Canvas } from "@react-three/fiber";
import { Cloud, PerspectiveCamera, OrbitControls } from "@react-three/drei";
import React, { Suspense, useRef } from "react";

const CloudMesh = () => {
  const cloudRef = useRef(null);

  return (
    <group ref={cloudRef}>
      <pointLight intensity={1} />
      <Cloud opacity={0.2} speed={0.4} width={10} depth={1.5} segments={20} />
    </group>
  );
};

export const Clouds = () => {
  return (
    <Canvas className=" abosolute z-[-5]" shadows>
      <PerspectiveCamera
        fov={20}
        aspect={window.innerWidth / window.innerHeight}
        position={[0, 0, 3]}
        near={0.1}
        far={100}
      ></PerspectiveCamera>
      <Suspense fallback={null}>
        <CloudMesh />
      </Suspense>
      <OrbitControls enableZoom={false} autoRotate />
    </Canvas>
  );
};
