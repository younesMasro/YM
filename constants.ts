

export const METADATA = {
  title: "Portfolio | Youness",
  description:
    "XXXXXXXXXXXXXXXXX",
  siteUrl: "https://younessweb.net/",
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
  "Webflow Developer with 3D things",
  "I design and develop things",
  "I develop applications with WinDev",
  
];

export const EMAIL = "younes.masrour59@gmail.com";

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/company/younessweb",
  github: "https://github.com/younesMasro",
  instagram: "https://www.instagram.com/youness_web/",
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
    name: "PRODUCT DIGITAL Website",
    image: "/projects/younessWeb.jpg",
    blurImage: "/projects/blur/figgen-blur.jpg",
    description: "Webflow + HTML CSS JS.",
    gradient: ["#3b3b3b", "#3b3b3b"],
    url: "https://unrivaled-youtiao-5873f3.netlify.app/",
    tech: ["webflw","css","javascript","html"],
  },
  {
    name: "INTERACTIONS Website",
    image: "/projects/ineractions.jpg",
    blurImage: "/projects/blur/figgen-blur.jpg",
    description: "Webflow + HTML CSS JS.",
    gradient: ["#FC6969", "#F60A0A"],
    url: "https://luminous-blancmange-d743f1.netlify.app/",
    tech: ["webflw","css","javascript","html","svg"],
  },
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
    name: "POMADA SAFRA Website",
    image: "/projects/Pomadasafra.jpg",
    blurImage: "/projects/blur/figgen-blur.jpg",
    description: "Webflow + HTML CSS JS.",
    gradient: ["#C56BFF", "#570090"],
    url: "https://tubular-sfogliatella-9e68f6.netlify.app/",
    tech: ["webflw","css","javascript","svg"],
  },
  {
    name: "MORO SHOES Website",
    image: "/projects/moro-shoes.jpg",
    blurImage: "/projects/blur/figgen-blur.jpg",
    description: "Wordpress elementor + woocommerce + JS.",
    gradient: ["#737373", "#1E1E1E"],
    url: "https://moro-shoes.com/",
    tech: ["wordpress", "elementor", "woocommerce","javascript"],
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
    name: "MOVIES Website",
    image: "/projects/Movies.jpg",
    blurImage: "/projects/blur/figgen-blur.jpg",
    description: "React + Redux ",
    url: "https://master--jade-manatee-1bfd40.netlify.app/",
    gradient: ["#1F6582", "#1ABCFE"],
    
    tech: ["react", "redux", "svg"],
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
    name: "PORTFOLIO Website",
    image: "/projects/portfolio.jpg",
    blurImage: "/projects/blur/myokr-blur.jpg",
    description: "React bootstrap + material ui ",
    gradient: ["#153BB9", "#0E2C8B"],
    url: "#",
    tech: ["","react", "", "bootstrap","css"],
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
    "webflw",
    "javascript",
    "react",
  

    "svg",
    "html",
    "css",
    "wordpress",
  ],
  userInterface: ["mysql", "hfsql"],
  other: ["windev","photoshop", "figma"],
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
    title: "WEB DESIGN💯🚀🎯",
    size: ItemSize.SMALL,
    subtitle:
      "Strategic Webflow Developer with a flair for 3D integration ",
    
    slideImage: "/timeline/webflow.jpeg",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
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
    title: "WEBFLOW🌐",
    size: ItemSize.SMALL,
    subtitle:
      "webflow Certificate  ",
    
    slideImage: "/timeline/Certificate.jpg",
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









