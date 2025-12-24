"use client";

// import {
//   ComposableMap,
//   Geographies,
//   Geography,
//   Marker,
// } from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const locations = [
  {
    name: "Jaipur, India",
    coordinates: [75.7434609, 26.9085373],
    mapUrl:
      "https://www.google.com/maps/@26.9085373,75.7434609,16z/data=!4m2!7m1!2e1",
  },
  {
    name: "Delaware, USA",
    coordinates: [-75.524368, 39.158168],
    mapUrl:
      "https://www.google.com/maps/place/8+The+Green,+STE+R,+Dover,+DE+19901,+USA",
  },
];

export default function WorldMap() {
  const openMap = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      style={{
        padding: "12px",
      }}
    >
      {/* <ComposableMap projectionConfig={{ scale: 160 }}>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#0b3b1c"
                stroke="#1f6b3a"
                strokeWidth={0.5}
              />
            ))
          }
        </Geographies>

  
        {locations.map((loc) => (
          <Marker key={loc.name} coordinates={loc.coordinates}>
            <g
              onClick={() => openMap(loc.mapUrl)}
              style={{ cursor: "pointer" }}
              aria-label={`Open ${loc.name} in Google Maps`}
            >
              <title>{loc.name} – Open in Google Maps</title>

              <circle r={5} fill="#7CFFB2" />
              <circle
                r={5}
                fill="none"
                stroke="#7CFFB2"
                strokeWidth={2}
                className="pulse"
              />
            </g>
          </Marker>
        ))}
      </ComposableMap> */}
    </div>
  );
}
