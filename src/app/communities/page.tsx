import { Client, CommunityReadDto } from "@/src/bClient/clients";
import Image from "next/image";

function CommunityCard(community: CommunityReadDto) {
  return (
    <>
      {/* <div className="w-64 h-64 bg-gray-100 rounded-lg shadow-md">
        <Image src=`"{community.icon}"` alt="" layout="fill" />
      </div> */}
      <div className="p-4 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-20 2xl:mx-24">
        <div className="border border-solid border-white rounded-lg p-4 font-IBMPlexSansArabic text-right antialiased">
          <h1 className="font-bold text-2xl ">{community.name}</h1>
          <p className="font-light text-lg text-stone-300	">
            {community.description}
          </p>
        </div>
        <div className="my-8"></div>
      </div>
    </>
  );
}

export default async function Communities() {
  const api = new Client("http://api.myapp.com:8081");
  const communities = await api.communitiesAll();
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
