import React from "react";
import SectionTitle from "../Shared/SectionTitle";

const OurMenuSection = () => {
  const sectionStyle = {
    backgroundImage: `url("https://i.ibb.co/vHZKRc6/chinese-new-year-concept-with-mandarine.jpg")`,
    backgroundSize: "cover",
    color: "white",
    textAlign: "center",
    padding: "50px",
  };

  const today = new Date().toDateString(); // Format the date as a string
  console.log(today);

  return (
    <div style={sectionStyle} >
      <SectionTitle subHeading="Check it out" heading="From Our Menu" />
      <div className="grid md:grid-cols-2">
        <img
          className="w-3/4 mx-auto rounded-md"
          src="https://i.ibb.co/m00R31Q/chicken-skewers-with-slices-sweet-peppers-dill.jpg"
          alt="chicken"
        />
        <div className="text-left w-3/4">
          <h6 className="text-xl">{today}</h6>
          <h4 className="text-2xl uppercase py-4">WHERE CAN I GET SOME?</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
          <button className="pt-8 hover:bg-[#1F2937] border-b-2 text-stone-300 px-4 py-2 mt-4 rounded-lg">
            Read more
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurMenuSection;
