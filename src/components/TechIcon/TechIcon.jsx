import React from "react";
import docker from "../../assets/tech/docker.png";
import { GiTriangleTarget } from "react-icons/gi";

const TechIcon = () => {
  const technology = { name: "react", icon: docker };
  return (
    <div className="w-[120px] h-[120px] absolute z-[200] bg-[rgba(0,0,0,0.2)] rounded-full flex justify-center items-center ">
      <div className="w-[80px] h-[80px]  absolute z-[200] bg-[rgba(255,255,255,0.8)] rotate-45 rounded-lg">
        <div className="w-[60px] h-[60px] absolute z-[200] bg-purple rounded-full flex justify-center items-center ">
          {" "}
        </div>
      </div>
    </div>
  );
};

export default TechIcon;
