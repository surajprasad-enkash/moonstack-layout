"use client"

import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps"
import Image from "next/image"
import usaFlag from "@/assets/contact-us/usa-flag.webp"
import indiaFlag from "@/assets/contact-us/india-flag.webp"

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json"

const locations = [
  {
    id: "INDIA",
    countryName: "India",
    label: "INDIA",
    coordinates: [75.7434609, 26.9085373],
    mapUrl: "https://www.google.com/maps/@26.9085373,75.7434609,16z",
  },
  {
    id: "USA",
    countryName: "United States of America",
    label: "USA",
    coordinates: [-75.524368, 39.158168],
    mapUrl:
      "https://www.google.com/maps/place/8+The+Green,+STE+R,+Dover,+DE+19901,+USA",
  },
]

export default function WorldMap({
  activeLocation,
  setActiveLocation,
}: {
  activeLocation: string | null
  setActiveLocation: (val: string | null) => void
}) {
  const openMap = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer")
  }

  const highlightedCountry =
    activeLocation === "USA"
      ? "United States of America"
      : activeLocation === "INDIA"
        ? "India"
        : null

  return (
    <div className="mx-auto h-[auto] w-full md:h-[500px] md:w-2/3">
      <ComposableMap projectionConfig={{ scale: 160 }}>
        <Geographies geography={geoUrl}>
          {({
            geographies,
          }: {
            geographies: {
              rsmKey: string
              properties: {
                NAME: string
              }
            }[]
          }) =>
            geographies.map((geo) => {
              const isIndia = geo.properties.NAME === "India"
              const isUSA = geo.properties.NAME === "United States of America"

              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={
                    geo.properties.NAME === highlightedCountry
                      ? "#D0F601"
                      : "#0b3b1c"
                  }
                  stroke="#1f6b3a"
                  strokeWidth={0.5}
                  style={{
                    default: { outline: "none" },
                    hover: { outline: "none" },
                    pressed: { outline: "none" },
                  }}
                  onMouseEnter={() => {
                    if (isIndia) setActiveLocation("INDIA")
                    if (isUSA) setActiveLocation("USA")
                  }}
                  onMouseLeave={() => setActiveLocation(null)}
                />
              )
            })
          }
        </Geographies>

        {/* MARKERS */}
        {locations.map((loc) => (
          <Marker key={loc.id} coordinates={loc.coordinates}>
            <g
              onMouseEnter={() => setActiveLocation(loc.id)}
              onMouseLeave={() => setActiveLocation(null)}
              onClick={() => openMap(loc.mapUrl)}
              style={{ cursor: "pointer" }}
            >
              <circle r={5} fill="#7CFFB2" />

              {/* TAG */}
              {activeLocation === loc.id && (
                <foreignObject x={8} y={-28} width={90} height={32}>
                  <div className="flex items-center gap-1 rounded-full bg-black px-2 py-1 text-xs text-white shadow-lg">
                    <Image
                      src={loc.id === "USA" ? usaFlag : indiaFlag}
                      alt=""
                      width={14}
                      height={14}
                    />
                    {loc.label}
                  </div>
                </foreignObject>
              )}
            </g>
          </Marker>
        ))}
      </ComposableMap>
    </div>
  )
}
