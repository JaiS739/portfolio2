import React, { useState, useEffect } from "react";

// images from assets:

import sugar_cosmetic from "../assets/img/sugar_cosmetic.PNG";
import uboric from "../assets/img/uboric.PNG";
import amazon_prime from "../assets/img/amazon_prime.PNG";

// import data
import { projectsData } from "../data";
import { projectsNav } from "../data";

// import components
import Project from "./Project";

const projectData = [
  {
    id: 1,
    pImg: uboric,
    pName: "Uboric.com",
    tech: "React || Redux || ChakraUI || React-Router",
    des: "This is my first project in which I used ReactJs and Redux for the first time.",
    live: "https://near-steel-1499.vercel.app/",
    github: "https://github.com/sarikasingh30/near-steel-1499",
  },
  {
    id: 2,
    pImg: sugar_cosmetic,
    pName: "Sugar Cosmetic",
    tech: "HTML || CSS || JavaScript || JQuery",
    des: "My project makes use of vast variety of technologies like HTML, CSS, JavaScript, JQuery. It was my best experience to create Sugar Cosmetics Clone.",
    live: "https://jais739.github.io/Sugar-Cosmetic/",
    github: "https://github.com/JaiS739/Sugar-Cosmetic",
  },
  {
    id: 3,
    pImg: amazon_prime,
    pName: "Amazon Prime Video",
    tech: "HTML || CSS || JavaScript",
    des: "This is the first project of career.",
    live: "https://legendary-lamington-49dbab.netlify.app/",
    github: "https://github.com/Deep1897/PRIME-VIDEO",
  },
];

const Projects = () => {
  const [item, setItem] = useState({ name: "all" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    // get projects based on item
    if (item.name === "all") {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter((project) => {
        return project.category.toLowerCase() === item.name;
      });
      setProjects(newProjects);
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent.toLowerCase() });
    setActive(index);
  };

  return (
    <div>
      {/* projects nav */}
      {/* <nav className='mb-12 max-w-xl mx-auto'>
        <ul className='flex flex-col md:flex-row justify-evenly items-center text-white'>
          {projectsNav.map((item, index) => {
            return (
              <li
                onClick={(e) => {
                  handleClick(e, index);
                }}
                className={`${
                  active === index ? 'active' : ''
                } cursor-pointer capitalize m-4`}
                key={index}
              >
                {item.name}
              </li>
            );
          })}
        </ul>
      </nav> */}
      {/* projects */}
      <section className="grid gap-y-12 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-8">
        {projectData.map((item) => {
          return <Project item={item} key={item.id} />;
        })}
      </section>
    </div>
  );
};

export default Projects;
