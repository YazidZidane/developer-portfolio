import emoji from 'react-easy-emoji';
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
} from './types/sections';

export const greetings: GreetingsType = {
  name: 'Ted Xu',
  title: 'Hi, This is Ted',
  description:
    'A passionate software developer with massive experience in developing web applications. I mostly focused on frontend development using HTML, CSS, JavaScript, TypeScript, Sass, jQuery, React, Redux, Angular and Node.js etc.',
  // "I'm passionate Full Stack web developer having an experience of web applications with Python, Django, React.js, Next.js and Blockchain development on Ethereum, Solidity, Web3.js, Moralis, and Brownie Framework.",
  resumeLink:
    'https://docs.google.com/document/d/1xAsXqOOwc7-hMnxe8bfkLnOkUeX5FvUhiThuegJFBL0/edit?usp=sharing',
  // 'https://docs.google.com/document/d/1_4RIfbyt4FFHW_bNplnoINQr01neTu7XDeeUlT_2O_k/edit?usp=sharing',
};

export const openSource = {
  githubUserName: 'YazidZidane',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  // url: 'https://yazidzidane.github.io/',
  // linkedin: 'https://www.linkedin.com/in/1hanzla100/',
  // github: 'https://github.com/YazidZidane',
  // instagram: 'https://www.instagram.com/xjtcoco/',
  // facebook: 'https://www.facebook.com/1hanzla100',
  // twitter: 'https://twitter.com/1hanzla100',
  // blog: '',
};

export const skillsSection: SkillsSectionType = {
  title: 'I am',
  subTitle: 'A PASSIONATE SOFTWARE DEVELOPER WITH 5 YEARS OF EXPERIENCE',
  data: [
    {
      title: 'Software Development',
      lottieAnimationFile: '/lottie/skills/fullstack.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Solid foundation of HTML, CSS, and JavaScript with extensive experience in React and React libraries'
        ),
        emoji(
          '⚡ Hands-on experience in state management tools in React such as Context API and Redux'
        ),
        emoji(
          '⚡ Experience in building single page applications using React Router'
        ),
        emoji(
          '⚡ Excellent team player, quick learning, and work efficiently to deliver output.'
        ),
      ],
      softwareSkills: [
        {
          skillName: 'HTML-5',
          fontAwesomeClassName: 'vscode-icons:file-type-html',
        },
        {
          skillName: 'CSS-3',
          fontAwesomeClassName: 'vscode-icons:file-type-css',
        },
        {
          skillName: 'JavaScript',
          fontAwesomeClassName: 'logos:javascript',
        },
        {
          skillName: 'Reactjs',
          fontAwesomeClassName: 'vscode-icons:file-type-reactjs',
        },
        {
          skillName: 'Redux',
          fontAwesomeClassName: 'logos:redux',
        },
        {
          skillName: 'Sass',
          fontAwesomeClassName: 'vscode-icons:file-type-sass',
        },
        {
          skillName: 'TypeScript',
          fontAwesomeClassName: 'vscode-icons:file-type-typescript-official',
        },

        {
          skillName: 'Angular',
          fontAwesomeClassName: 'vscode-icons:file-type-angular',
        },
        {
          skillName: 'Node',
          fontAwesomeClassName: 'vscode-icons:file-type-node',
        },
        {
          skillName: 'Python',
          fontAwesomeClassName: 'logos:python',
        },
        {
          skillName: 'Jest',
          fontAwesomeClassName: 'vscode-icons:file-type-jest',
        },
        {
          skillName: 'Cpp',
          fontAwesomeClassName: 'vscode-icons:file-type-cpp',
        },
      ],
    },
  ],
};

