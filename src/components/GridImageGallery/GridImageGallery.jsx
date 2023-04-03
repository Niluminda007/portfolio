import React, { useEffect } from "react";
import "./gallery.css";
import { useState } from "react";
import { gsap } from "gsap";

const gridPatterns = [
  { pattern: [2, 2], total: 4 },
  { pattern: [3, 3], total: 9 },
];

export const GridImageGallery = ({ images }) => {
  //   const images = projects[1].imgUrls;
  const getCurrentGridLength = (list) => {
    if (list.length > 4) return 9;
    return 4;
  };
  const [activeImageIndex, setActiveImageIndex] = useState(1);
  const [isOverlayOpen, setOverlay] = useState(false);
  const currentGridPattern = gridPatterns.find(
    ({ total }) => total === getCurrentGridLength(images)
  );
  const handleClick = (e) => {
    const { id } = e.target;
    setActiveImageIndex(id);
    setOverlay(!isOverlayOpen);
  };
  const handleOverlay = () => {
    setOverlay(!isOverlayOpen);
  };

  useEffect(() => {
    if (isOverlayOpen) {
      gsap.from(".overlay", {
        z: -100,
        scale: 0.2,
        ease: "power3.out",
        duration: 1,
      });
    }
  }, [isOverlayOpen, activeImageIndex]);

  return (
    <div className="layout flex-[.5] flex items-center z-[100] relative justify-center">
      <div
        className="grid "
        style={{
          gridTemplateColumns: `repeat(${currentGridPattern.pattern[0]}, 170px)`,
          gridTemplateRows: `repeat(${currentGridPattern.pattern[0]}, 170px)`,
          marginTop: "-500px",
        }}
      >
        {Array.from({ length: currentGridPattern.total }).map((_, index) => {
          const backgroundImage = !(index > images.length - 1)
            ? `url(${images[index]})`
            : null;
          if (backgroundImage === null) {
            const background = `linear-gradient(to right, #802BB1 0%, #802BB1 50%, black 50%, black 100%)`;
            return (
              <div
                key={index}
                className="img h-[100%] w-[100%] overflow-hidden "
                style={{
                  background,
                  filter: "unset",
                }}
              ></div>
            );
          }

          return (
            <div
              key={index}
              id={index}
              className="img h-[100%] w-[100%] overflow-hidden project-image-filter cursor-pointer project-image-filter"
              style={{
                backgroundImage,
              }}
              onClick={handleClick}
            ></div>
          );
        })}
      </div>
      <div
        className={`${
          !isOverlayOpen
            ? "w-[5px] h-[5px] opacity-0 z-[0]"
            : "z-[100] w-[40vw] h-auto"
        } overlay absolute  bg-[rgba(128,43,177,0.2)] p-14`}
      >
        <div className="close" onClick={handleOverlay}></div>
        <img
          src={images[activeImageIndex]}
          className="active-image h-auto object-contain"
          draggable={false}
        />
      </div>
    </div>
  );
};
