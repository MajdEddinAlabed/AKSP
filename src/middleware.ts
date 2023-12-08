import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { headers } from 'next/headers';
import { RedirectType, permanentRedirect  } from 'next/navigation'

export const config = {
    matcher: [
      "/((?!api/|_next/|_static/|_vercel|[\\w-]+\\.\\w+).*)",
    ],
  };
  
export default async function middleware(req: NextRequest) {
  
    const headersList = headers();
    const domain = headersList.get('host') || "";
    const subdomain = domain.split('.')[0];

    // user is going to the main url
    if ( subdomain === process.env.APP_BASEURL) {
        return NextResponse.next();
    }
    
    // const isCommunityAvailable = getCumm().includes(subdomain);
    // if ( isCommunityAvailable ) {
    //     console.log(`/${subdomain}${req.nextUrl.pathname}`);

      return NextResponse.rewrite(new URL(`/${subdomain}${req.nextUrl.pathname}`, req.url));
    // }else {
    //     console.log("doe", process.env.APP_BASEURL);
    //     // return NextResponse.redirect(new URL("/",`${process.env.APP_BASEURL}`));
    //     return NextResponse.redirect(new URL("/",`http://${process.env.APP_BASEURL}/`));
    //     // permanentRedirect(`http://${process.env.APP_BASEURL}`,RedirectType.replace);
    //    // return NextResponse.redirect("http://localhost:3000", 302);
    // }

}
// function getCumm(): string[]{
//     return process.env.COMM_LIST?.split(',') ?? [];
//  }