import Link from "next/link";
import { questionIcon, communitiesIcon, homepageIcon } from "../icons/icons";

const links = [
  { name: "Home page", href: "/", icon: homepageIcon },
  { name: "Communities", href: "/communities", icon: communitiesIcon },
];

export default function HeaderButtons() {
  return (
    <>
      {links.map((link, index) => {
        const LinkIcon = link.icon;
        return (
          <div key={index}>
            <Link href={link.href}>
              <div className="flex justify-inline">
                <LinkIcon />
                {link.name}
              </div>
            </Link>
          </div>
        );
      })}
    </>
  );
}
