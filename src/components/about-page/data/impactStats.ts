// data/impactStats.ts
import lottieFile from "../../../../public/lottie/about-page/businessYear.json"
import clientImg from "@/assets/newHomePage/ImpactStatsSection/client_logo.webp"

import MYSO from "@/assets/newHomePage/ImpactStatsSection/myso.webp"
import paradigm from "@/assets/newHomePage/ImpactStatsSection/paradigm.webp"
import players from "@/assets/newHomePage/ImpactStatsSection/players.webp"
import voxe from "@/assets/newHomePage/ImpactStatsSection/voxe.webp"
import teamMember from "@/assets/newHomePage/ImpactStatsSection/teamMember.webp"
import globalRemote from "@/assets/newHomePage/ImpactStatsSection/icon/globalRemote2.svg"
export const impactStatsData = {
  heading: {
    prefix: "Today, ",
    highlight: "Moonstack",
    suffix:
      "Holds a Trusted, Market-Leading Position as a Global Technology Partner.",
  },

  cards: [
    {
      type: "years-lottie",
      years: "7",
      label: "Years in Business",
      lottie: lottieFile,
    },

    {
      type: "testimonial",
      title: "40+ Successfully Designed",
      subtitle: "Angel / Seed Startups",
      quote:
        "Moonstack brought clarity, technical expertise, and a collaborative mindset. Their close communication and ownership mindset made a real difference to our product journey.",
      author: {
        name: "Kirill Onasenko",
        role: "CEO",
        avatar: clientImg.src,
      },
    },

    {
      type: "funding",
      title: "$1B+ Funding Raised by our clients",
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
      label: "Successful Projects",
    },
    {
      type: "teamMembers",
      value: "55+",
      label: "Team Members",
      teamMember: teamMember.src,
    },
    {
      type: "globalRemote",
      label: "Global Remote Team that Operates Internationally",
      globalRemote: globalRemote.src,
    },
  ],
}
