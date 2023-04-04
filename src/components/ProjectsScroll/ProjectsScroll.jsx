import React, { useContext, useRef } from "react";
import { AppContext } from "../../context/context";
import { projectsCoverDetails } from "../../utils/projectDetails";
import { AnimatedProjectCard } from "../AnimatedProjectCard/AnimatedProjectCard";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export const ProjectsScroll = () => {
  const { toggleMenu } = useContext(AppContext);
  const rootRef = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray(".container section");
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: ".wrap",
          scrub: 1,
          end: "+=3000",
          pin: true,
          pinSpacing: true,
          markers: {
            startColor: "transparent",
            endColor: "transparent",
            fontSize: "1px",
          },
        },
      });
    }, rootRef);
    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <>
      <div
        className={`${
          toggleMenu ? "z-[0]" : "z-[30]"
        }  fixed top-[7.5rem] bg-[dark] flex gap-10  justify-center items-center`}
      >
        <div className="wrapper overflow-x-hidden relative h-[100vh] w-[100vw]">
          <div ref={rootRef} className="container w-[240vw] h-[80vh] flex">
            {projectsCoverDetails.map((item, index) => {
              return (
                <section key={index} className="w-[60vw] px-[20vw] py-[8vw]">
                  <AnimatedProjectCard item={item} />
                </section>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
