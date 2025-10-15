import { Icons } from "../components/typography/AstroIcon.astro";

interface CodingProject {
  image: string;
  stackLogos: (keyof typeof Icons)[];
  title: string;
  subTitle: string;
  link: string;
  github: string;
}

const codingProjects: CodingProject[] = [
  {
    image: "/assets/portfolio.png",
    stackLogos: ["astro", "tailwind", "netlify"],
    title: "This Very Website",
    subTitle: "Where I show off my powers",
    link: "#top",
    github: "https://github.com/ehymowitz/portfolio-astro",
  },
  {
    image: "/assets/setSharer.png",
    stackLogos: ["next", "mongo", "sass", "vercel"],
    title: "Set Sharer",
    subTitle: "[Rewriting] For creating and sharing music sets",
    link: "https://set-sharer.vercel.app/",
    github: "https://github.com/ehymowitz/set-sharer",
  },
];

export default codingProjects;
