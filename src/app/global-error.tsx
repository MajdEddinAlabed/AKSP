'use client'

import { isAxiosError } from "axios";
import { RedirectType, permanentRedirect } from "next/navigation";

 
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  if (!isAxiosError(error)) {
    permanentRedirect(`http://${process.env.APP_BASEURL}`,RedirectType.replace);
}
  return (
    <html>
      <body>
        <h2>Something went wrong!</h2>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  )
}