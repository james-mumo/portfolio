import React from "react"
import facebook from "../assets/socials/facebook.png"
import instagram from "../assets/socials/instagram.png"
import dribbble from "../assets/socials/dribbble.png"
import email from "../assets/socials/sms.png"
import { personalInfo } from "../data/personalInfo"
import {
  AiFillLinkedin,
  AiOutlineGithub,
  AiOutlineMail,
  AiOutlineTwitter,
} from "react-icons/ai"

const Contact = () => {
  const ConnectItem = ({ itemTitle, itemContent }) => {
    return (
      <span className="flex gap-2 items-center">
        <span className=" bg-teal-600 border border-teal-500 p-1 rounded-md">
          <img src={itemTitle} alt="" srcset="" />
        </span>
        <span className="text-[#7fffd4] font-bold">{itemContent}</span>
      </span>
    )
  }
  return (
    <div className="md:px-10 px-1 my-10" id="contact">
      <span className="flex items-center">
        <hr className="border-t border-teal-400 mx-1 w-4" />
        <span className="text-primary text-1xl md:text-3xl font-semibold">
          Contact
        </span>
        <hr className="border-t border-teal-400 mx-1 flex-grow" />
      </span>
      <div className="flex flex-col md:flex-row">
        <span className="bg-[#01d29313] w-full flex flex-col">
          <span className="text-[#7fffd4] opacity-70 p-5">
            Reach out for collaborations, Currently looking for a new
            opportunity💰
          </span>

          <div className="bothCards flex md:flex-row flex-col w-full justify-between">
            {/* contact cards */}
            <div className="contactCards md:w-1/2 flex flex-col px-5 gap-3 my-3 items-start">
              <a
                href={personalInfo.linkedIn}
                target="_blank"
                rel="noreferrer"
                className="flex justify-center flex-row items-center gap-2">
                <AiFillLinkedin
                  style={{ color: "white", height: "30px", width: "30px" }}
                />
                <span className="text-[#7fffd4] font-bold">LinkedIn</span>
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="flex justify-center flex-row items-center gap-2">
                <AiOutlineGithub
                  style={{ color: "white", height: "30px", width: "30px" }}
                />
                <span className="text-[#7fffd4] font-bold">GitHub</span>
              </a>
              <a
                href={personalInfo.twitter}
                target="_blank"
                rel="noreferrer"
                className="flex justify-center flex-row items-center gap-2">
                <AiOutlineTwitter
                  style={{ color: "white", height: "30px", width: "30px" }}
                />
                <span className="text-[#7fffd4] font-bold">Twitter</span>
              </a>
              <a
                href="mailto:mumojames98@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="flex justify-center flex-row items-center gap-2">
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
                  placeholder="Message:"></textarea>
                <button className="btn transition-all duration-500 bg-primary py-2 px-12 rounded text-white hover:bg-white hover:text-primary block">
                  Send
                </button>
              </form>
            </div>
          </div>
        </span>
      </div>
    </div>
  )
}

export default Contact
