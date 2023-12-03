import Image from "next/image";

export const Logo = () => (
  <a href="/" className="-m-1.5 p-1.5">
    <Image
      className=""
      src="/logoS.jpg"
      alt="ASKP Logo"
      width={250}
      height={0}
    />
  </a>
);
