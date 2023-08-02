import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "MERNDASH",
      description:
        "This is a simple admin dashboard built using the MERN stack (MongoDB, Express, React, Node.js) for managing and visualizing data. It features both dark and light themes, utilizing Material-UI tables, Nivo charts, and maps.",
      photo:
        "https://res.cloudinary.com/jamesmumo/image/upload/v1687262810/portfolioImages/merndash_zpxhxl.png",
      seeCode: "https://github.com/james-mumo/mern-admin-dash",
      visitApp: "https://mern-admin-dash.vercel.app/dashboard",
    },
    {
      title: "ECOMMERCE",
      description:
        "This is a live selling e-commerce app built using the MERN stack (MongoDB, Express, React, Node.js). It features both functionalitite such that sellere can create live trading sessions and buyers can attend and view the events.",
      photo:
        "https://res.cloudinary.com/djv535hkn/image/upload/v1687419984/easybuy/easyBuy_ochis1.png",
      seeCode: "https://github.com/james-mumo/easybuy-mern-frontend",
      visitApp: "https://easybuy-mern.vercel.app/",
    },
    {
      title: "CREDITFIT",
      description:
        "CreditFit is a website for a firm that helps users manage their credit cards funds and offer fraud and card security functions. The Website was buildt with React and Material-UI with styling made by use of tailwind Css.",
      photo:
        "https://res.cloudinary.com/djv535hkn/image/upload/v1687420563/easybuy/creditfit_wuthjy.png",
      seeCode: "https://github.com/james-mumo/creditfit-react",
      visitApp: "https:/creditfit.vercel.app/",
    },
    {
      title: "TUBONGE",
      description:
        "This Android application is developed as a final year project to address mental health concerns. The application provides a comprehensive set of features to support users in managing their mental well-being.",
      photo:
        "https://res.cloudinary.com/jamesmumo/image/upload/v1687262895/portfolioImages/collage_ij5elu.png",
      seeCode: "https://github.com/james-mumo/tubonge-mental-app",
      visitApp:
        "https://raw.githubusercontent.com/james-mumo/tubonge-mental-app/main/tubonge.apk",
    },
    {
      title: "RENT HUB",
      description:
        "A React Native app that helps users find rentals in various locations. It allows users to filter their search based on various parameters such as location, price range, and number of rooms with detailed information about each rental, including images, features, and amenities.",
      photo:
        "https://res.cloudinary.com/jamesmumo/image/upload/v1687262894/portfolioImages/renthub_hpacff.png",
      seeCode: "https://github.com/james-mumo/rental-hub-rn",
      visitApp: "https://github.com/james-mumo/rental-hub-rn",
    },
    {
      title: "VUE ADMIN",
      description:
        "A Vue Js Admin DashBoard For Making Visualisations and Summary by use of Charts and Graphs. The App also acts as an inventory for an Ecommerce Store. An Analytics & Mailing Functionalities are also provided.",
      photo:
        "https://res.cloudinary.com/djv535hkn/image/upload/v1687423793/easybuy/vue_xikbrd.png",
      seeCode: "https://github.com/james-mumo/dash-vuejs/tree/main",
      visitApp: "https://vuejsdash.vercel.app/",
    },
    {
      title: "Prestige Link - MERN",
      description:
        "This is a MERN web App of a Hardware Shop Called Prestige Link. It has cart, login and signup functionalities as well as Admin functionalities such as Adding New Products, Editing and Updating Existing Projects.",
      photo:
        "https://res.cloudinary.com/djv535hkn/image/upload/v1690996037/Screenshot_from_2023-08-02_20-06-55_ct55zk.png",
      seeCode: "https://github.com/james-mumo/mern-hardware-react",
      visitApp: "https://mern-hardware-react.vercel.app/",
    },
    {
      title: "NETFLIX Clone - React",
      description:
        'This is a netflix clone app in React which makes use of the "themoviedb" api. The api provides various endpoints for Latest, Top Rated, and Trending Movies as well as Sorting Movies By Genre.',
      photo:
        "https://res.cloudinary.com/djv535hkn/image/upload/v1690998915/Screenshot_from_2023-08-02_20-54-48_fiwu3o.png",
      seeCode: "https://github.com/james-mumo/netflix-clone",
      visitApp: "https://james-netflix.vercel.app/",
    },
    {
      title: "Gadgets-Store React",
      description:
        "This is a React Electronics Online Store that makes use of Firebase for Authentication and Real-Time Data Storage. The App also has various functionalities such as Search, Cart, Signup and Login.",
      photo:
        "https://res.cloudinary.com/djv535hkn/image/upload/v1691004155/Screenshot_from_2023-08-02_22-22-15_it7rju.png",
      seeCode: "https://github.com/james-mumo/Gadget-Store-React",
      visitApp: "https://gadget-store-react.vercel.app",
    },
  ];
  return (
    <div className="md:px-10 px-7 my-10 mt-16" id="projects">
      <span className="flex items-center">
        <hr className="border-t border-teal-400 mx-1 w-4" />
        <span className="text-primary text-1xl md:text-3xl font-semibold">
          Featured projects
        </span>
        <hr className="border-t border-teal-400 mx-1 flex-grow" />
      </span>
      <div className="flex flex-col bg-[#01d29313] items-center mt-5">
        <p className="my-1 text-white leading-[2]">
          I have worked on many projects over the course of being a Developer,
          here are a few of my live, real-world projects.
        </p>
        {/* featured projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 my-3 items-center justify-center lg:pl-8 w-full">
          {projects.map((project, index) => {
            return (
              <div
                key={index}
                className="my-6 flex flex-col shadow-sm md:w-[343px] bg-[#011b27] p-4 rounded border border-emerald-400"
              >
                <a
                  href={project.photo}
                  target="_blank"
                  rel="noreferrer"
                  className="mb-4"
                >
                  <img src={project.photo} alt={project.title} />
                </a>
                <h3 className="text-primary font-semibold text-lg">
                  {project.title}
                </h3>
                <p className=" text-white mt-1">{project.description}</p>
                <div className="mt-5 flex justify-center">
                  <a target="_blank" href={project.visitApp}>
                    <button className="btn transition-all duration-500 bg-primary py-2 px-5 rounded text-white hover:bg-white hover:text-primary">
                      View
                    </button>
                  </a>
                  <a target="_blank" href={project.seeCode}>
                    <button className="btn border-2 border-emerald-600 py-1.5 px-3 rounded  ml-5 text-white ">
                      See Code
                    </button>
                  </a>
                </div>
              </div>
            );
          })}
        </div>{" "}
{/*         <span className="flex items-center mt-3 w-full">
          <hr className="border-t border-teal-400 mx-1 w-4" />
          <button className="text-xl md:text-xl font-semibold border border-teal-400 p-1 rounded-md cursor-pointer transition-all duration-200 bg-primary text-white hover:bg-[#011b27] hover:text-primary">
            View More
          </button>
          <hr className="border-t border-teal-400 mx-1 flex-grow" />
        </span> */}
      </div>
      <hr className="flex-grow mx-0 mt-3 border-t border-teal-400" />
    </div>
  );
};

export default Projects;
