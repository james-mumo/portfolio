import React from "react";
import Services from "./Services";
import { personalInfo, aboutMeInfoTags } from "../data/personalInfo";
import TagSphere from "./TagSphere";
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
    <div className="px-7 md:px-10 sm:-mt-24 rounded-md" id="about">
      {/*  */}
      <span className="flex items-center">
        <hr className="mx-1 w-4 border-t border-teal-400" />
        <span className="font-semibold text-primary text-1xl md:text-3xl">
          About
        </span>
        <hr className="flex-grow mx-1 border-t border-teal-400" />
      </span>
      {/* <h1 className="mt-5 text-3xl font-semibold text-primary">About me:</h1> */}
      <div className="flex flex-col md:flex-row p-1 bg-[#01d29313] ">
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
              Data Science/Analytics.
              {/* and yeah I Think AI will take over at some point,{" "}
            <span className=" text-[#43b48e] font-semibold text-[20px] opacity-100">
            Judgement Day is Coming😁
          </span> */}
              <FormatQuoteOutlined
                color="#7fffd4"
                fontSize="large"
                className="p-0  ml-0 mr-1 text-[#7fffd4]"
              />
            </span>
          </span>{" "}
          <h6 className="markup ml-0 text-[15px] opacity-25 italic">
            &lt;/p&gt;
          </h6>
          <h6 className="markup ml-0 text-[15px] mt-5 opacity-25 italic">
            &lt;/span&gt;
          </h6>
          <span className="flex items-center">
            <hr className="mx-3 w-10 border-t border-teal-400" />
            <span className="text-[#7fffd4] text-[15px] font-semibold">
              Experience Summary
            </span>
            <hr className="flex-grow mx-3 border-t border-teal-400" />
          </span>
          {/*  */}
          <span className="flex flex-col gap-10 justify-around py-2 sm:gap-2 sm:flex-row">
            <ExpTag
              years={aboutMeInfoTags.yearsOfExp}
              itemText={"Years of Experience"}
            />
            <ExpTag
              years={aboutMeInfoTags.projectsCompleted}
              itemText={"Projects Completed"}
            />
            <ExpTag
              years={aboutMeInfoTags.satisfiedClients}
              itemText={"Clients Satisfied"}
            />
          </span>
          <h6 className="markup ml-0 text-[15px] opacity-25 italic">
            &lt;/span&gt;
          </h6>
          {/*  */}
        </div>
      </div>

      <div className="hidden items-center my-7 md:flex">
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

      <div className="flex justify-center">
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
      </div>

      {/* services section */}
      {/* <Services /> */}
    </div>
  );
};

const ExpTag = ({ years, itemText }) => {
  return (
    <span className="items-center flex bg-[#01d29313] px-2 rounded-md gap-1 border border-teal-300 cursor-pointer">
      <PersonPin className="text-[38px] text-[#01d293]" />
      <span className="flex flex-col text-[#01d293]">
        <span className="font-semibold text-[14px]">{itemText}</span>
        <span className="text-[15px] font-bold text-[#ffffff]">{years}</span>
      </span>
    </span>
  );
  border;
};

export default About;
