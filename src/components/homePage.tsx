import { BackAPIClient as api } from "@/src/lib/bClient/client";
import "/src/components/communityUi/card.css";
import tinycolor from "tinycolor2";
import { CommunityCard } from "./communityUi/CommunityCard";
import { generateRandomColors } from "../lib/randomCommColor";

// Usage in Communities component
export default async function HomePage() {
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
