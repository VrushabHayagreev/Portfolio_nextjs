import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "Vrushab Hanumesh",
  title: "Hi all, I'm Vrushab Hanumesh",
  description:
    " I am a Full stack Web Developer with a years experience working on React, NodeJS, Mysql PERL and Splunk. I have a masters degree in computer science and i like to build scalable and reliable web applications.",
  resumeLink:
    "https://doc-14-88-docs.googleusercontent.com/docs/securesc/rekbsscu2a09cdflmajrg8bba8sp2bve/3jou35nv9s2rmomsomsgrne9700s371c/1696303125000/03651990070150116787/03651990070150116787/1Sby4cJni2Zo1fAI0AizkWhn8kOiPeiBS?e=view&ax=AA75yW53lb7AV9GP4revmlXHfZBr6DuUO-QuhkWRYNdta_iwrd8VSGe-ruFP5wV4UvgHV8zo60PykfniQyYOscGg438FO22t3d_Sdsoq3u1eglLCwR333pQ40-EvAC4H5SQlx1Ae5ba-NbGyzH2SOg1z-kFGVAnp12LJjoxtf3uO28tQVh0iA1h6x5SQt8fd4vBQH0V9ZmP0W-Rkvkv5ikB9T1fBJ1pp65qKKkaZ6j-l1u-m77mZmDW5TNepJC2UelWFS0pWubyBVvZpZW-yqb9VSsTYIktnPszryVED9mhA4PRrVtQuBzQx5NXijJsGV_wlIxklHIs9yOIb5Ht4cti8bp-eMAoq3Q8QBOAo_FHMfTM3l0_iF6FCzouScFnadsQeIlM6c3L17Urlb7bBGpKAYJ2imTB0N5PypsZmgBEx-WTe0teLkss3cExcOB8aZWaNu7EocoJUBwTQKpxiqY7Mb_7jvm-kiVyl60VuBwsSFMppvIwrBLGwMQBaiA4PlAauT1EEuU3eBwdao-b9AzPRJFVCT7kclvtX9oqtKBpYLZSg4IpVRLvXv5hzRRb5rz3eTkyagI6S-ThJKcwN7VvJlAAP9Wm2XAqrfwM9E438RPiQCYpFAauwG5zFnL0NmgcmT6tMgtacRPDu_4VPpcSn667LDvNJntGPm4RUUmxA0obgdFhUdMJkOCZxM72gWvpLKKEJ8IYNfXNBFSftQ0YcSmrhzSj3NkP9th4Tm9e61Ec6cuAbsTcbNgQlqpI9TeJx48WASB9YcfQ4EHrjFQkcYIU6C97kOjcy0x4mRDpQSqyjONVmlZlKXnPZwJ2UqZqRCuguHqee55QhS1uYAJEH3KW7EpCG1bkwyiKky7kPQjW5yOguDtPgmn0PwWzEEmU_acMpfQC2WwDFT0xb6mZA-4WFB9IMLcXPHHWYRXQ&uuid=6729e424-faac-453c-90bc-1fed395d390b&authuser=0&nonce=7rk187jmhnv1s&user=03651990070150116787&hash=kdhs83qu19bf4i111a1uk7ndpda6k64n",
};

export const openSource = {
  githubUserName: "vrushahayagreev",
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  url: "https://github.com/VrushabHayagreev",
  linkedin: "https://www.linkedin.com/in/vrushab-hayagreev/",
  github: "https://github.com/VrushabHayagreev",
  instagram: "https://www.instagram.com/vrushab_07/",
  facebook: "https://www.instagram.com/vrushab_07/",
  twitter: "https://www.instagram.com/vrushab_07/",
};

