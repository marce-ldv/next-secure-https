import { NextResponse, type NextRequest } from 'next/server'

// eslint-disable-next-line @typescript-eslint/require-await
export async function middleware(req: NextRequest) {

  // const currentEnv = process.env.NEXT_PUBLIC_ENVIRONMENT

  if (req.headers.get("x-forwarded-proto") !== "https") {
    return NextResponse.redirect(
      `https://${req.nextUrl.hostname}${req.nextUrl.pathname}`,
      301
    )
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next|favicon.ico|adm/api|adp/api|pgs/api).*)',
  ],
}
