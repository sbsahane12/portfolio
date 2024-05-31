

import React from "react";
import { FaBootstrap, FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiMongodb, SiMysql, SiPostgresql } from "react-icons/si";
import grocerGenieImg from "@/public/grocergenie.png";
import chatAppImg from "@/public/chatapp.png";
import HeartImg from "@/public/heart.png";
import cottonImg from "@/public/cotton.png";
import CaptchImg from "@/public/captcha.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },

 
] as const;

export const experiencesData = [
  {
    title: "Full Stack Web Developer",
    location: "Pune, Maharashtra, India",
    description:
      "Highly skilled Full Stack Developer with expertise in the MERN (MongoDB, Express.js, React, Node.js) stack. Proficient in building end-to-end web applications, from designing and developing front-end user interfaces to implementing robust back-end servers and databases. Passionate about creating seamless user experiences and delivering high-quality, scalable solutions. Strong problem-solving abilities, with a keen eye for detail and a commitment to writing clean, maintainable code.",
    icon: React.createElement(FaNodeJs),
    date: "Present",
  },
] as const;

export const projectsData = [
  {
    title: "Sahil Kirana Store",
    description:
      "Developed an innovative full-stack e-commerce platform called 'Kirana Store' using the MERN stack, designed to revolutionize the online grocery shopping experience.",
    tags: ["React", "Redux", "Node.js", "Express.js", "MongoDB", "AWS"],
    imageUrl: grocerGenieImg,
  },
  {
    title: "Real-time Chat Application",
    description:
      "Designed and implemented a real-time chat application using Socket.IO, enabling instant messaging and group conversations.",
    tags: ["React", "Node.js", "Socket.IO", "MongoDB", "JWT"],
    imageUrl: chatAppImg,
  },

  {
    title: "Multifunctional Health Monitoring Cot",
    description: "Built a model to predict the likelihood of heart disease based on various health parameters, facilitating early diagnosis and treatment.",
    tags: ["Python", "sci-kit-learn", "Machine Learning"],
    imageUrl: HeartImg,
  },
  {
    title: "Cotton Disease Prediction",
    description: "Developed a model to classify images of cotton leaves into healthy or diseased categories, enabling early detection and treatment of crop diseases.",
    tags: ["Python", "TensorFlow", "Deep Learning"],
    imageUrl: cottonImg,
  },
  {
    title: "Image Captioning with Deep Learning",
    description: "Developed a deep learning model that generates descriptive captions for images, enabling visually impaired individuals to understand image content.",
    tags: ["Python", "TensorFlow", "Deep Learning"],
    imageUrl: CaptchImg,
  },

] as const;


export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
    "Java",
    "Visual Studio Code",

    "Anaconda Navigator",
    "Jupyter Notebook/Lab",

    "Data Science",
    "Machine Learning",

    "AWS",
] as const;
