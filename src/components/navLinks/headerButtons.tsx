import Link from "next/link";
import { Icons } from "@/src/components/icons/icons";


const links = [
  // { name: "Home page", href: `/`, icon: homepageIcon },
  { name: "Communities", href: "/communities", icon: Icons.communitiesIcon },
  // { name: "Sign Up", href: "/signUp", icon: questionIcon },
];

export default function HeaderButtons() {
  const handleClick = () => {
    window.location.href = `http://localhost:3000`;
  };
  return (
    <>
      <button>
        <div className="flex" onClick={handleClick}>
          {Icons.homepageIcon} <div className="mr-5">Home page</div>
        </div>
      </button>
      {links.map((link, index) => {
        return (
            <div key={index}>
              <Link href={link.href}>
                <div className="flex justify-inline mr-4">
                  {link.icon}
                  {link.name}
                </div>
              </Link>
            </div>
        );
      })}
    </>
  );
}
