//  icons
import {
  FiYoutube,
  FiInstagram,
  FiGithub,
  FiDribbble,
  FiLayout,
  FiSettings,
  FiPenTool,
  FiTag,
  FiMail,
  FiMapPin,
  FiLinkedin,
} from "react-icons/fi";

// companies icons
import FreelancerBrandIcon from "./assets/img/brands/freelancer.png";
import UpworkBrandIcon from "./assets/img/brands/upwork.png";
import FiverBrandIcon from "./assets/img/brands/fiverr.png";
import BehanceBrandIcon from "./assets/img/brands/behance.png";
import DribbbleBrandIcon from "./assets/img/brands/dribbble.png";

// projects images
import Project1 from "./assets/img/projects/p1.webp";
import Project2 from "./assets/img/projects/p2.webp";
import Project3 from "./assets/img/projects/p3.webp";
import Project4 from "./assets/img/projects/p4.webp";
import Project5 from "./assets/img/projects/p5.webp";
import Project6 from "./assets/img/projects/p6.webp";

// work images:

import tp from "../src/assets/img/tp.png";
import continuum from "../src/assets/img/continuum.png";

// skills images
import SkillImg1 from "./assets/img/skills/html5.png";
import SkillImg2 from "./assets/img/skills/css3.png";
import SkillImg3 from "./assets/img/skills/js.png";
import SkillImg4 from "./assets/img/skills/reactjs.png";
import SkillImg5 from "./assets/img/skills/mongo.png";
import SkillImg6 from "./assets/img/skills/nodejs.png";
import SkillImg7 from "./assets/img/skills/git.png";
// import SkillImg8 from "./assets/img/skills/express js.png";

// testimonial images
import TestiImage1 from "./assets/img/testimonials/testimonial-1.webp";
import TestiImage2 from "./assets/img/testimonials/testimonial-2.webp";
import TestiImage3 from "./assets/img/testimonials/testimonial-3.webp";

// work experience:-

export const workE = [
  {
    img: tp,
    comp: "Teleperformance",
    job: "Customer Support Executive",
    res: "Sep 2017- Feb 2019",
    role: "I used to support US customers with their queries and complaints.",
  },
  {
    img: continuum,
    comp: "Continuum Global Solutions",
    job: "Senior Intent Analyst",
    res: "Mar 2019- Jan 2022",
    role: "I used to support Indian customers with their queries regarding our product and help them to understand the different aspects of our product.",
  },
];

// navigation
export const navigation = [
  {
    name: "home",
    href: "home",
  },
  {
    name: "about",
    href: "about",
  },
  {
    name: "portfolio",
    href: "portfolio",
  },
  {
    name: "education",
    href: "services",
  },
  {
    name: "experience",
    href: "testimonials",
  },
  {
    name: "contact",
    href: "contact",
  },
];

// social
export const social = [
  // {
  //   icon: <FiYoutube />,
  //   href: "",
  // },
  // {
  //   icon: <FiInstagram />,
  //   href: "",
  // },
  {
    icon: <FiGithub />,
    href: "https://github.com/JaiS739",
  },
  {
    icon: <FiLinkedin />,
    href: "https://www.linkedin.com/in/jai-krishna-singh/",
  },
];

// companies
export const brands = [
  {
    img: FreelancerBrandIcon,
    href: "",
  },
  {
    img: UpworkBrandIcon,
    href: "",
  },
  {
    img: FiverBrandIcon,
    href: "",
  },
  {
    img: BehanceBrandIcon,
    href: "",
  },
  {
    img: DribbbleBrandIcon,
    href: "",
  },
];

// projects
export const projectsData = [
  {
    id: "1",
    image: Project1,
    name: "Sugar Cosmetic",
    category: "UI/UX design",
  },
  {
    id: "2",
    image: Project2,
    name: "Uboric.com",
    category: "web development",
  },
  {
    id: "3",
    image: Project3,
    name: "amzon prime",
    category: "UI/UX design",
  },
  // {
  //   id: "4",
  //   image: Project4,
  //   name: "project name 4",
  //   category: "branding",
  // },
  // {
  //   id: "5",
  //   image: Project5,
  //   name: "project name 5",
  //   category: "web development",
  // },
  // {
  //   id: "6",
  //   image: Project6,
  //   name: "project name 6",
  //   category: "web development",
  // },
];

// projects
// export const projectsNav = [
//   {
//     name: "all",
//   },
//   {
//     name: "UI/UX Design",
//   },
//   {
//     name: "web development",
//   },
//   {
//     name: "branding",
//   },
// ];

// skill
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg5,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg6,
  },
  {
    image: SkillImg7,
  },
  // {
  //   image: SkillImg8,
  // },
];

// services
export const services = [
  {
    icon: <FiLayout />,
    name: "Web Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.",
  },
  {
    icon: <FiSettings />,
    name: "Web Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.",
  },
  {
    icon: <FiPenTool />,
    name: "Branding",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.",
  },
  {
    icon: <FiTag />,
    name: "SEO",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.",
  },
];

// testimonials
export const testimonials = [
  {
    authorImg: TestiImage1,
    authorText:
      "Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.",
    authorName: "Olivia Doe",
    authorPosition: "Head of Design, Google",
  },
  {
    authorImg: TestiImage2,
    authorText:
      "Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.",
    authorName: "Olivia Doe",
    authorPosition: "Head of Design, Google",
  },
  {
    authorImg: TestiImage3,
    authorText:
      "Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.",
    authorName: "Olivia Doe",
    authorPosition: "Head of Design, Google",
  },
];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: "Have a question?",
    subtitle: "I am here to help you.",
    description: "Email me at jksingh00739@gmail.com",
    // rlink: "#",
  },
  {
    icon: <FiMapPin />,
    title: "Current Location",
    subtitle: "Indore, India",
    description: "Please Visit Once",
    rlink:
      "https://www.google.com/maps/place/Indore,+Madhya+Pradesh/@22.7239114,75.7234169,11z/data=!4m5!3m4!1s0x3962fcad1b410ddb:0x96ec4da356240f4!8m2!3d22.7195687!4d75.8577258",
  },
];
