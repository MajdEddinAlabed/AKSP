import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { headers } from "next/headers";

export const config = {
  matcher: ["/((?!api/|_next/|_static/|_vercel|[\\w-]+\\.\\w+).*)"],
};

export default async function middleware(req: NextRequest) {
  const headersList = headers();
  const domain = headersList.get("host") || "";
  const subdomain = domain.split(".")[0];

  // user is going to the main url
  if (subdomain === process.env.APP_BASEURL) {
    return NextResponse.next();
  }

  // const isCommunityAvailable = getComm().includes(subdomain);
  // if ( isCommunityAvailable ) {
  //     console.log(`/${subdomain}${req.nextUrl.pathname}`);
  try {
    // console.log("re0");
    // console.log(subdomain);
    // console.log(req.nextUrl.pathname);
    // console.log((new URL(`/${subdomain}${req.nextUrl.pathname}`, req.url)).href);
    return NextResponse.rewrite(
      new URL(`/${subdomain}${req.nextUrl.pathname}`, req.url)
    );
  } catch (error) {}
  // }else {
  //     console.log("doe", process.env.APP_BASEURL);
  //     // return NextResponse.redirect(new URL("/",`${process.env.APP_BASEURL}`));
  //     return NextResponse.redirect(new URL("/",`http://${process.env.APP_BASEURL}/`));
  //     // permanentRedirect(`http://${process.env.APP_BASEURL}`,RedirectType.replace);
  //    // return NextResponse.redirect("http://localhost:3000", 302);
  // }
}
// function getComm(): string[]{
//     return process.env.COMM_LIST?.split(',') ?? [];
//  }
