import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { headers } from 'next/headers';
import { redirect } from 'next/navigation'
 
export default async function middleware(req: NextRequest) {
    const host = req;
    // console.log("host", host);
    const headersList = headers();
    const domain = headersList.get('host') || "";
    const subdomain = domain.split('.')[0];
    if ( subdomain !== process.env.APP_BASEURL && !getCumm().includes(subdomain) ) {
        console.log("doe", process.env.APP_BASEURL);
        return NextResponse.redirect("http://localhost:3000", 302);
    }
}
function getCumm(): string[]{
    return process.env.CUMM_LIST?.split(',') ?? [];
 }