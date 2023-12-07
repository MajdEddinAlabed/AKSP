import Link from 'next/link';

export default function askButton() {
  return (
    <div className="flex items-center justify-center w-52 max-w-xs">
      <Link href="/q/ask">
          <button className="button">Ask Question</button>
      </Link>
    </div>
  );
}
 