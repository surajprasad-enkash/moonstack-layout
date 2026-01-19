// data/impactStats.ts
import lottieFile from "../../../../public/lottie/about-page/businessYear.json"
// import clientImg from "@/assets/ImpactStatsSection/clientimg.png";
import clientImg from "@/assets/newHomePage/ImpactStatsSection/client_logo.png"

// import MYSO from "@/assets/newHomePage/ImpactStatsSection/myso.png";
import MYSO from "@/assets/newHomePage/ImpactStatsSection/myso.png"
import paradigm from "@/assets/newHomePage/ImpactStatsSection/paradigm.png"
import players from "@/assets/newHomePage/ImpactStatsSection/players.png"
import voxe from "@/assets/newHomePage/ImpactStatsSection/voxe.png"
import teamMember from "@/assets/newHomePage/ImpactStatsSection/teamMember.webp"
import globalRemote from "@/assets/newHomePage/ImpactStatsSection/icon/globalRemote.svg"
export const impactStatsData = {
  heading: {
    prefix: "Today, ",
    highlight: "Moonstack",
    suffix:
      "holds a trusted, market-leading position as a global technology partner.",
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
        "Moonstack brought clarity, technical expertise, and a collaborative mindset. Their close communication and ownership mindset made a real difference to our product journey.",
      author: {
        name: "Kirill Onasenko",
        role: "CEO",
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
}
