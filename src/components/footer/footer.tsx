import Link from "next/link";

export default function Footer() {
  const current_year = new Date().getFullYear();
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow"></div>
      <div className="text-center py-4">
        <Link href="/about">About</Link>
        <p className="text-sm ">
          Copyright © {current_year}, ASKP. All Rights Reserved.{" "}
        </p>
      </div>
      <div>
        <p></p>
      </div>
    </div>
  );
}
