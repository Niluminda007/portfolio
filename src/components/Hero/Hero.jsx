import React from "react";
import { styles } from "../../styles";
import { PhiloshperCanvas } from "../canvas";
import "./hero.css";

export const Hero = () => {
  return (
    <section className="hero">
      <div className={`hero__intro ${styles.paddingX}`}>
        <div className="hero__intro-shapes">
          <div className="hero__intro-shape_1" />
          <div className="hero__intro-shape_2 sm:h-80 h-40 violet-gradient" />
        </div>
        <div className="hero__intro-bio">
          <div className="flex">
            <h1 className={`hero__intro-bio_heading ${styles.heroHeadText}`}>
              Hi,I'm &nbsp;
            </h1>
            <span
              className={`${styles.heroHeadText} hero__intro-bio_heading-span`}
            >
              Ushan
            </span>
          </div>

          <p className={`hero__intro-bio_description ${styles.heroSubText}`}>
            I develop user <br className="sm:block hidden" />
            interfaces and web applications.
          </p>
        </div>
      </div>

      <PhiloshperCanvas />
    </section>
  );
};
