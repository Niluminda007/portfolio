import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Html, useGLTF } from "@react-three/drei";
import { useRef } from "react";
import { Text } from "./Text";

const Computer = () => {
  const computer = useGLTF("./display/scene.gltf");

  return (
    <mesh>
      <group>
        <hemisphereLight intensity={1} groundColor="black" />
        <spotLight
          position={[-20, 50, 10]}
          angle={0.12}
          penumbra={1}
          intensity={1}
          castShadow
          shadow-mapSize={1024}
        />
        <pointLight intensity={1} />
        <primitive
          object={computer.scene}
          scale={2.5}
          position={[0, -1, 0]}
          rotation={[0, -0.5, 0]}
        />
        <Html position={[-15, -2, -6]}>
          <Text />
        </Html>
      </group>
    </mesh>
  );
};

export const ComputerCanvas = () => {
  const cameraRef = useRef();
  const objectRef = useRef(null);

  return (
    <Canvas
      ref={objectRef}
      shadows
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 25,
        near: 0.1,
        far: 200,
        position: [10, 3, 6],
      }}
    >
      <Suspense fallback={null}>
        <perspectiveCamera
          fov={75}
          aspect={window.innerWidth / window.innerHeight}
          position={[0, 10, 1]}
          near={0.1}
          far={100}
          ref={cameraRef}
        />
        <Computer />
      </Suspense>
    </Canvas>
  );
};
