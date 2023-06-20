import React from "react"

const Projects = () => {
  const projects = [
    {
      title: "MERNDASH",
      description:
        "This is a simple admin dashboard built using the MERN stack (MongoDB, Express, React, Node.js) for managing and visualizing data. It features both dark and light themes, utilizing Material-UI tables, Nivo charts, and maps.",
      photo:
        "https://res.cloudinary.com/jamesmumo/image/upload/v1687262810/portfolioImages/merndash_zpxhxl.png",
    },
    {
      title: "TUBONGE",
      description:
        "This Android application is developed as a final year project to address mental health concerns. The application provides a comprehensive set of features to support users in managing their mental well-being.",
      photo:
        "https://res.cloudinary.com/jamesmumo/image/upload/v1687262895/portfolioImages/collage_ij5elu.png",
    },
    {
      title: "Rent Hub",
      description:
        "A React Native app that helps users find rentals in various locations. It allows users to filter their search based on various parameters such as location, price range, and number of rooms with detailed information about each rental, including images, features, and amenities.",
      photo:
        "https://res.cloudinary.com/jamesmumo/image/upload/v1687262894/portfolioImages/renthub_hpacff.png",
    },
  ]
  return (
    <div className="md:px-10 px-7 my-8" id="projects">
      <span className="flex items-center">
        <hr className="border-t border-teal-400 mx-1 w-4" />
        <span className="text-primary text-1xl md:text-3xl font-semibold">
          Featured projects
        </span>
        <hr className="border-t border-teal-400 mx-1 flex-grow" />
      </span>

      <p className="my-3 text-white leading-[2]">
        I have worked on many projects over the course of being a Developer,
        here are a few of my live, real-world projects.
      </p>
      {/* featured projects */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 my-6 items-center justify-center">
        {projects.map((project, index) => {
          return (
            <div
              key={index}
              className="flex flex-col shadow-sm md:w-[343px] bg-[##011627] p-4 rounded border border-emerald-400">
              <a
                href={project.photo}
                target="_blank"
                rel="noreferrer"
                className="mb-4">
                <img src={project.photo} alt={project.title} />
              </a>
              <h3 className="text-primary font-semibold text-lg">
                {project.title}
              </h3>
              <p className=" text-white mt-1">{project.description}</p>
              <div className="mt-5 flex justify-center">
                <button className="btn transition-all duration-500 bg-primary py-2 px-5 rounded text-white hover:bg-white hover:text-primary">
                  View
                </button>
                <button className="btn border-2 border-emerald-600 py-1.5 px-3 rounded  ml-5 text-white ">
                  See Code
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Projects
