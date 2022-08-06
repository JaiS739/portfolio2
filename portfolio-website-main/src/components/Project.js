import React from "react";

const Project = ({ item }) => {
  return (
    <div key={item.id} className="flex flex-col items-center text-center">
      <div className="mb-8">
        <img className="rounded-2xl" src={item.pImg} alt="" />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignContent: "center",
          padding: "0px",
          width: "80%",
        }}
      >
        <a href={item.live} target={"_blank"}>
          <p className="capitalize text-accent text-m mb-3">Live</p>
        </a>
        <a href={item.github} target={"_blank"}>
          <p className="capitalize text-accent text-m mb-3">Github Repo</p>
        </a>
      </div>

      <h3 className="text-2xl font-semibold capitalize mb-3">{item.pName}</h3>

      <p className="text-base max-w-md  ">{item.des}</p>

      <div className="mt-8">
        <h3 className="text-2xl font-semibold capitalize mb-3">
          Tech Stack Used
        </h3>
        <h3 className="text-l font-semibold capitalize mb-3">{item.tech}</h3>
      </div>
    </div>
  );
};

export default Project;