export const experience: ExperienceType[] = [
  {
    role: 'Software Engineer',
    company: 'Surpath Inc.',
    companyLogo: '/img/icons/common/surpath.png',
    date: 'Sep 2021 – Present',
    desc: `I worked as software developer and designed a web based dashboard. The E2E Dashboard integrates all the essential procedures in a supply chain into a single,
      unified platform. With just a few clicks, users can easily create orders with specified origins and destinations, select carriers, and dispatch deliveries.
       Once an order has been dispatched, users can monitor its progress in real-time via the dashboard. 
       It can also generate delivery order calendars and data visualization charts to support efficient and effective decision-making.`,
  },
  // {
  //   role: 'Software Engineer',
  //   company: 'Koudai Caifu Information Technology Ltd',
  //   companyLogo: '/img/icons/common/caifu.png',
  //   date: 'Jan 2021 – Jan 2022',
  //   desc: `I developed an online e-commerce platform that offers a wide range of financial products to customers.
  //     The website is user-friendly, having clear and detailed information on all products,
  //     customers are easy to search and compare financial products. The platform also includes a variety of filters that
  //     allow customers to narrow down their search to find the ideal product that meets their requirements.`,
  //   // descBullets: [
  //   //   'Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit',
  //   //   'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  //   // ],
  // },
  {
    role: 'Software Engineer',
    company: 'Northeast Securities',
    companyLogo: '/img/icons/common/dongbei.png',
    date: 'Sep 2019 - Jun 2021',
    desc: `Northeast Securities is a securities company located in Changchun, Jilin, China.
          Developed an internal management system that increased efficiency for the operations for the information technology team.
          The system includes an interactive management for centralized monitoring and control of the main servers across China 
          and branch transaction servers at business outlets. The system also includes reporting capabilities that can generate 
          detailed reports on server performance and system usage.
    `,
  },
  {
    role: 'Software Engineer',
    company: 'Huaxia Hongyuan Technology Ltd',
    companyLogo: '/img/icons/common/huaxia.png',
    date: 'Jun 2018 - Aug 2019',
    desc: `I developed an application that can automatically extract the construction contour data from the Baidu map custom map API.
     It uses Baidu map API to display a map in the browser and allows them to select any area, then the program could automatically call
      the backend to run the Python script to retrieve the contour data and save it locally or into databases. The application has been 
      successfully incorporated into the company's flexible gas monitoring system for communities to generate interactable map and improved user experience.
    `,
  },
];

export const projects: ProjectType[] = [
  // {
  //   name: 'Weather Search App',
  //   desc: 'A weather forecast application that can shows you detailed weather forecast via data and interactable graphs. The application is developed based on Angular and Express.',
  //   // github: 'https://github.com/1hanzla100/developer-portfolio',
  //   link: ' https://node-weather-9418.wl.r.appspot.com/',
  // },
  {
    name: 'Sweet Dream',
    desc: 'This is a 3D horror, escape-room game that I developed with a group.',
    link: 'https://simmer.io/@jasper/sweet-dream-final',
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: 'University of Southern California',
    subHeader: 'Master of Science in Computer Science',
    duration: 'Los Angeles, California',
    // desc: 'Participated in the research of XXX and published 3 papers.',
    grade: 'GPA: 3.85/4.0',
    // descBullets: [
    //   'Lorem ipsum dolor sit amet, consectetur adipdfgiscing elit',
    //   'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    // ],
  },
  {
    schoolName: 'Nankai University',
    subHeader: 'Bachelor of Computer Science and Technology',
    duration: 'Tianjin, China',
    // desc: 'Participated in the research of XXX and published 3 papers.',
    grade: 'GPA: 3.5/4.0',
    // descBullets: [
    //   'Lorem ipsum dolor sit amet, consectetur adipdfgiscing elit',
    //   'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    // ],
  },
];

export const feedbacks: FeedbackType[] = [
  // {
  //   name: 'John Smith',
  //   feedback:
  //     'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.',
  // },
  // {
  //   name: 'John Smith',
  //   feedback:
  //     'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.',
  // },
];

export const SkillBars: SkillBarsType[] = [];

// option to hide or show the ContactUs component
export const showContactUs: boolean = false;

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: 'Ted Xu',
  description: 'A passionate Software Developer.',
  author: 'Ted Xu',
  image: '',
  url: 'https://developer-portfolio-1hanzla100.vercel.app',
  keywords: [
    'Ted',
    'Ted Xu',
    '@YazidZidane',
    'YazidZidane',
    'Portfolio',
    'Ted Portfolio ',
    'Ted Xu Portfolio',
  ],
};
