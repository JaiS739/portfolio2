import React from "react";

import logo from "../assets/img/logo.svg";

// import services data
import { services } from "../data";

// eduction:-

const education = [
  {
    id: 1,
    degree: "BE (Mechanical Engineer)",
    passing: "Aug 2013 - July 2018",
    clg: "Mathura Devi Institution",
    link: "http://www.mathuradevigroupofinstitutions.com/",
    img: "http://www.mathuradevigroupofinstitutions.com/Images/logo_new.png",
  },
  {
    id: 2,
    degree: "Full Stack Web Developer",
    passing: "Jan 2022 - Aug 2022",
    clg: "Masai School",
    link: "https://www.masaischool.com/",
    img: "https://www.masaischool.com/img/navbar/logo.svg",
  },
];

const Education = () => {
  return (
    <section id="services" className="section bg-tertiary">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title before:content-services relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-28 before:hidden before:lg:block">
            Education
          </h2>
          <p className="subtitle">Basic Qualification and Certifcations</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-8">
          {education.map((service, index) => {
            const { degree, passing, clg, link, img } = service;
            return (
              <a href={link}>
                <div
                  className="bg-secondary p-6 rounded-2xl"
                  key={index}
                  style={{ textAlign: "center", backgroundColor: "grey" }}
                >
                  <div className="text-accent rounded-sm w-14 h-12 flex justify-center items-center mb-0 text-[0px]">
                    <img src={img} />
                  </div>

                  <h4 className="text-xl font-medium mb-2">{clg}</h4>
                  <h4 className="text-l font-medium mb-2">{degree}</h4>
                  <h4 className="text-md font-medium mb-2">{passing}</h4>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;
