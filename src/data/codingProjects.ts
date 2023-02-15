import type { Icons } from "../components/typography/AstroIcon.astro";

interface CodingProject {
  image: string;
  stackLogos: (keyof typeof Icons)[];
  title: string;
  subTitle: string;
  link: string;
}

const codingProjects: CodingProject[] = [
  {
    image: "../projectImages/portfolio.png",
    stackLogos: ["astro", "tailwind", "netlify"],
    title: "This Very Website",
    subTitle: "Where I show off my powers",
    link: "#top",
  },
  {
    image: "../projectImages/setSharer.png",
    stackLogos: ["next", "mongo", "sass", "vercel"],
    title: "Set Sharer",
    subTitle: "For creating and sharing music sets",
    link: "https://set-sharer.vercel.app/",
  },
];

export default codingProjects;
