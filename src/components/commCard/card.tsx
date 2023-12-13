import { BackAPIClient as api } from "@/src/bClient/client";
import { CommunityReadDto } from "@/src/lib/types";
import Link from "next/link";
import "./card.css";
import { useState } from "react";
import tinycolor from "tinycolor2";


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

function CommunityCard({ name, description, bgColor }: CommunityReadDto & { bgColor: string }) {
  return (
    <div className="ag-courses_item">
      <Link href="/q" className="ag-courses-item_link">
        <div className="ag-courses-item_bg" style={{ backgroundColor: bgColor }}></div>
        <div className="ag-courses-item_title">{name}</div>
        <div className="ag-courses-item_date-box">
          <span className="ag-courses-item_date">{description}</span>
        </div>
      </Link>
    </div>
  );
}

// Usage in Communities component
export default async function Communities() {
  const communities = await api().communitiesAll();
  // console.log("Communities:", communities);
  const randomColors = generateRandomColors(communities.length);

  return (
    <main>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-serif py-8">Communities</h1>
        <div className="ag-format-container ag-courses_box">
          {communities.map((community, index) => (
            <CommunityCard key={community.id} {...community} bgColor={randomColors[index]} />
          ))}
        </div>
      </div>
    </main>
  );
}

// import Link from "next/link";
// import "./card.css";
// import { useState } from "react";
// import tinycolor from "tinycolor2";


// // Function to generate a random color
// function getRandomColor(existingColors: string | string[]) {
//   let newColor;
//   do {
//     newColor = tinycolor.random().toHexString();
//   } while (existingColors.includes(newColor));
//   return newColor;
// }

// // Function to generate random colors for all cards
// function generateRandomColors(numCards: number) {
//   const colors: string | string[] = [];
//   for (let i = 0; i < numCards; i++) {
//     colors.push(getRandomColor(colors));
//   }
//   return colors;
// }
// interface CommunityCardProps {
//   name: string;
//   description: string;
//   bgColor: string;
// }

// function CommunityCard({ name, description, bgColor }: CommunityCardProps)
// {
//   return (
//     <div className="ag-courses_item">
//       <Link href="/q" className="ag-courses-item_link">
//         <div className="ag-courses-item_bg" style={{ backgroundColor: bgColor }}></div>
//         <div className="ag-courses-item_title">{name}</div>
//         <div className="ag-courses-item_date-box">
//           <span className="ag-courses-item_date">{description}</span>
//         </div>
//       </Link>
//     </div>
//   );
// }

// // Usage in Communities component
// export default async function Communities() {
//   let communities =[
//     {name :"first",description:"the frist comunity",bgColor:"black"},
//     {name :"second",description:"the second comunity",bgColor:"blue"},
//     {name :"third",description:"the third comunity",bgColor:"red"}
    
    
//   ];
//   const randomColors = generateRandomColors(communities.length);

//   return (
//     <main>
//       <div className="flex flex-col items-center justify-center">
//         <h1 className="text-4xl font-serif py-8">Communities</h1>
//         <div className="ag-format-container ag-courses_box">
//           {communities.map((community, index) => (
//             <CommunityCard {...community} bgColor={randomColors[index]} />
//           ))}
//         </div>
//       </div>
//     </main>
//   );
// }

