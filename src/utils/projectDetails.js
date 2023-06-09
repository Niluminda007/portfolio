import {
  javascript,
  html,
  css,
  github,
  reactjs,
  nodejs,
  mongodb,
  docker,
  liveIcon,
  tailwind,
} from "../assets";

export const projects = [
  {
    id: "e-commerce",
    name: "E-Commerce-Site",
    imgUrls: [
      "/portfolio/work/work-inside/e-store/estore_1.JPG",
      "/portfolio/work/work-inside/e-store/estore_2.JPG",
      "/portfolio/work/work-inside/e-store/estore_3.JPG",
      "/portfolio/work/work-inside/e-store/estore_4.JPG",
    ],

    technologies: [
      {
        name: "React JS",
        icon: reactjs,
      },
      {
        name: "JavaScript",
        icon: javascript,
      },
      {
        name: "HTML 5",
        icon: html,
      },
      {
        name: "CSS 3",
        icon: css,
      },
    ],
    description:
      "This is a demo e-commerce platform that users can buy stuff such cloting,electronics.There are 3 pages here, Product List Page,Product Page,Cart Page.The user can perform crud operations easily and there's a currency converter for the users who might purchase items on a different currency based on their preference",
    repo: {
      img: github,
      url: "https://github.com/Niluminda007/Entry-Task",
    },
    demo: { img: liveIcon, url: "" },
  },

  {
    id: "e-resource",
    name: "E-Resource Repository",
    imgUrls: [
      "/portfolio/work/work-inside/e-resource/eResource_1.JPG",
      "/portfolio/work/work-inside/e-resource/eResource_2.JPG",
      "/portfolio/work/work-inside/e-resource/eResource_3.JPG",
      "/portfolio/work/work-inside/e-resource/eResource_4.JPG",
      "/portfolio/work/work-inside/e-resource/eResource_5.JPG",
      "/portfolio/work/work-inside/e-resource/eResource_6.JPG",
      "/portfolio/work/work-inside/e-resource/eResource_7.JPG",
    ],
    technologies: [
      {
        name: "HTML 5",
        icon: html,
      },
      {
        name: "CSS 3",
        icon: css,
      },
      {
        name: "JavaScript",
        icon: javascript,
      },
      {
        name: "React JS",
        icon: reactjs,
      },
      {
        name: "Node JS",
        icon: nodejs,
      },
      {
        name: "MongoDB",
        icon: mongodb,
      },
      ,
      {
        name: "docker",
        icon: docker,
      },
    ],
    description:
      "This website was designed with 4 layers, first being the client ui that the public can see and then the api which handles the request from the client, and then the database server which commnicate with the api to send the data to the client and the fourth one is a background job which runs once a day to update from different apis that we are fetching the data.This website was built for a university based on their requirements for a online E-Resource Library. This website has only one page and the users can search for the reseachers that are in the university turiba and see all their research paper deitals such as citations,Title,snippets. The users can also filter these articles by categories and by year. Behind the scenes this is managed from another admin panel that has features to add/remove/update reseachers,categorise articles and to update the library.",
    repo: { img: github, url: "" },
    demo: { img: liveIcon, url: "http://research.turiba.lv/" },
  },
  {
    id: "wordle",
    name: "Wordle Game",
    imgUrls: [
      "/portfolio/work/work-inside/wordle/wordle_1.JPG",
      "/portfolio/work/work-inside/wordle/wordle_2.JPG",
    ],
    technologies: [
      {
        name: "HTML 5",
        icon: html,
      },
      {
        name: "CSS 3",
        icon: css,
      },
      {
        name: "JavaScript",
        icon: javascript,
      },
      {
        name: "React JS",
        icon: reactjs,
      },
    ],
    description:
      "This is a simple game of worlde where the player is prompted to guess a 5 letter word and gets 5 tires to guess it",
    repo: {
      img: github,
      url: "https://github.com/Niluminda007/Worlde-React",
    },
    demo: {
      img: liveIcon,
      url: "https://niluminda007.github.io/Worlde-React/",
    },
  },
  {
    id: "krypto",
    name: "Web 3 Krypto App",
    imgUrls: [
      "/portfolio/work/work-inside/crypto/crypto_1.JPG",
      "/portfolio/work/work-inside/crypto/crypto_2.JPG",
      "/portfolio/work/work-inside/crypto/crypto_3.JPG",
      "/portfolio/work/work-inside/crypto/crypto_5.JPG",
    ],
    technologies: [
      {
        name: "HTML 5",
        icon: html,
      },
      {
        name: "CSS 3",
        icon: css,
      },
      {
        name: "JavaScript",
        icon: javascript,
      },
      {
        name: "React JS",
        icon: reactjs,
      },
      {
        name: "Tailwind",
        icon: tailwind,
      },
    ],
    description:
      "This is a Web3 Application that can used to transfer test ethereum.You can connect your meta mask account and send ethereum throught the world",
    repo: {
      img: github,
      url: "https://github.com/Niluminda007/web3Krypto",
    },
    demo: { img: liveIcon, url: "https://niluminda007.github.io/web3Krypto/" },
  },
  {
    id: "wordle",
    name: "Wordle Game",
    imgUrls: [
      "/portfolio/work/work-inside/wordle/wordle_1.JPG",
      "/portfolio/work/work-inside/wordle/wordle_2.JPG",
    ],
    technologies: [
      {
        name: "HTML 5",
        icon: html,
      },
      {
        name: "CSS 3",
        icon: css,
      },
      {
        name: "JavaScript",
        icon: javascript,
      },
      {
        name: "React JS",
        icon: reactjs,
      },
    ],
    description:
      "This is a simple game of worlde where the player is prompted to guess a 5 letter word and gets 5 tires to guess it",
    repo: {
      img: github,
      url: "https://github.com/Niluminda007/Worlde-React",
    },
    demo: {
      img: liveIcon,
      url: "https://niluminda007.github.io/Worlde-React/",
    },
  },
  {
    id: "dalle",
    name: "DaLL-E Clone",
    imgUrls: [
      "/portfolio/work/work-inside/dalle/dalle_1.JPG",
      "/portfolio/work/work-inside/dalle/dalle_2.JPG",
      "/portfolio/work/work-inside/dalle/dalle_3.JPG",
      "/portfolio/work/work-inside/dalle/dalle_4.JPG",
    ],
    technologies: [
      {
        name: "React JS",
        icon: reactjs,
      },
      {
        name: "Node Js",
        icon: nodejs,
      },
      {
        name: "HTML 5",
        icon: html,
      },
      {
        name: "Tailwind Css",
        icon: tailwind,
      },
      {
        name: "JavaScript",
        icon: javascript,
      },
    ],
    description:
      "This a live like dalle clone, which can be used to generate images through a prompt. You can climb high as your imagination. You can generate a image then share it with community as well and enjoy each others work. The backend is hosted on renderer and for image optimization cloudinary cdn is used, to fetch and store images. The front end is powered wit react and tailwind css.",
    repo: {
      img: github,
      url: "https://github.com/Niluminda007/DALLE-E",
    },
    demo: { img: liveIcon, url: "https://niluminda007.github.io/DALLE-E/" },
  },
];

