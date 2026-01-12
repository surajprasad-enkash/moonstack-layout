"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

import coneImg from "public/assets/carreers/piramidImg.svg";
import logo from "public/assets/carreers/MOONSTACK.svg";

const avatars = [
  "/assets/carreers/avatar_1.png",
  "/assets/carreers/avatar_2.png",
  "/assets/carreers/avatar_3.png",
  "/assets/carreers/avatar_4.png",
  "/assets/carreers/avatar_5.png",
  "/assets/carreers/avatar_6.png",
  "/assets/carreers/avatar_7.png",
  "/assets/carreers/avatar_8.png",
  "/assets/carreers/avatar_9.png",
  "/assets/carreers/avatar_10.png",
];

const PiramidAnimation = () => {
  const [fallenSet, setFallenSet] = useState<Set<number>>(new Set());

  useEffect(() => {
    const startAnimation = () => {
      let left = 0;
      let right = avatars.length - 1;

      const fallNextPair = () => {
        setFallenSet((prev) => {
          const next = new Set(prev);
          next.add(Math.min(left, avatars.length - 1));
          next.add(Math.max(right, 0));
          return next;
        });

        left++;
        right--;

        if (left <= right) {
          setTimeout(fallNextPair, 1400);
        } else {
          setTimeout(() => {
            setFallenSet(new Set());
            setTimeout(startAnimation, 1500);
          }, 1800);
        }
      };

      fallNextPair();
    };

    startAnimation();
  }, []);

  return (
    <div className="pyramid-section relative flex w-full justify-center">
      <div className="pyramid-wrapper relative">
        {/* Pyramid */}
        <Image
          src={coneImg}
          alt="cone"
          className="pyramid-img"
          width={460}
          height={420}
        />{" "}
        <div className="pyramid-logo">
          <Image src={logo} alt="cone" className="" width={130} height={120} />
        </div>
        {/* Avatars */}
        <div className="avatars-layer pointer-events-none absolute top-0 left-1/2 h-full w-full">
          {avatars.map((src, index) => {
            const radiusInit = 200;
            const offsetInit = 140;
            const radiusFall = 70;
            const offsetFall = 320;

            const startAngle = -80;
            const endAngle = 80;

            const angle =
              startAngle +
              (index * (endAngle - startAngle)) / (avatars.length - 1);

            const angleRad = (angle * Math.PI) / 180;

            const initX = radiusInit * Math.sin(angleRad);
            const initY = -radiusInit * Math.cos(angleRad) - offsetInit;

            const isEdge = index === 0 || index === avatars.length - 1;

            const fallX = radiusFall * Math.sin(angleRad);
            const fallY =
              -radiusFall * Math.cos(angleRad) + offsetFall + (isEdge ? 60 : 0);

            const isLeft = angle < 0;
            const rotateDeg = isEdge ? (isLeft ? -25 : 25) : isLeft ? -20 : 20;
            const scale = isEdge ? 0.7 : 0.8;

            const initTransform = `translate(${initX}px, ${initY}px) translate(-50%, -50%)`;
            const fallTransform = `translate(${fallX}px, ${fallY}px) translate(-50%, -50%) rotate(${rotateDeg}deg) scale(${scale})`;

            const isFallen = fallenSet.has(index);

            return (
              <div
                key={index}
                className="avatar absolute top-1/2 left-1/2"
                style={{
                  transform: isFallen ? fallTransform : initTransform,
                  zIndex: isFallen ? 30 + index : index,
                  transition: "transform 1.5s cubic-bezier(0.25, 0.1, 0.25, 1)",
                }}
              >
                <Image
                  src={src}
                  alt={`avatar ${index}`}
                  width={50}
                  height={50}
                />
              </div>
            );
          })}
        </div>
        {/* Floating badges */}
        <div className="badges-layer pointer-events-none absolute h-full w-full">
          <div
            className="badge absolute"
            style={{ left: "12%", bottom: "55%" }}
          >
            Design pattern
          </div>
          <div
            className="badge absolute"
            style={{ left: "12%", bottom: "32%" }}
          >
            Code quality
          </div>
          <div
            className="badge absolute"
            style={{
              left: "50%",
              bottom: "18%",
              transform: "translateX(-50%)",
            }}
          >
            Performance
          </div>
          <div
            className="badge absolute"
            style={{ right: "12%", bottom: "35%" }}
          >
            Security
          </div>
          <div
            className="badge absolute"
            style={{ left: "0%", bottom: "5%", transform: "translateX(-50%)" }}
          >
            Language proficiency
          </div>
        </div>
      </div>
    </div>
  );
};

export default PiramidAnimation;
