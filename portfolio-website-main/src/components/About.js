import React from "react";

// import img
import Image from "../assets/img/about.webp";
import jaiImage from "../assets/img/jai.png";
import styles from "../components/about.module.css";

const About = () => {
  return (
    <section className="section bg-secondary" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-24">
          {/* <img
          // className="object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl"
          // src={jaiImage}
          // alt=""
          /> */}

          <div
            // className="object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl about_contact"

            // style={{
            //   display: "flex",
            //   justifyContent: "center",
            //   flexDirection: "column",
            // }}
            className={styles.about_contact}
          >
            <h1 style={{}}>
              <i className="fa-solid fa-at"></i> Email{" "}
            </h1>
            <h2>jksingh00739@gmail.com</h2> <br />
            <br />
            <br />
            <h1 style={{}}>
              {" "}
              <i className="fa-solid fa-phone"></i> Contact
            </h1>
            <h2>9098987322</h2>
          </div>
          <div
            // className="object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl"
            // style={{
            //   display: "flex",
            //   justifyContent: "center",
            //   flexDirection: "column",
            // }}
            className={styles.about_contact}
          >
            <a
              href="https://www.linkedin.com/in/jai-krishna-singh/"
              target={"_blank"}
            >
              {" "}
              <h1 style={{}}>
                {" "}
                <i className="fa-brands fa-linkedin-in"></i> LinkedIn
              </h1>
            </a>
            <h2>jai-krishna-singh</h2>

            <br />
            <br />
            <br />
            <a href="https://github.com/JaiS739" target={"_blank"}>
              {" "}
              <h1>
                {" "}
                <i className="fa-brands fa-github"></i> Github
              </h1>
            </a>
            <h2>JaiS739</h2>
          </div>

          <div className={styles.about_contact}>
            {/* <div className="flex flex-col"> */}
            <div className={styles.about_contact}>
              <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block">
                Jai Krishna Singh
              </h2>
              <p className="mb-4 text-accent">MERN Stack Web Developer</p>
              <hr className="mb-8 opacity-5" />
              <p className="mb-8">
                A MERN FULL STACK DEVELOPER 💻. Specializing in JavaScript have
                in-depth knowledge of HTML, CSS, JavaScript, React.js, Node.js,
                MongoDB, Express.js and Git. A collaborative team player with
                excellent technical abilities, <br />
              </p>
            </div>

            <div>
              <a
                href="https://drive.google.com/file/d/1--qNjveJdPpTGGwOs8sYLiQgr3tex7Kz/view"
                target={"_blank"}
              >
                {" "}
                <button className="btn btn-md bg-accent hover:bg-secondary-hover transition-all">
                  See My Resume
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
