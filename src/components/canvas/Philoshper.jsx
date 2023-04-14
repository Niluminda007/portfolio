import React, { Suspense, useEffect, useState, useContext } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../CanvasLoader/CanvasLoader";
import { AppContext } from "../../context/context";
const Philoshper = () => {
  const philoshper = useGLTF("./philoshper/scene.gltf");
  const { isMobile, isTablet } = useContext(AppContext);
  console.log(isTablet);
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
        scale={isMobile ? 0.8 : isTablet ? 1.3 : 1.5}
        position={
          isMobile
            ? [-0.5, -3.9, 0]
            : isTablet
            ? [-12, -5, -3]
            : [-2, -4.6, -4.5]
        }
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
