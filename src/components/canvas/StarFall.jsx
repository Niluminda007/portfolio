import React, { useRef, Suspense, useEffect } from "react";
import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Preload } from "@react-three/drei";
import { ResizeObserver } from "@juggle/resize-observer";

const LINE_COUNT = 1000;
const geom = new THREE.BufferGeometry();
geom.setAttribute(
  "position",
  new THREE.BufferAttribute(new Float32Array(6 * LINE_COUNT), 3)
);
geom.setAttribute(
  "velocity",
  new THREE.BufferAttribute(new Float32Array(2 * LINE_COUNT), 1)
);
const pos = geom.getAttribute("position");
const pa = pos.array;
const vel = geom.getAttribute("velocity");
const va = vel.array;

const Scene = () => {
  const { camera, size } = useThree();
  useEffect(() => {
    const observer = new ResizeObserver(() => {
      camera.aspect = size.width / size.height;
      camera.updateProjectionMatrix();
    });
    observer.observe(document.body);
    return () => observer.disconnect();
  }, [camera, size]);

  for (let line_index = 0; line_index < LINE_COUNT; line_index++) {
    var x = Math.random() * 400 - 200;
    var y = Math.random() * 200 - 100;
    var z = Math.random() * 500 - 100;
    var xx = x;
    var yy = y;
    var zz = z;

    //line start
    pa[6 * line_index] = x;
    pa[6 * line_index + 1] = y;
    pa[6 * line_index + 2] = z;
    //line end
    pa[6 * line_index + 3] = xx;
    pa[6 * line_index + 4] = yy;
    pa[6 * line_index + 5] = zz;

    va[2 * line_index] = va[2 * line_index + 1] = 0;
  }

  const ref = useRef();

  useFrame(() => {
    for (let line_index = 0; line_index < LINE_COUNT; line_index++) {
      va[2 * line_index] += 0.03;
      va[2 * line_index + 1] += 0.025;

      pa[6 * line_index + 2] += va[2 * line_index];
      pa[6 * line_index + 5] += va[2 * line_index + 1];

      if (pa[6 * line_index + 5] > 200) {
        var z = Math.random() * 200 - 100;
        pa[6 * line_index + 2] = z;
        pa[6 * line_index + 5] = z;
        va[2 * line_index] = 0;
        va[2 * line_index + 1] = 0;
      }
    }
    pos.needsUpdate = true;
  });

  return (
    <lineSegments ref={ref} geometry={geom}>
      <lineBasicMaterial attach="material" color={0xffffff} />
    </lineSegments>
  );
};

const StarsCanvas = () => {
  return (
    <div className="w-full h-auto absolute inset-0 z-[2]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
