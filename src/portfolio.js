/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Nugroho",
  title: "Hi there! I’m Nugroho (Nugi)",
  subTitle: emoji(
    "A backend developer with over 3 years of experience in creating efficient and scalable solutions. Explore my projects and expertise, and feel free to reach out if you’d like to collaborate or chat!"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/napaledhaub",
  linkedin: "https://www.linkedin.com/in/nugroho-w-b9ba51211",
  gmail: "buahdelapan@protonmail.com",
  whatsapp: "https://wa.me/6289530960107",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: " I specialize in building robust and scalable server-side applications. With over 3 years of experience in .NET",
  skills: [
    emoji(
      "⚡ Excel at creating efficient APIs, services, SSIS, and generating detailed reports"
    ),
    emoji("⚡ Manage various databases, including SQL Server, PostgreSQL, etc"),
    emoji(
      "⚡ Proficient in C#, Golang, and Spring Boot, which allows me to adapt to diverse project requirements and leverage the best tools for each task"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Postgre SQL",
      iconUrl: "https://cdn.simpleicons.org/PostgreSQL"
    },
    {
      skillName: "Git",
      iconUrl: "https://cdn.simpleicons.org/git"
    },
    {
      skillName: ".Net",
      iconUrl: "https://cdn.simpleicons.org/.Net"
    },
    {
      skillName: "Docker",
      iconUrl: "https://cdn.simpleicons.org/Docker"
    },
    {
      skillName: "Golang",
      iconUrl: "https://cdn.simpleicons.org/Go"
    },
    {
      skillName: "Jira",
      iconUrl: "https://cdn.simpleicons.org/Jira"
    },
    {
      skillName: "Java Spring",
      iconUrl: "https://cdn.simpleicons.org/Spring"
    },
    {
      skillName: "MySQL",
      iconUrl: "https://cdn.simpleicons.org/MySQL"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Binus University",
      logo: require("./assets/images/binusLogo.png"),
      subHeader: "School of Computer Science",
      duration: "September 2018 - April 2022",
      desc: "Completed coursework in mobile app development, gaining hands-on experience in designing and implementing web applications and farious appCompleted coursework in mobile app development and gained experience in web development, data analysis, and various roles within the field of computer science.",
      descBullets: [
        "Focused in database management and software developing",
        "Graduated with an IPK of 3.64"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "30%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "80%"
    },
    {
      Stack: "Programming",
      progressPercentage: "70%"
    },
    {
      Stack: "Database",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Backend Developer",
      company: "Asuransi Astra Buana",
      companylogo: require("./assets/images/aabLogo.jpg"),
      date: "May 2023 – Present",
      desc: "In my current role as a Backend Developer, I focus on building scalable server-side applications using .NET Framework, similar to my internship. However, I now utilize the Scrum methodology to enhance team collaboration and streamline the development process. This experience has not only strengthened my technical skills but also improved my ability to work in an agile environment, delivering high-quality solutions in a timely manner."
    },
    {
      role: "ERP Developer",
      company: "Metrodata",
      companylogo: require("./assets/images/metrodataLogo.png"),
      date: "Feb 2022 – May 2023",
      desc: "In my role as a Technical Consultant, I focused on developing solutions for Oracle ERP, specifically working with Oracle E-Business Suite (EBS). My responsibilities included customizing and optimizing modules to meet client requirements, integrating various systems, and providing technical support. This position allowed me to deepen my expertise in enterprise applications while collaborating closely with clients to ensure successful implementation and user satisfaction."
    },
    {
      role: "Full Stack Developer Intern",
      company: "AdIns",
      companylogo: require("./assets/images/adinsLogo.png"),
      date: "Feb 2021 – Feb 2022",
      desc: "In my first role as an intern, I worked as a Full Stack Developer, utilizing ASP.NET with SQL Server and PostgreSQL. This experience allowed me to enhance my skills in both frontend and backend technologies while contributing to various projects like:",
      descBullets: [
        "API",
        "Windows Service",
        "Windows Reports"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications"),
  // subtitle:
  //   "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    // {
    //   title: "Google Code-In Finalist",
    //   subtitle:
    //     "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
    //   image: require("./assets/images/codeInLogo.webp"),
    //   imageAlt: "Google Code-In Logo",
    //   footerLink: [
    //     {
    //       name: "Certification",
    //       url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
    //     },
    //     {
    //       name: "Award Letter",
    //       url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
    //     },
    //     {
    //       name: "Google Code-in Blog",
    //       url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
    //     }
    //   ]
    // },
    // {
    //   title: "Google Assistant Action",
    //   subtitle:
    //     "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
    //   image: require("./assets/images/googleAssistantLogo.webp"),
    //   imageAlt: "Google Assistant Action Logo",
    //   footerLink: [
    //     {
    //       name: "View Google Assistant Action",
    //       url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
    //     }
    //   ]
    // },
    {
      title: "Best Team at Metrodata",
      subtitle: "Recognized for exceptional collaboration and outstanding performance during a high-impact project, showcasing my ability to work effectively within a team to deliver quality results.",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        // {name: "Certification", url: ""},
        // {
        //   name: "Final Project",
        //   url: "https://pakistan-olx-1.firebaseapp.com/"
        // }
      ]
    },
    {
      title: "Udemy Golang Backend Masterclass",
      subtitle: "Successfully completed the Golang Backend MasterclassEarned the Udemy Golang Backend Masterclass certificate, gaining expertise in building scalable, high-performance backend applications using Go, covering topics like Docker, API, and concurrency handling.",
      image: require("./assets/images/golangudemy.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        // {name: "Certification", url: ""},
        // {
        //   name: "Final Project",
        //   url: "https://pakistan-olx-1.firebaseapp.com/"
        // }
      ]
    },
    {
      title: "Udemy Java Spring Boot Class",
      subtitle: "Acquiring skills in building robust, scalable web applications with Spring Boot, RESTful APIs, and advanced backend development techniques from udemy.",
      image: require("./assets/images/javaudemy.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        // {name: "Certification", url: ""},
        // {
        //   name: "Final Project",
        //   url: "https://pakistan-olx-1.firebaseapp.com/"
        // }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
     "If you’re looking for a passionate and dedicated professional to join your team or if you have a project in mind, I’d love to hear from you! Thank you for visiting my profile.",
  number: "+62-895-3096-0107",
  email_address: "buahdelapan@protonmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
