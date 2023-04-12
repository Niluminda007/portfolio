import React, { useState, useRef, useContext } from "react";
import { styles } from "../../styles";
import emailjs from "@emailjs/browser";
import { useEffect } from "react";
import { gsap } from "gsap";
import { AppContext } from "../../context/context";
export const ContactForm = () => {
  const rootRef = useRef(null);
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [laoding, setLoading] = useState(false);
  const { isMobile, isTablet } = useContext(AppContext);
  const handleChange = (e) => {
    const {
      target: { name, value },
    } = e;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    //template ID: template_b512ihg
    //Service ID: service_fxbpa55
    //Public key: 9EnrDXxRpcPbgvZHJ

    emailjs
      .send(
        "service_fxbpa55",
        "template_b512ihg",
        {
          from_name: form.name,
          to_name: "Ushan",
          from_email: form.email,
          to_email: "princeofpersiatwathrones@gmail.com",
          message: form.message,
        },
        "9EnrDXxRpcPbgvZHJ"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank You. I will get back to you as soon as possible");
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Something went wrong.");
        }
      );
  };
  useEffect(() => {
    const cts = gsap.context(() => {
      const tl = new gsap.timeline();
      tl.fromTo(
        rootRef.current,
        { scale: 0.5 },
        {
          duration: 1,
          scale: 1,
          ease: "power3.out",
        }
      );
    });

    return () => {
      cts.revert();
    };
  }, []);
  return (
    <div
      className="flex flex-col bg-[rgba(0,0,0,.5)] p-8 rounded-2xl"
      ref={rootRef}
    >
      <p className={`${styles.sectionSubText} text-purple`}>Get in touch</p>
      <h3 className={`${styles.sectionHeadText} text-purple`}>Contact.</h3>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className={`${
          isMobile ? "gap-2 mt-4" : isTablet ? "gap-4 mt-5" : "gap-8 mt-12"
        }  flex flex-col xs:mt-5`}
      >
        <label className="flex flex-col">
          <span className="text-white font-medium mb-4">Your Name</span>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="What's your name?"
            className="bg-[rgba(128,43,177,0.5)] py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
          />
        </label>
        <label className="flex flex-col">
          <span className="text-white font-medium mb-4">Your Email</span>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="What's your email?"
            className="bg-[rgba(128,43,177,0.5)] py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
          />
        </label>
        <label className="flex flex-col">
          <span className="text-white font-medium mb-4">Your Message</span>
          <textarea
            rows={isMobile ? "4" : isTablet ? "4" : "7"}
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="What do you want to say?"
            className="bg-[rgba(128,43,177,0.5)] py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
          />
        </label>
        <button
          className="bg-[rgba(128,43,177,0.5)] py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          type="submit"
        >
          {laoding ? "Sending..." : "Send"}
        </button>
      </form>
    </div>
  );
};
