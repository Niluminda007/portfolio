import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../CanvasLoader/CanvasLoader";
const Philoshper = ({ isMobile }) => {
  const philoshper = useGLTF("./philoshper/scene.gltf");
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={0.2} />
      <primitive
        object={philoshper.scene}
        scale={isMobile ? 0.9 : 1.5}
        position={isMobile ? [-2, -3.9, 0] : [-2, -4.6, -3]}
        rotation={[0, 1.2, 0]}
      />
    </mesh>
  );
};

const PhiloshperCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    //Add a event listner for changes in the screen
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    // Set the initial value of the 'IsMobile state variable'
    setIsMobile(mediaQuery.matches);
    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (e) => {
      setIsMobile(e.matches);
    };
    //Add the callback function as a listner for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    //Remove the listner when the component is unmounted

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          enableZoom={false}
        />
        <Philoshper isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};
export default PhiloshperCanvas;