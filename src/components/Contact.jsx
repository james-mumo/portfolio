import React from "react";
import facebook from "../assets/socials/facebook.png";
import instagram from "../assets/socials/instagram.png";
import dribbble from "../assets/socials/dribbble.png";
import email from "../assets/socials/sms.png";
import { personalInfo } from "../data/personalInfo";
import {
  AiFillLinkedin,
  AiOutlineGithub,
  AiOutlineMail,
  AiOutlineTwitter,
} from "react-icons/ai";

const Contact = () => {
  const ConnectItem = ({ itemTitle, itemContent }) => {
    return (
      <span className="flex gap-2 items-center">
        <span className="p-1 bg-teal-600 rounded-md border border-teal-500">
          <img src={itemTitle} alt="" srcset="" />
        </span>
        <span className="text-[#7fffd4] font-bold">{itemContent}</span>
      </span>
    );
  };
  return (
    <div className="px-1 my-10 md:px-10" id="contact">
      <span className="flex items-center">
        <hr className="mx-1 w-4 border-t border-teal-400" />
        <span className="font-semibold text-primary text-1xl md:text-3xl">
          Contact
        </span>
        <hr className="flex-grow mx-1 border-t border-teal-400" />
      </span>
      <div className="flex flex-col md:flex-row">
        <span className="bg-[#01d29313] w-full flex flex-col">
          <span className="text-[#7fffd4] opacity-70 p-5">
            Reach out for collaborations, Currently looking for a new
            opportunity💰
          </span>

          <div className="flex flex-col justify-between w-full bothCards md:flex-row">
            {/* contact cards */}
            <div className="flex flex-col gap-3 items-start px-5 my-3 contactCards md:w-1/2">
              <a
                href={personalInfo.linkedIn}
                target="_blank"
                rel="noreferrer"
                className="flex flex-row gap-2 justify-center items-center"
              >
                <AiFillLinkedin
                  style={{ color: "white", height: "30px", width: "30px" }}
                />
                <span className="text-[#7fffd4] font-bold">LinkedIn</span>
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="flex flex-row gap-2 justify-center items-center"
              >
                <AiOutlineGithub
                  style={{ color: "white", height: "30px", width: "30px" }}
                />
                <span className="text-[#7fffd4] font-bold">GitHub</span>
              </a>
              <a
                href={personalInfo.twitter}
                target="_blank"
                rel="noreferrer"
                className="flex flex-row gap-2 justify-center items-center"
              >
                <AiOutlineTwitter
                  style={{ color: "white", height: "30px", width: "30px" }}
                />
                <span className="text-[#7fffd4] font-bold">Twitter</span>
              </a>
              <a
                href="mailto:mumojames98@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="flex flex-row gap-2 justify-center items-center"
              >
                <AiOutlineMail
                  style={{ color: "white", height: "30px", width: "30px" }}
                />
                <span className="text-[#7fffd4] font-bold">Mail</span>
              </a>
            </div>

            {/* the form */}
            <div className="md:w-1/2">
              <form>
                <input
                  type="text"
                  name="name"
                  placeholder="Name:"
                  className="bg-[#F5F5F5] bg-opacity-10 py-3 px-3 md:w-3/4 w-full rounded "
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email:"
                  className="bg-[#F5F5F5] bg-opacity-10 py-3 px-3 md:w-3/4 w-full rounded my-3"
                />
                <textarea
                  name="message"
                  id="message"
                  cols="54"
                  rows="3"
                  className="bg-[#F5F5F5] bg-opacity-10 py-3 px-3 md:w-3/4 w-full rounded mb-2"
                  placeholder="Message:"
                ></textarea>
                <button className="block px-12 py-2 text-white rounded transition-all duration-500 btn bg-primary hover:bg-white hover:text-primary">
                  Send
                </button>
              </form>
            </div>
          </div>
        </span>
      </div>

      <hr className="flex-grow mx-0 mt-3 border-t border-teal-400" />
    </div>
  );
};

export default Contact;