export const skillsSection: SkillsSectionType = {
  title: "What I do",
  subTitle: "A full stack developer trying to learn new technology everyday.",
  data: [
    {
      title: "Full Stack Development",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Building FUll stack web application since last 5 years"),
        emoji("⚡ Developed 3 major Next js applications in last 1 year"),
        emoji(
          "⚡ Proficient in Nodejs and exploing GraphQL and graph databases lately."
        ),
      ],
      softwareSkills: [
        {
          skillName: "HTML-5",
          iconifyTag: "vscode-icons:file-type-html",
        },
        {
          skillName: "CSS-3",
          iconifyTag: "vscode-icons:file-type-css",
        },
        {
          skillName: "JavaScript",
          iconifyTag: "logos:javascript",
        },
        {
          skillName: "Reactjs",
          iconifyTag: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "Nextjs",
          iconifyTag: "vscode-icons:file-type-light-next",
        },
        {
          skillName: "Python",
          iconifyTag: "logos:python",
        },
        {
          skillName: "Django",
          iconifyTag: "vscode-icons:file-type-django",
        },

        {
          skillName: "Redux",
          iconifyTag: "logos:redux",
        },
        {
          skillName: "NPM",
          iconifyTag: "logos:npm-icon",
        },
        {
          skillName: "Yarn",
          iconifyTag: "logos:yarn",
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      lottieAnimationFile: "/lottie/skills/cloudinfra.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Experience of working on multiple cloud platforms"),
        emoji(
          "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases"
        ),
        emoji(
          "⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions"
        ),
      ],
      softwareSkills: [
        // ? Check README To get icon details
        {
          skillName: "AWS",
          iconifyTag: "logos:aws",
        },

        {
          skillName: "Heroku",
          iconifyTag: "logos:heroku-icon",
        },
        {
          skillName: "PostgreSQL",
          iconifyTag: "logos:postgresql",
        },
        {
          skillName: "Github",
          iconifyTag: "akar-icons:github-fill",
        },
        {
          skillName: "Docker",
          iconifyTag: "logos:docker-icon",
        },
      ],
    },
    {
      title: "Blockchain",
      lottieAnimationFile: "/lottie/skills/ethereum.json", // Path of Lottie Animation JSON File
      skills: [
        emoji(
          "⚡ Experience in developing Smart Contract using Solidity & Ethereum"
        ),
        emoji(
          "⚡ Building Scripts for automated testing & deployment of Smart Contracts using Brownie & Infura"
        ),
        emoji(
          "⚡ Experience of using Openzeppelin Smart Contract Standards & Chainlink Oracles"
        ),
        emoji("⚡ Developing NFT Smart Contracts using ERC-721 Token Standard"),
        emoji(
          "⚡ Building Dapps with React.js & Solidity using Web3.js, Moralis & IPFS"
        ),
      ],
      softwareSkills: [
        {
          skillName: "Ethereum",
          iconifyTag: "logos:ethereum",
        },
        {
          skillName: "Solidity",
          iconifyTag: "logos:solidity",
        },
        {
          skillName: "Web3js",
          iconifyTag: "logos:web3js",
        },
        {
          skillName: "Metamask",
          iconifyTag: "logos:metamask-icon",
        },
        {
          skillName: "Ganache",
          iconifyTag: "logos:ganache-icon",
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: "Frontend/Design", //Insert stack or technology you have experience in
    progressPercentage: "90", //Insert relative proficiency in percentage
  },
  {
    Stack: "Backend",
    progressPercentage: "70",
  },
  {
    Stack: "Data Analysis",
    progressPercentage: "60",
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: "Indiana University Bloomington",
    subHeader: "Master of Science in Computer Science",
    duration: "August 2021 - May 2023",
    desc: "Enchanced my skills in full stack development and published two papers on machine learning and bio-informatics",
    grade: "CGPA 3.9",
    descBullets: [],
  },
  {
    schoolName: "JSS Science and Technology University",
    subHeader: "Bach of Science in Computer Science",
    duration: "August 2016 - August 2020",
    desc: "Learnt the basics of computer science and explored carrer options based on my intrest in web development",
    grade: "CGPA 8.95",
    descBullets: [],
  },
];

export const experience: ExperienceType[] = [
  {
    role: "Programmer Analyst",
    company: "Qualcomm",
    companyLogo: "/img/icons/common/Qualcomm.png",
    date: "June 2020 - May 2021",
    desc: "•	Designed a client project Load Share facility for managing resources based on 30 parameters, enhancing resource sharing by 30%. Analyzed the raw data from the hardware team by extracting the data and querying the necessary result by writing queries in PERL and visualized that data on Splunk every 15 days. •	Restructured the LSF project by recoding the 10-year-old code which was written in legacy programming language (PERL).",
  },
  {
    role: "Interim Intern",
    company: "Qualcomm",
    companyLogo: "/img/icons/common/Qualcomm.png",
    date: "January 2020 - June 2020",
    desc: "•	Developed the UI for an AWS Resource Dashboard using technologies like ReactJS, JavaScript, and Bootstrap, which saved the team approximately $3000 every month on resources. •	Restructured the backend for the ERP project using Node Threads and tested it on Postman for response thus facilitating process running on multiple threads resulting in decreased runtime of each process by 5secs. •	Led Collaboration with the CRM team for an Angular project which led to reducing in code redundancy by 30%.",
  },
  {
    role: "Research Assistant",
    company: "Indiana University Bloomington",
    companyLogo: "/img/icons/common/IU.png",
    date: "July 2023 - Present ",
    desc: "•	Did a Statistical Analysis on DNA Methylation data to find biologically methylated CFGs using mean and variance as parameters to keep the false positive rate <5% and identified 20 new CFGs which the current best model failed to find. •	Applied Machine Learning and Neural net models on 14 samples of High Dimensional Data (450k rows values each) to find methylated CFGs with an accuracy of 80% which is 5.26% better than previous best proposed model.",
  },
  {
    role: "Backend Developer",
    company: "Hephium",
    companyLogo: "/img/icons/common/Hephium.png",
    date: "September 2023 - Present",
    desc: "•	Integrated an AI-driven chat system using React and tailwind in the Ruby Log project, leading to 20% faster query resolution and a 40% reduction in ticket backlog.•	Conducted comprehensive testing on an existing React Native app called domino score, identifying and resolving 12 critical bugs, resulting in a 15% increase in app stability.",
  },
];

export const projects: ProjectType[] = [
  {
    name: "S8ul",
    desc: "Engineered a NextJS application for the s8ul organization (the leading gaming organization in India with around 20M followers) giving all the information about the organizations like owners, content creators, esports teams, achievements etc.",
    github: "https://github.com/VrushabHayagreev/s8ul",
    link: "https://s8ulofficial.netlify.app/",
  },
  {
    name: "Bookishwiz",
    desc: "Built a Full stack web application converting my Instagram book review page into a blog site using Next JS and Tailwind CSS for front end and GraphQL for fetching and storing data.",
    github: "https://github.com/VrushabHayagreev/BookishWiz",
    link: "https://bookishwiz.netlify.app/",
  },
  {
    name: "Vrushabs Portfolio Nextjs",
    desc: "My Portfolio",
    github: "https://github.com/VrushabHayagreev/Portfolio_nextjs",
    link: "https://vrushabsportfolio.netlify.app/",
  },
  {
    name: "Vrushabs Portfolio React",
    desc: "My Portfolio",
    github: "https://github.com/VrushabHayagreev/Portfolio",
    link: "https://s8ulofficial.netlify.app/",
  },
  {
    name: "Flash ship",
    desc: "Successfully deployed a Delivery Management System, enabling customers to conveniently ship goods from any location to another. Optimized the backend performance by NodeJS, which led to a 25% reduction in data rendering time.",
    github: "https://github.com/VrushabHayagreev/Flashship",
  },
  {
    name: "PG Finder",
    desc: "Developed the UI for the project and incorporated google maps api using NodeJS for fetching the coordinates of the PG’s nearby.",
    github: "https://github.com/VrushabHayagreev/PG-Finder",
  },
  {
    name: "Deep Dreaming",
    desc: "• Built a Convolutional Neural network using Artistic Style Transfer which makes use of an inception network in deep learning to build a hallucinating appearance of a given base image. • Published findings in https://www.ijtre.com/images/scripts/2020080104.pdf",
    github: "https://github.com/VrushabHayagreev/DeepDreaming",
  },
  {
    name: "RTO Management System",
    desc: "Developed a full stack web application to help the user to get the license, allow the official to issue driving license, fine, delete the user and update the user data",
    github: "https://github.com/VrushabHayagreev/RTO-Management-System",
  },




];

export const feedbacks: FeedbackType[] = [
  {
    name: "John Smith",
    feedback:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.",
  },
  {
    name: "John Smith",
    feedback:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.",
  },
];

// option to hide or show the ContactUs component
export const showContactUs: boolean = true;

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: "Vrushab Hanumesh",
  description: "A passionate Full Stack Web Developer and a Part Time Gamer",
  author: "Vrushab Hanumesh",
  image: "https://avatars3.githubusercontent.com/u/59178380?v=4",
  url: "https://developer-portfolio-1hanzla100.vercel.app",
  keywords: [
    "Hanzla",
    "Vrushab Hanumesh",
    "@vrushabhanumesh",
    "vrushabhanumesh",
    "Portfolio",
    "Vrushab Portfolio ",
    "Vrushab Hanumesh Portfolio",
  ],
};
