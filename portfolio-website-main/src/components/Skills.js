import React from "react";

// import skill data
import { skills } from "../data";

const Skills = () => {
  return (
    <section className="bg-tertiary py-12">
      <h1 style={{ textAlign: "center", fontSize: "25px" }}>Tech Skills</h1>
      <div className="container mx-auto">
        <div className="grid grid-cols-7 md:grid-flow-col">
          {skills.map((skill, index) => {
            return (
              <div className="flex items-center justify-center" key={index}>
                <img className="lg:h-20" src={skill.image} alt="" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
