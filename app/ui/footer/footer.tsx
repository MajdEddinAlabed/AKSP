import Link from "next/link";

export default function Footer() {
  const current_year = new Date().getFullYear();
  return (
    <div className="w-full text-white text-xs fixed bottom-0">
      <div className="text-center py-4">
        <p className="text-sm">Copyright © {current_year}, ASKP. All Rights Reserved.</p>
      </div>
    </div>
  );
}
