import { NextRequest } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  // Get media details from WordPress
  const wpRes = await fetch(
    `https://backend.tradepassglobal.com/wp-json/wp/v2/media/${id}`,
    {
      cache: "force-cache",
    }
  );

  if (!wpRes.ok) {
    return new Response("Media not found", {
      status: 404,
    });
  }

  const media = await wpRes.json();

  // Download the original file
  const imageRes = await fetch(media.source_url);

  if (!imageRes.ok) {
    return new Response("File not found", {
      status: 404,
    });
  }

  return new Response(imageRes.body, {
    headers: {
      "Content-Type":
        imageRes.headers.get("content-type") ?? "application/octet-stream",
      "Content-Length":
        imageRes.headers.get("content-length") ?? "",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}