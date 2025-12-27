// import aiPoweredLending from "./aiPoweredLending.png";
//import digitalFrontier from "./digitalFrontier.png";
import ecoCity from "./ecoCity.png";
import health from "./health.png";
//import learnSphere from "./learnSphere.png";
import water from "./waterHook.png";
//import openSus from "./openSustainaibility.png";
import machine from "./machineArm.png";
import globe from "./climateGlobe.png";
// import community from "./community.png";

export type TrackDataTypes = {
  imageSrc: string;
  title: string;
  subTitle: string;
  description: string;
};

export const data: TrackDataTypes[] = [
  {
    imageSrc: ecoCity,
    title: "Sustainable Ecosystems",
    subTitle: "SDG 9, 11 & 15",
    description:
      "Develop comprehensive solutions that balance resilient infrastructure and industrial growth with the preservation of life on land and the creation of sustainable cities.",
  },
  {
    imageSrc: machine,
    title: "Collaborative Consumption & Production",
    subTitle: "SDG 12 & 17",
    description:
      "Create frameworks that foster global and local partnerships to drive responsible consumption patterns and minimize waste in production cycles.",
  },
  {
    imageSrc: health,
    title: "Good Health and Well-being",
    subTitle: "SDG 3",
    description:
      "Innovate systems to enhance healthcare accessibility, improve mental health support, and ensure healthy lives for all ages.",
  },
  {
    imageSrc: globe,
    title: "Climate Resilience",
    subTitle: "SDG 13",
    description:
      "Design actionable strategies and tools to combat climate change, reduce carbon footprints, and strengthen adaptive capacity to climate-related hazards.",
  },
  {
    imageSrc: water,
    title: "Life Below Water",
    subTitle: "SDG 14",
    description:
      "Engineer solutions for the conservation of oceans and seas, focusing on reducing marine pollution and protecting marine biodiversity.",
  },
];
