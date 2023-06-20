import React from "react"
import Services from "./Services"
import TagSphere from "./TagSphere"
import { personalInfo } from "../data/personalInfo"

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
        "https://res.cloudinary.com/jamesmumo/image/upload/v1687262439/portfolioImages/android_oedjjp.png",
    },
    {
      name: "FULLSTACK DEVELOPMENT",
      image:
        "https://res.cloudinary.com/jamesmumo/image/upload/v1687262439/portfolioImages/comp_s2wytl.png",
    },
  ]
  const tags = [
    ...personalInfo.skillsTabsData.frameworksAndLibraries,
    ...personalInfo.skillsTabsData.languages,
    ...personalInfo.skillsTabsData.tools,
  ]
  return (
    <div className="md:px-10 px-7 sm:-mt-24" id="about">
      {/*  */}
      <span className="flex items-center">
        <hr className="border-t border-teal-400 mx-1 w-4" />
        <span className="text-primary text-1xl md:text-3xl font-semibold">
          About Me
        </span>
        <hr className="border-t border-teal-400 mx-1 flex-grow" />
      </span>
      {/* <h1 className="text-primary font-semibold text-3xl mt-5">About me:</h1> */}
      <div className="flex flex-col md:flex-row">
        <TagSphere tags={tags} width={300} height={320} />
        {/*  */}
        <p className="my-3 text-white md:w-2/3 leading-[2] flex flex-col mx-3 justify-center">
          <span>
            {" "}
            <span className="text-[#43b48e] font-semibold ">Hi,</span> my name
            is James, I am a passionate Developer with intrests in
            <span className=" text-[#43b48e] opacity-100">
              {" "}
              Web and Mobile Developement.
            </span>{" "}
            I have considerable experience with languages and frameworks such as{" "}
            <span className=" text-[#43b48e] opacity-100">
              React, React-Native, NextJs, Vue.js, Node/Express.Js, Flutter,
              Kotlin and Java
            </span>
            . I also have an Interest in{" "}
            <span className=" text-[#43b48e] opacity-100">
              Data Science and Analytics.{" "}
            </span>
            {/* and yeah I Think AI will take over at some point,{" "}
            <span className=" text-[#43b48e] font-semibold text-[20px] opacity-100">
              Judgement Day is Coming😁
            </span> */}
          </span>
        </p>
      </div>

      <div className="md:flex my-7 items-center">
        <div className="text-primary text-8xl font-bold">3+</div>
        <p className="text-white text-2xl md:ml-5">
          Years of experience. Specialised in building apps, while ensuring a
          seamless experience for end users.
        </p>
      </div>

      {/* skills */}
      <span className="flex items-center">
        <hr className="border-t border-teal-400 mx-1 w-4" />
        <span className="text-primary text-1xl md:text-xl font-semibold">
          Skills
        </span>
        <hr className="border-t border-teal-400 mx-1 flex-grow" />
      </span>
      <div className="flex flex-col md:flex-row ">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="md:w-[256px] md:h-[254px] hover:bg-[#04a776] flex flex-col items-baseline justify-end md:m-3 my-3 p-5 shadow-sm skills transition-all duration-500">
            <img
              src={skill.image}
              alt={skill.name}
              className="w-[55px] h-[54px]"
            />
            <p className="mt-3 text-2xl text-white font-semibold">
              {skill.name}
            </p>
          </div>
        ))}
      </div>

      {/* services section */}
      {/* <Services /> */}
    </div>
  )
}

export default About
