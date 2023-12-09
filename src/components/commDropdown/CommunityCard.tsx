"use client";
import { CommunityReadDto } from "@/src/lib/types";

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
