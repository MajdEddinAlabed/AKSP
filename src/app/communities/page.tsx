
import { BackAPIClient as api } from "@/src/bClient/client";
import { CommunityCard } from "@/src/components/commDropdown/CommunityCard";
import { CommunityReadDto } from "@/src/lib/types";
import { redirect } from "next/dist/server/api-utils";
import Image from "next/image";
import Link from "next/link";



export default async function Communities() {
  const communities = await ( await api()).communitiesAll();
  return (
    <main>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-serif py-8">Communities</h1>
        <div>
          {communities.map((community) => (
            <CommunityCard key={community.id} {...community} />
          ))}
        </div>
      </div>
    </main>
  );
}
