import React from "react";
import img2 from "../assets/j.png";
import tailwind from "../assets/skills/tailwind.svg";
import java from "../assets/skills/java.svg";
import rreact from "../assets/skills/react.svg";
import firebase from "../assets/skills/firebase.svg";
import git from "../assets/skills/git.svg";
import nextJS from "../assets/skills/nextJS.svg";
import typescript from "../assets/skills/typescript.svg";
import javascript from "../assets/skills/javascript.svg";
import express from "../assets/skills/nextJS.svg";
import mongoDB from "../assets/skills/mongoDB.svg";
import Marquee from "react-fast-marquee";
import { personalInfo } from "../data/personalInfo";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { Link as RouterLink } from "react-router-dom";
import { Link, ScrollLink } from "react-scroll";

const Home = () => {
  const link = "about";
  const MarqueeItem = ({ name, img }) => {
    return (
      <div className="flex border  border-teal-500 p-1 object-contain bg-[#01d29313] items-center px-3 mx-4 gap-4 h-10 rounded-md">
        <img
          src={img}
          alt=""
          className="flex object-contain justify-center items-center w-10"
        />
        <span className="text-[#01d293]  font-semibold">{name}</span>
      </div>
    );
  };
  return (
    <div className="md:px-10 px-7 my-7 md:h-screen bg-[##011627]" id="home">
      <div>
        <div className="flex flex-col justify-between items-center w-full md:flex-row">
          {/* image & content */}
          {/* text */}
          <div className="text-white">
            <h1 className="mt-10 text-3xl font-semibold leading-none opacity-70">
              Hello👋🏾, I'm
            </h1>
            {/*  */}
            {/*  */}
            <span className="text-[#7fffd4] font-semibold text-5xl md:text-8xl">
              <div className="flex">
                {personalInfo.fullName.split("").map((letter, idx) => (
                  <div key={idx}>
                    {letter === "-" ? (
                      <h1 className="text-[19px]" key={idx}>
                        &nbsp;
                      </h1>
                    ) : (
                      <motion.h1
                        style={
                          letter === "M"
                            ? {
                                textShadow: "-2px 0px 5px #04fcd8",
                                color: "#01d293",
                              }
                            : {}
                        }
                        initial={{
                          opacity: 0,
                        }}
                        animate={{
                          opacity: 1,
                          scale: [1, 1.2, 1],
                          transition: {
                            // type: "spring",
                            stiffness: 300,
                            delay: (idx + 3) * 0.1,
                          },
                        }}
                        whileHover={{
                          color: letter === "M" ? "#5DECCC" : "#009688",
                          scaleY: [1, 0.9, 0.8, 0.7, 1.3, 1],
                          scaleX: [1, 1.1, 1.2, 1.3, 0.7, 1],
                          transition: {
                            stiffness: 500,
                            damping: 30,
                            duration: 0.5,
                          },
                        }}
                        className="flex"
                        key={idx}
                      >
                        {letter}
                      </motion.h1>
                    )}
                  </div>
                ))}
              </div>
            </span>
            {/*  */}
            {/*  */}

            <span className="opacity-70 md:w-96 pb-3 flex gap-2 font-thin md:text-[28px] text-[20px]">
              &gt;
              <TypeAnimation
                sequence={[
                  "Software Engineer",
                  1000,
                  "Android Developer",
                  1000,
                  "Data Analyst",
                  2000,
                ]}
                speed={50}
                repeat={Infinity}
              />
            </span>
            {/*  */}
            {/*  */}

            <div className="mt-5">
              <button className="btn transition-all duration-500 bg-[#009688] py-2 px-4 rounded text-white hover:bg-teal-700 hover:text-primary">
                <Link
                  to={link}
                  activeClass="active"
                  smooth={true}
                  spy={true}
                  className="text-white duration-500 cursor-pointer hover:text-primary"
                >
                  About me
                </Link>
              </button>

              <button className="border-[#009688] border text-teal-400  hover:border-teal-400  outline py-1.5 rounded border-none ml-5 px-5 text-md opacity-90 ">
                <RouterLink to="/cv"> View CV</RouterLink>
              </button>
            </div>
          </div>
          {/* img */}
          <div className="relative order-first md:order-last">
            <img src={img2} alt="" />
          </div>
        </div>
        {/*  */}
        {/* margquee item */}
        <div className="hidden gap-3 justify-center items-center p-1 mt-5 w-full border border-teal-600 border-dashed md:flex h-fit">
          <Marquee
            direction="left"
            pauseOnHover={true}
            play={true}
            gradient={false}
            speed={80}
            pauseOnClick={true}
            delay={0}
            gradientColor={[255, 255, 255]}
          >
            <MarqueeItem name="Java" img={java} />
            <MarqueeItem name="JavaScript" img={javascript} />
            <MarqueeItem name="React" img={rreact} />
            <MarqueeItem name="Firebase" img={firebase} />
            <MarqueeItem name="TypeScript" img={typescript} />
            <MarqueeItem name="NextJs" img={nextJS} />
            <MarqueeItem name="MongoDB" img={mongoDB} />
            <MarqueeItem name="TailWind" img={tailwind} />
            <MarqueeItem name="ExpressJS" img={express} />
            <MarqueeItem name="Git" img={git} />
            {/* <MarqueeItem name="Kotlin" img={kotlin} /> */}
          </Marquee>
        </div>
        {/*  */}
      </div>
      <div className="h-24 bg-[##011627] w-full mx-auto absolute left-0 hidden md:block"></div>
    </div>
  );
};

export default Home;
