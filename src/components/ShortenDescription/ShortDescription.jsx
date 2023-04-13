import React, { useState, useEffect } from "react";

const ShortDescription = ({ description }) => {
  const [Clicked, setClicked] = useState(false);
  const [currentDescription, setcurrentDescription] = useState("");
  const toggleDescription = (des) => {
    let tempDes = des;
    if (tempDes.length > 400) {
      tempDes = tempDes.slice(0, 400);
      setcurrentDescription(tempDes);
    } else {
      setcurrentDescription(description);
    }
  };
  useEffect(() => {
    toggleDescription(description);
  }, []);
  const handleClick = () => {
    toggleDescription(currentDescription);
    setClicked(!Clicked);
  };
  return (
    <div className={`flex flex-col`}>
      <span
        id="bio"
        className={`project__details__text project__details__text-small ${
          !description.length > 400 && !Clicked ? "h-[10rem]" : "h-auto"
        } transition-[height] ease-out duration-75`}
      >
        {description.length > 400 && !Clicked
          ? currentDescription.concat(" ...")
          : currentDescription}
      </span>
      {description.length > 400 && (
        <button
          className="w-64 h-8 bg-[transparent] border-2 border-purple border-solid rounded-md text-white text-lg"
          onClick={handleClick}
        >
          {!Clicked ? "Read More" : "Read Less"}
        </button>
      )}
    </div>
  );
};

export default ShortDescription;
