import Link from "next/link";
type Props = {
  width: number;
};

type WidthClassesType = {
  [key: number]: string;
};

export default function askButton({ width }: Props) {
  const widthClasses: WidthClassesType = {
    52: "w-52",
    64: "w-64",
    // Add more as needed
  };
  return (
    <div
    className={`flex items-center justify-end ${widthClasses[width]} max-w-xs`}
    >
    <Link href="/q/ask">
      <button className="button">Ask Question</button>
    </Link>

    </div>

  );
}
 