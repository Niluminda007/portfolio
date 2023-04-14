import React, { useEffect, useContext } from "react";
import "./gallery.css";
import { useState } from "react";
import { gsap } from "gsap";
import { AppContext } from "../../context/context";

const gridPatterns = [
  { pattern: [2, 2], total: 4 },
  { pattern: [3, 3], total: 9 },
];

export const GridImageGallery = ({ images, id }) => {
  const { isMobile, isTablet } = useContext(AppContext);
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
  const gridItemSize =
    (isMobile || isTablet) && id === "e-resource" ? "100px" : "170px";

  return (
    <div
      className={`${
        isMobile ? "" : isTablet ? "" : "absolute right-0"
      } layout flex items-center z-[100] justify-center my-16`}
    >
      <div
        className={`${isMobile ? "" : isTablet ? "" : "rotate-[45deg]"} grid`}
        style={{
          gridTemplateColumns: `repeat(${currentGridPattern.pattern[0]}, ${gridItemSize})`,
          gridTemplateRows: `repeat(${currentGridPattern.pattern[0]}, ${gridItemSize})`,
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
                  background: background,
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
            ? "w-[5px] h-[5px] opacity-0 z-[-1]"
            : "z-[100] w-[40vw] h-auto"
        } overlay absolute  bg-[rgba(128,43,177,0.2)] p-14 ${
          isMobile && isOverlayOpen
            ? "!w-[90vw]"
            : isTablet && isOverlayOpen
            ? "!w-[50vw] right-2 top-[15rem]"
            : ""
        } flex justify-center`}
      >
        <div className="close" onClick={handleOverlay}></div>
        <img
          src={images[activeImageIndex]}
          className={`${
            isMobile ? "scale-[1.1]" : isTablet ? "" : ""
          } active-image h-auto object-contain`}
          draggable={false}
        />
      </div>
    </div>
  );
};
