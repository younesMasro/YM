

export const METADATA = {
  title: "Portfolio | Youness Masrour",
  description:
    "XXXXXXXXXXXXXXXXX",
  siteUrl: "https://ayushsingh.net/",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Works",
    ref: "works",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Timeline",
    ref: "timeline",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "A pragmatic Frontend Developer",
  "I build things for the web",
  "I design and develop things",
  "I develop applications with WinDev",
];

export const EMAIL = "ayush.singh.xda@gmail.com";

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/younessmasrour/",
  github: "https://github.com/younesMasro",
  instagram: "https://www.instagram.com/younes_masrour/",
  //facebook: "https://www.facebook.com/ayush013",

  
};

export interface IProject {
  name: string;
  image: string;
  blurImage: string;
  description: string;
  gradient: [string, string];
  url: string;
  tech: string[];
}

export const PROJECTS: IProject[] = [
  {
    name: "STYLEWOX Website",
    image: "/projects/figgen.jpg",
    blurImage: "/projects/blur/figgen-blur.jpg",
    description: "Wordpress elementor + woocommerce.",
    gradient: ["#1F6582", "#1ABCFE"],
    url: "https://stylewox.com/",
    tech: ["wordpress", "elementor", "woocommerce"],
  },
  {
    name: "DEV POINT Website",
    image: "/projects/myokr.jpg",
    blurImage: "/projects/blur/myokr-blur.jpg",
    description: "React bootstrap + material ui ",
    gradient: ["#153BB9", "#0E2C8B"],
    url: "#",
    tech: ["","react", "", "bootstrap"],
  },
  {
    name: "DAYSHOP Website",
    image: "/projects/dlt-website.jpg",
    blurImage: "/projects/blur/dlt-website-blur.jpg",
    description: "React bootstrap + material ui",
    gradient: ["#245B57", "#004741"],
    url: "#",
    tech: ["react", "material", "bootstrap"],
  },
  {
    name: "WINDEV Apps",
    image: "/projects/dl-unify.jpg",
    blurImage: "/projects/blur/dl-unify-blur.jpg",
    description: "WinDev MySQL + HFSQL 🚀",
    gradient: ["#003052", "#167187"],
    url: "#",
    tech: ["windev", "mysql", "svg", "xml"],
  },
  
];

export const SKILLS = {
  frontend: [
    "javascript",
    "react",
  
    "svg",
    "html",
    "css",
  ],
  userInterface: ["mysql", "hfsql"],
  other: ["windev","photoshop", "figma","wordpress"],
};

export enum Branch {
  LEFT = "leftSide",
  RIGHT = "rightSide",
}

export enum NodeTypes {
  CONVERGE = "converge",
  DIVERGE = "diverge",
  CHECKPOINT = "checkpoint",
}

export enum ItemSize {
  SMALL = "small",
  LARGE = "large",
}

export const TIMELINE: Array<TimelineNodeV2> = [
  
  {
    type: NodeTypes.CHECKPOINT,
    title: "NOW",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.DIVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "LICENSE🎓",
    size: ItemSize.SMALL,
    subtitle:
      "Professional university license application design and development engineering ",
    
    slideImage: "/timeline/lisence.jpeg",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "ABN SOFT COMPANY",
    size: ItemSize.SMALL,
    subtitle: "(Synergie) Help the company better manage its various entities in complete security 🚀",
    
    slideImage: "/timeline/abn.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "WEBSITES",
    size: ItemSize.SMALL,
    subtitle: "Create websites using html css and javascript (framework)🎯",
    
    slideImage: "/timeline/websites.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CONVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2019",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "IT DEVELOPMENT DIPLOMA🎓",
    size: ItemSize.SMALL,
    subtitle:
      "Specialized it development technician.",
    
    slideImage: "/timeline/deve.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "DATABASE ADMINISTRATION🎓",
    size: ItemSize.SMALL,
    subtitle:
      "Database Administration certificate recognized by Microsoft.",
    
    slideImage: "/timeline/c2.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "IT ESSENTIALS🎓",
    size: ItemSize.SMALL,
    subtitle:
      "Cisco it essentials certification.",
    
    slideImage: "/timeline/c1.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },

  {
    type: NodeTypes.CHECKPOINT,
    title: "2017",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  
 
  {
    type: NodeTypes.CHECKPOINT,
    title: "BAC 2016🎓",
    size: ItemSize.SMALL,
    subtitle:
      "bachelor's degree in physics and chemistry.",
    
    slideImage: "/timeline/bac.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
];

export type TimelineNodeV2 = CheckpointNode | BranchNode;

export interface CheckpointNode {
  type: NodeTypes.CHECKPOINT;
  title: string;
  subtitle?: string;
  size: ItemSize;
  image?: string;
  slideImage?: string;
  shouldDrawLine: boolean;
  alignment: Branch;
}

export interface BranchNode {
  type: NodeTypes.CONVERGE | NodeTypes.DIVERGE;
}

export const GTAG = "UA-163844688-1";