export const projectCoverImages = [
  { index: 1, name: "e-commerce", url: "./work/work-cover/e-commerce.png" },
  { index: 2, name: "e-resource", url: "./work/work-cover/e-resource.jpg" },
  { index: 3, name: "todo", url: "./work/work-cover/todo.jpg" },
  { index: 4, name: "wordle", url: "./work/work-cover/wordle-2.jpg" },
  { index: 5, name: "Dalle", url: "./work/work-cover/dalle.jpg" },
];

export const technologies = [
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  ,
  {
    name: "docker",
    icon: docker,
  },
];

export const projectsCoverDetails = [
  {
    index: 1,
    name: "E-Commerce",
    url: "./work/work-cover/e-commerce.png",
    path: "/portfolio/projects/e-commerce",
  },
  {
    index: 2,
    name: "E-Resource",
    url: "./work/work-cover/e-resource.jpg",
    path: "/portfolio/projects/e-resource",
  },
  {
    index: 3,
    name: "Krypto",
    url: "./work/work-cover/crypto.jpg",
    path: "/portfolio/projects/krypto",
  },
  {
    index: 4,
    name: "Wordle",
    url: "./work/work-cover/wordle-2.jpg",
    path: "/portfolio/projects/wordle",
  },
  {
    index: 5,
    name: "Dalle",
    url: "./work/work-cover/dalle.jpg",
    path: "/portfolio/projects/dalle",
  },
];
