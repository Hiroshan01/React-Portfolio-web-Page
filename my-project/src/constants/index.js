import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am Hiroshan Madusanka Kumara, a dedicated and adaptable full-stack developer pursuing a Bachelor of Information Technology (Honours) in Network & Mobile Computing at Horizon Campus, Malabe, Sri Lanka. As an undergraduate, I have gained hands-on experience in developing robust web applications using front-end technologies like React and backend tools such as Node.js, Express, and MongoDB. My projects include a MERN stack hotel management system and an advanced React portfolio website, which demonstrate my skills in creating efficient, scalable, and user-friendly applications.

Driven by a passion for innovation, I am eager to apply my technical expertise and problem-solving skills to build impactful solutions that enhance user experiences and support business growth. With a strong foundation in JavaScript, Python, and full-stack development, I am constantly learning and adapting to new frameworks, making me well-prepared to contribute to dynamic development teams.`;

export const ABOUT_TEXT = `I am Hiroshan Madusanka Kumara, a dedicated and versatile full-stack developer with a passion for creating efficient and user-friendly web applications. Currently pursuing a Bachelor of Information Technology (Honours) in Network & Mobile Computing at Horizon Campus in Malabe, Sri Lanka, I have built a solid foundation in both front-end and back-end technologies, including React, Node.js, MySQL, MongoDB, and more.

My journey in web development began with a curiosity for understanding how things work, and it has evolved into a focused pursuit of mastering full-stack development. I thrive in collaborative environments, enjoy tackling complex challenges, and am always eager to learn and adapt to new frameworks and technologies.

With experience in projects like a MERN stack hotel management system and an advanced portfolio website, I am committed to delivering high-quality, scalable solutions. Outside of coding, I stay active by exploring the latest tech trends and contributing to open-source projects, always looking for ways to grow and share my knowledge with the development community..`;

export const EXPERIENCES = [
  {
    year: "2021 - Present",
    role: "Full Stack Web Development Intern",
    company: "Horizon Campus(Academic Final year Projects Ongoing)",
    description: `Currently pursuing a Bachelor of Information Technology (Hons) in Network & Mobile Computing. Engaged in developing an AI-powered phishing email detection system that integrates machine learning and deep learning models, enhancing my Python skills and understanding of cybersecurity.`,
    technologies: [, "Python", "Machin Learning","Deep Learning"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Academic Projects",
    description: `Designed and developed user interfaces for web applications using React. Created a dynamic portfolio website, optimizing performance and ensuring responsive design.`,
    technologies: ["HTML", "CSS", "React"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "MERN Stack Hotel Management System",
    description: `Developed and maintained a hotel management system using the MERN stack. Implemented RESTful APIs and integrated MongoDB databases, collaborating with team members to define project requirements.`,
    technologies: ["JavaScript", "React.js", "Node.js", "MongoDB"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer Intern",
    company: "Various Freelance Projects",
    description: `Contributed to the development of web applications using JavaScript and React. Gained experience in managing databases and implementing data storage solutions.`,
    technologies: ["JavaScript", "React", "Node.js", "MongoDB"],
  },
];


export const PROJECTS = [
  {
    title: "AI-Powered Phishing Email Detection (Ongoing)",
    image: project1,
    description: "This project aims to develop an AI-driven system for detecting phishing emails. By leveraging machine learning and natural language processing techniques, the system analyzes email content and patterns to identify malicious links and phishing attempts. The backend, built with Python and Flask, integrates machine learning models trained with TensorFlow and Scikit-Learn for predictive accuracy. MongoDB is used as the database to store email data, ensuring efficient data retrieval and management. This project addresses growing cybersecurity threats and provides a scalable solution to enhance email security.",

    technologies: ["Python", "Machine Learning", "Deep Learning", "Natural Language Processing", "Flask", "TensorFlow", "Scikit-Learn", "MongoDB"],
   

  },
  {
    title: "Hotel Management System",
    image: project2,
    description:
      "A full-stack hotel management application with an admin panel for managing bookings, a gallery, user authentication, and a responsive design using Tailwind CSS.",
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "Tailwind CSS", "JWT Authentication"],
  }
  ,
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Malicious URL Detection Using Machine Learning",
    image: project4,
    description:
      "This is team project, In here, We use ML model to detect malicious URL like Random Forest, LightGBM and XBoot. My part is features Engineering part. We have completed research for this.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "Colombo Sri Lanka ",
  phoneNo: "+94 770462380 ",
  email: "pmhiroshan@gmail.com",
};
