import React from "react";
import Services from "./Services";
import TagSphere from "./TagSphere";
import { personalInfo } from "../data/personalInfo";
import { FormatQuoteOutlined, PersonPin } from "@mui/icons-material";

const About = () => {
  const skills = [
    {
      name: "WEB DEVELOPMENT",
      image:
        "https://res.cloudinary.com/jamesmumo/image/upload/v1687262441/portfolioImages/web_xhay5k.png",
    },
    {
      name: "UI & UX DESIGNING",
      image:
        "https://res.cloudinary.com/jamesmumo/image/upload/v1687262439/portfolioImages/designer_rbq0em.png",
    },
    {
      name: "MOBILE DEVELOPMENT",
      image:
        "https://res.cloudinary.com/djv535hkn/image/upload/v1687424489/android_i81uwr.png",
    },
    {
      name: "FULLSTACK DEVELOPMENT",
      image:
        "https://res.cloudinary.com/jamesmumo/image/upload/v1687262439/portfolioImages/comp_s2wytl.png",
    },
  ];
  const tags = [
    ...personalInfo.skillsTabsData.frameworksAndLibraries,
    ...personalInfo.skillsTabsData.languages,
    ...personalInfo.skillsTabsData.tools,
  ];
  return (
    <div className="px-7 md:px-10 sm:-mt-24" id="about">
      {/*  */}
      <span className="flex items-center">
        <hr className="mx-1 w-4 border-t border-teal-400" />
        <span className="font-semibold text-primary text-1xl md:text-3xl">
          About
        </span>
        <hr className="flex-grow mx-1 border-t border-teal-400" />
      </span>
      {/* <h1 className="mt-5 text-3xl font-semibold text-primary">About me:</h1> */}
      <div className="flex flex-col md:flex-row">
        <TagSphere tags={tags} width={400} height={420} />
        {/*  */}
        <div className="my-3 text-white md:w-2/3 leading-[2] flex flex-col mx-3 justify-center">
          <h6 className="markup ml-0 text-[15px] opacity-25 italic">
            &lt;p&gt;
          </h6>
          <span className="flex items-center">
            {/* <hr className="mx-3 w-10 border-t border-teal-400" /> */}
            <span className="text-[#7fffd4] text-[15px] font-semibold">
              About Me
            </span>
            <hr className="flex-grow mx-3 border-t border-teal-400" />
          </span>
          <span className="opacity-80">
            {" "}
            <FormatQuoteOutlined
              color="#7fffd4"
              fontSize="large"
              className="p-0 rotate-0 ml-1 mr-2 text-[#7fffd4]"
              sx={{ rotate: "180deg" }}
            />
            <span className="text-[#43b48e] font-semibold ">Hi,</span> my name
            is James, I am a passionate Developer with intrests in
            <span className=" text-[#43b48e] opacity-100">
              {" "}
              Web and Mobile Developement.
            </span>{" "}
            I have considerable experience with languages and frameworks such as{" "}
            <span className=" text-[#43b48e] opacity-100">
              React, React-Native, NextJs, Vue.js, Node/Express.Js, Python,
              Flask <span className="text-white">& </span>
              Django
            </span>
            . I also have an Interest in{" "}
            <span className=" text-[#43b48e] opacity-100">
              Data Science and Analytics.{" "}
            </span>
            {/* and yeah I Think AI will take over at some point,{" "}
            <span className=" text-[#43b48e] font-semibold text-[20px] opacity-100">
              Judgement Day is Coming😁
            </span> */}
          <FormatQuoteOutlined
            color="#7fffd4"
            fontSize="large"
            className="p-0  ml-2 mr-1 text-[#7fffd4]"
            />
            </span>{" "}
          <h6 className="markup ml-0 text-[15px] opacity-25 italic">
            &lt;/p&gt;
          </h6>
        </div>
      </div>

      <div className="items-center my-7 md:flex">
        <div className="text-8xl font-bold text-primary">3+</div>
        <p className="text-2xl text-white md:ml-5">
          Years of experience. Specialised in building apps, while ensuring a
          seamless experience for end users.
        </p>
      </div>

      {/* skills */}
      <span className="flex items-center">
        <hr className="mx-1 w-4 border-t border-teal-400" />
        <span className="font-semibold text-primary text-1xl md:text-xl">
          Skills
        </span>
        <hr className="flex-grow mx-1 border-t border-teal-400" />
      </span>
      <div className="flex flex-col md:flex-row">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="md:w-[256px] md:h-[254px] hover:bg-[#04a776] flex flex-col items-baseline justify-end md:m-3 my-3 p-5 shadow-sm skills transition-all duration-500"
          >
            <img
              src={skill.image}
              alt={skill.name}
              className="w-[55px] h-[54px]"
            />
            <p className="mt-3 text-2xl font-semibold text-white">
              {skill.name}
            </p>
          </div>
        ))}
      </div>

      {/* services section */}
      {/* <Services /> */}
    </div>
  );
};

export default About;
