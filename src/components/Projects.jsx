import React from "react"

const Projects = () => {
  const projects = [
    {
      title: "TWINDER",
      description:
        "A live Geolocation app for finding tweets and twitter users around you.",
      photo: "/src/assets/projects/img1.png",
    },
    {
      title: "LIVENTS",
      description:
        "A video streaming app with live Geolocation, for streaming events.",
      photo: "/src/assets/projects/img2.png",
    },
    {
      title: "MOOVE",
      description:
        "Mobile app for booking instant pickup & dropoff accross major cities.",
      photo: "/src/assets/projects/img3.png",
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
