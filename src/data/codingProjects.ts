import type { Icons } from "../components/typography/AstroIcon.astro";

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
    image: "/assets/alarmSharer.png",
    stackLogos: ["expo", "firebase", "tailwind", "vercel"],
    title: "Alarm Sharer",
    subTitle: "For uploading and sharing alarm clocks",
    link: "https://alarm-sharer.vercel.app/",
    github: "https://github.com/ehymowitz/alarm-sharer",
  },
  {
    image: "/assets/portfolio.png",
    stackLogos: ["astro", "tailwind", "netlify"],
    title: "This Very Website",
    subTitle: "Where I show off my powers",
    link: "#top",
    github: "https://github.com/ehymowitz/portfolio",
  },
  {
    image: "/assets/setSharer.png",
    stackLogos: ["next", "mongo", "sass", "vercel"],
    title: "Set Sharer",
    subTitle: "For creating and sharing music sets",
    link: "https://set-sharer.vercel.app/",
    github: "https://github.com/ehymowitz/set-sharer",
  },
];

export default codingProjects;
