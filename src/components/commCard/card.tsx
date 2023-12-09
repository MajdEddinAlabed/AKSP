import { BackAPIClient as api } from "@/src/bClient/client";
import { CommunityReadDto } from "@/src/lib/types";
import Link from "next/link";
import "./card.css";
import { useState } from "react";
import tinycolor from "tinycolor2";
import { CommunityCard } from "../commDropdown/CommunityCard";

// Function to generate a random color
function getRandomColor(existingColors: string | string[]) {
  let newColor;
  do {
    newColor = tinycolor.random().toHexString();
  } while (existingColors.includes(newColor));
  return newColor;
}

// Function to generate random colors for all cards
function generateRandomColors(numCards: number) {
  const colors: string | string[] = [];
  for (let i = 0; i < numCards; i++) {
    colors.push(getRandomColor(colors));
  }
  return colors;
}

// Usage in Communities component
export default async function Communities() {
  const communities = await (await api()).communitiesAll();
  // console.log("Communities:", communities);
  const randomColors = generateRandomColors(communities.length);

  return (
    <main>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-serif py-8">Communities</h1>
        <div className="ag-format-container ag-courses_box">
          {communities.map((community, index) => (
            <CommunityCard
              key={community.id}
              {...community}
              bgColor={randomColors[index]}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
