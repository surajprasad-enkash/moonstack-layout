// data/impactStats.ts
import lottieFile from "../../../../public/lottie/about-page/businessYear.json";
import clientImg from "../pubpublic/assets/ImpactStatsSection/clientimg.png";

import MYSO from "../pubpublic/assets/ImpactStatsSection/myso.png";
import paradigm from "../pubpublic/assets/ImpactStatsSection/paradigm.png";
import players from "../pubpublic/assets/ImpactStatsSection/players.png";
import voxe from "../pubpublic/assets/ImpactStatsSection/voxe.png";
import teamMember from "../pubpublic/assets/ImpactStatsSection/teamMember.webp";
import globalRemote from "../pubpublic/assets/ImpactStatsSection/globalRemote.svg";
export const impactStatsData = {
  heading: {
    prefix: "Today",
    highlight: "Moonstack",
    suffix: "stands on market-leading positions and is recognized globally",
  },

  cards: [
    {
      type: "years-lottie",
      years: "7",
      label: "years in business",
      lottie: lottieFile,
    },

    {
      type: "testimonial",
      title: "40+ successfully designed",
      subtitle: "Angel / Seed startups",
      quote:
        "We had a feeling that Moonstack is not just a contract outsourcing team but part of our startup. We had super close communication.",
      author: {
        name: "Kirill Onasenko",
        role: "CEO, VOXE",
        avatar: clientImg.src,
      },
    },

    {
      type: "funding",
      title: "$1B+ funding raised by our clients",
      companies: [
        { ImageLogo: MYSO, amount: "$2.4M RAISED" },
        { ImageLogo: paradigm, amount: "$700M RAISED" },
        { ImageLogo: players, amount: "$34M RAISED" },
        { ImageLogo: voxe, amount: "$1M RAISED" },
      ],
    },

    {
      type: "projects",
      value: "170+",
      label: "successful projects",
    },
    {
      type: "teamMembers",
      value: "55+",
      label: "team members",
      teamMember: teamMember.src,
    },
    {
      type: "globalRemote",
      label: "Global remote team that operates internationally",
      globalRemote: globalRemote.src,
    },
  ],
};
