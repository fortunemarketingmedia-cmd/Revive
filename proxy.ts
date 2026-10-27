import { NextRequest, NextResponse } from "next/server";

const withheldPatientMedia = new Set([
  "/images/treatments/acne_a.webp",
  "/images/treatments/acne_b.webp",
  "/images/treatments/laser_Photofacial_a.webp",
  "/images/treatments/laser_Photofacial_b.webp",
  "/images/treatments/prp_scalp_a.webp",
  "/images/treatments/prp_scalp_b.webp",
]);

export function proxy(request: NextRequest) {
  const forwardedHost = request.headers.get("x-forwarded-host")?.split(",")[0]?.trim();
  const host = forwardedHost || request.headers.get("host")?.split(":")[0];

  if (host === "reviveskinclinics.in") {
    const destination = request.nextUrl.clone();
    destination.protocol = "https";
    destination.hostname = "www.reviveskinclinics.in";
    destination.port = "";
    return NextResponse.redirect(destination, 301);
  }

  if (
    request.nextUrl.pathname.startsWith("/images/gallery/before-after/")
    || withheldPatientMedia.has(request.nextUrl.pathname)
  ) {
    return new NextResponse("Not found", {
      status: 404,
      headers: { "X-Robots-Tag": "noindex, noimageindex" },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/:path*",
};
