import * as React from "react"

export default function WebsiteDev(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      {...props}
    >
      <rect
        width="40"
        height="40"
        rx="4.97528"
        fill="url(#paint0_radial_132_783)"
      />

      <path
        d="M19.3573 30.6852L10.3369 25.4772C9.16374 24.7999 9.129 23.1191 10.2731 22.3939L18.1418 17.4063C18.7034 17.0504 19.4154 17.0325 19.9942 17.3599L29.4962 22.7343C30.7101 23.4209 30.7178 25.1669 29.5101 25.8642L21.1597 30.6852C20.6021 31.0072 19.915 31.0072 19.3573 30.6852Z"
        fill="#38FF3F"
      />

      {/* Blur Layer 1 */}
      <foreignObject x="8.53433" y="12.339" width="22.778" height="15.6013">
        <div
          style={{
            backdropFilter: "blur(0.45px)",
            clipPath: "url(#bgblur_0_132_783_clip_path)",
            height: "100%",
            width: "100%",
          }}
        />
      </foreignObject>

      <path
        d="M19.3573 26.7985L10.3369 21.5905C9.16374 20.9132 9.129 19.2324 10.2731 18.5072L18.1418 13.5196C18.7034 13.1637 19.4154 13.1458 19.9942 13.4731L29.4962 18.8476C30.7101 19.5342 30.7178 21.2801 29.5101 21.9774L21.1597 26.7985C20.6021 27.1205 19.915 27.1205 19.3573 26.7985Z"
        fill="#00A405"
      />

      {/* Blur Layer 2 */}
      <foreignObject x="8.53433" y="8.19253" width="22.778" height="15.6013">
        <div
          style={{
            backdropFilter: "blur(0.45px)",
            clipPath: "url(#bgblur_1_132_783_clip_path)",
            height: "100%",
            width: "100%",
          }}
        />
      </foreignObject>

      <path
        d="M19.3573 22.652L10.3369 17.444C9.16374 16.7667 9.129 15.0859 10.2731 14.3607L18.1418 9.37314C18.7034 9.01717 19.4154 8.9993 19.9942 9.32665L29.4962 14.7011C30.7101 15.3877 30.7178 17.1336 29.5101 17.831L21.1597 22.652C20.6021 22.974 19.915 22.974 19.3573 22.652Z"
        fill="#3FE644"
      />

      <defs>
        <clipPath
          id="bgblur_0_132_783_clip_path"
          transform="translate(-8.53433 -12.339)"
        >
          <path d="M19.3573 26.7985L10.3369 21.5905C9.16374 20.9132 9.129 19.2324 10.2731 18.5072L18.1418 13.5196C18.7034 13.1637 19.4154 13.1458 19.9942 13.4731L29.4962 18.8476C30.7101 19.5342 30.7178 21.2801 29.5101 21.9774L21.1597 26.7985C20.6021 27.1205 19.915 27.1205 19.3573 26.7985Z" />
        </clipPath>

        <clipPath
          id="bgblur_1_132_783_clip_path"
          transform="translate(-8.53433 -8.19253)"
        >
          <path d="M19.3573 22.652L10.3369 17.444C9.16374 16.7667 9.129 15.0859 10.2731 14.3607L18.1418 9.37314C18.7034 9.01717 19.4154 8.9993 19.9942 9.32665L29.4962 14.7011C30.7101 15.3877 30.7178 17.1336 29.5101 17.831L21.1597 22.652C20.6021 22.974 19.915 22.974 19.3573 22.652Z" />
        </clipPath>

        <radialGradient
          id="paint0_radial_132_783"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(1.99978 1.39164) rotate(45.2682) scale(52.0623)"
        >
          <stop stopColor="#00620B" />
          <stop offset="1" stopColor="#00A313" />
        </radialGradient>
      </defs>
    </svg>
  )
}
