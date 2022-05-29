// Change website animations
const animation = {
  // make it false to switch off fade-up animation
  animate: true,
  // animation playing duration
  duration: 750,
  // if true, animation plays only once when element comes on screen
  once: false,
};
// Change your display name on tha landing display
const header = {
  name: "Manikandan",
};
const background = {
  // Options: Snow or Particle
  type: "Snow",
};
// Write a para about yourself here
// To update your image, go to './styles/images.css'
const section2title = "About Me";
const about = {
  paragraph:
    " Expert in Responsive Web Design and analyzing and fixing UI bugs quickly.Proficiency in code optimization to improve performance.",
};
// Edit your skill and the percentage you know about it
// To Add a skill, copy any one below and paste it after the last comma
const skillsBar = [
  {
    name: "HTML5",
    // To add a custom svg instead of font-awesome icons, add svg path below otherwise just comment it out
    svg: "M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z",
    faClass: "fab fa-html5",
  },
  {
    name: "CSS3",
    // svg: '',
    faClass: "fab fa-css3",
  },
  {
    name: "Javascript",
    // svg: '',
    faClass: "fab fa-js",
  },
  {
    name: "Node",
    // svg: '',
    faClass: "fab fa-node",
  },
  {
    name:"React",
    faClass:"fab fa-react",
  }
];
// Edit your projects, its name, your skills used to make it, and the url.
// You can omit freely anything if you dont have it
// To Add a Project, copy any one below and paste it after the last comma and increment the id's project number
const section3Title = "Past Projects";
const projects = [
  {
    // Add image in './styles/images.css' in #project1
    id: "project1",
    name: "Bath & Body works Clone",
    skills: ["HTML, CSS, JS"],
    url: "https://github.com/Arfeen98/Bathanbodyworks-clone",
  },
  // {
  //   // Add image in './styles/images.css' in #project2
  //   id: "project2",
  //   name: "Croma Clone",
  //   skills: ["HTML, CSS, JS"],
  //   url: "https://github.com/abhinavBisht94/croma-clone-web16-u3.git",
  // },
  {
    // Add image in './styles/images.css' in #project3
    id: "project3",
    name: "Orbitz Clone",
    skills: ["React"],
    url: "https://github.com/KalashThakur/Orbitz/tree/main/CW%20PROJECT/orbitz-clone-master",
  },
];
// Edit your Miscellaneous Activities, its name and the url.
// You can omit freely anything if you dont have it
// To Add a Activity, copy any one below and paste it after the last comma and increment the id's Miscellaneous number
// Contact form text, and Formspree link(to send a submit contact through their API as in contact.js)
// To get your own jotform link, go to https://formspree.io/
// If you hacve the link already, paste it in the contactUrl below
const section5Title = "Get in Touch";
const contact = {
  pitch:
    "Are you looking for a fast-performing and user-friendly website to represent your product or business? or looking for any kind of consultation? or want to ask questions? or have some advice for me or just want to say Hi 👋 in any case feel free to Let me know. I will do my best to respond back. 😊 The quickest way to reach out to me is via an email.",
  copyright: "Manik",
  contactUrl: "",
};
// Paste your respective social media links. You can omit any if you dont have it
// Upload your resume in your drive, get the shaareable link and paste it in the resume section
const social = {
  github: "https://github.com/manik1848",
  facebook: "https://facebook.com",
  // twitter: "https://twitter.com",
  instagram: "https://www.instagram.com/_manik_prakash_/",
  linkedin: "https://www.linkedin.com/in/manikandan-p-427237238/",
  resume: "https://drive.google.com/file/d/1C2iYHvUUHOhH0SBl2sOpPEBX0nzEd78M/view?usp=sharing",
};
// Dont change anything here
export {
  animation,
  header,
  background,
  about,
  skillsBar,
  projects,
  contact,
  social,
  section2title,
  section3Title,
  section5Title,
};
