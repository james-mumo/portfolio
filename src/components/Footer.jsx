import React from "react"
import { personalInfo } from "../data/personalInfo"

const Footer = () => {
  return (
    <div className="text-white opacity-50 flex flex-col md:flex-row justify-center items-center my-5">
      <p>
        @ Copyright {new Date().getFullYear()} | {personalInfo.fullName}
      </p>
    </div>
  )
}

export default Footer
