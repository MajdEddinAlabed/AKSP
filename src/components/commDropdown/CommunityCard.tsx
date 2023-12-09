"use client";
import { CommunityReadDto } from "@/src/lib/types";
import { redirect } from "next/navigation";

export function CommunityCard2(community: CommunityReadDto) {
  const handleClick = () => {
    window.location.href = `http://${community.host}.localhost:3000`;
  };
  return (
    <>
      {/* <div className="w-64 h-64 bg-gray-100 rounded-lg shadow-md">
            <Image src=`"{community.icon}"` alt="" layout="fill" />
          </div> */}
      <div onClick={handleClick}>
        <div className="p-4 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-20 2xl:mx-24">
          <div className="border border-solid border-white rounded-lg p-4 font-IBMPlexSansArabic text-right antialiased">
            <h1 className="font-bold text-2xl ">{community.name}</h1>
            <p className="font-light text-lg text-stone-300	">
              {community.description}
            </p>
          </div>
          <div className="my-8"></div>
        </div>
      </div>
    </>
  );
}

export function CommunityCard({
  name,
  description,
  bgColor,
  host,
}: CommunityReadDto & { bgColor: string }) {
  const handleClick = () => {
    window.location.href = `http://${host}.localhost:3000`;
  };

  return (
    <div className="ag-courses_item" onClick={handleClick}>
      <div className="ag-courses-item_link">
        <div
          className="ag-courses-item_bg"
          style={{ backgroundColor: bgColor }}
        ></div>
        <div className="ag-courses-item_title">{name}</div>
        <div className="ag-courses-item_date-box">
          <span className="ag-courses-item_date">{description}</span>
        </div>
      </div>
    </div>
  );
}