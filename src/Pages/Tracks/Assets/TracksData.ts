import aiPoweredLending from "./aiPoweredLending.png";
//import digitalFrontier from "./digitalFrontier.png";
import ecoCity from "./ecoCity.png";
import health from "./health.png";
//import learnSphere from "./learnSphere.png";
import water from "./waterHook.png";
//import openSus from "./openSustainaibility.png";
import machine from "./machineArm.png";
import globe from "./climateGlobe.png";
import community from "./community.png";

export type TrackDataTypes = {
	imageSrc: string;
	title: string;
	subTitle: string;
	description: string;
};

export const data: TrackDataTypes[] = [
	{
	 	imageSrc: globe,
	 	title: "Climate Action",
	 	subTitle: "SDG 13",
	 	description:
	 		"Initiatives and projects aimed at combating climate change and promoting environmental sustainability.",
	},
	{
		imageSrc: aiPoweredLending,
		title: "Partnering for the Goals",
		subTitle: "SDG 17",
		description:
			"Collaborative efforts and partnerships to achieve the United Nations Sustainable Development Goals (SDGs).",
	},
	{
		imageSrc: health,
		title: "Good Health and Well-being",
		subTitle: "SDG 3",
		description:
			"Projects focused on improving health outcomes, healthcare access, and overall well-being.",
	},
	{
		imageSrc: water,
		title: "Life below Water",
		subTitle: "SDG 14",
		description:
			"Conservation and sustainable use of oceans, seas, and marine resources for sustainable development.",
	},
	{
		imageSrc: machine,
		title: "Responsible Consumption and Production",
		subTitle: "SDG 12",
		description:
			"Promoting sustainable consumption and production patterns to reduce environmental impact.",
	},
	{
		imageSrc: aiPoweredLending,
		title: "Industry, Innovation and Infrastructure",
		subTitle: "SDG 9",
		description:
			"Building resilient infrastructure, promoting inclusive and sustainable industrialization, and fostering innovation.",
	},
	{
		imageSrc: community,
		title: "Sustainable Cities and Communities",
		subTitle: "SDG 11",
		description:
			"Developing sustainable urban areas that provide safe, inclusive, and resilient living environments for all.",
	},
	{
		imageSrc: ecoCity,
		title: "Life on Land",
		subTitle: "SDG 15",
		description:
			"Protecting, restoring, and promoting sustainable use of terrestrial ecosystems, forests, and biodiversity.",
	}
];
