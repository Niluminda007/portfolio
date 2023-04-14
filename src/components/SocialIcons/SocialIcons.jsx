import React, { useRef, useContext } from "react";
import { useState } from "react";
import { gsap } from "gsap";
import { useLayoutEffect } from "react";
import { AppContext } from "../../context/context";
import soicalIcons from "../../utils/soicalIcons";

const SocialIcon = ({ Icon, url }) => {
  const [hover, setHover] = useState(false);
  return (
    <a target="_blank" href={url}>
      <div
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
        className={`${
          hover
            ? "social-background-hover shadow-2xl shadow-inherit"
            : "social-background-normal"
        } w-[40px] h-[40px] rounded-full flex items-center justify-center hover:scale-125 transition-all duration-100 ease-linear`}
      >
        <Icon fontSize={20} color="#fff" />
      </div>
    </a>
  );
};

const SocialIcons = () => {
  const ref = useRef(null);
  const { isMobile, isTablet } = useContext(AppContext);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        {
          x: "600%",
          autoAlpha: 0,
        },
        {
          x: "0%",
          delay: 1,
          autoAlpha: 1,
          duration: 1,
          ease: "Expo.easeOut",
        }
      );
    });

    return () => {
      ctx.revert();
    };
  });
  return (
    <div
      className={`${
        isMobile
          ? "right-[2%] top-[60%]"
          : isTablet
          ? "top-[50%] right-[10%]"
          : "top-[50%] right-[10rem]"
      } flex flex-col gap-4 absolute z-[100]   -translate-y-[50%]`}
      ref={ref}
    >
      {soicalIcons.map(({ Icon, id, url }) => (
        <SocialIcon key={id} Icon={Icon} url={url} />
      ))}
    </div>
  );
};

export default SocialIcons;
