import type { IconNames } from "../types";

interface CodingProject {
  image: string;
  stackLogos: IconNames[];
  title: string;
  subTitle: string;
  link: string;
}

const codingProjects: CodingProject[] = [
  {
    image: "../projectImages/portfolio.png",
    stackLogos: [
      "simple-icons:astro",
      "mdi:tailwind",
      "teenyicons:netlify-outline",
    ],
    title: "This Very Website",
    subTitle: "Where I show off my powers",
    link: "#top",
  },
  {
    image: "../projectImages/setSharer.png",
    stackLogos: [
      "teenyicons:nextjs-solid",
      "simple-icons:mongodb",
      "mdi:sass",
      "ion:logo-vercel",
    ],
    title: "Set Sharer",
    subTitle: "For creating and sharing music sets",
    link: "https://set-sharer.vercel.app/",
  },
];

export default codingProjects;
