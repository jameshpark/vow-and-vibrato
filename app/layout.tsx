import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("host") || "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") || (host.startsWith("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;
  const title = "Vow & Vibrato — Wedding String Repertoire";
  const description = "Listen to classical and modern wedding favorites arranged for strings.";

  return {
    metadataBase: new URL(origin),
    title,
    description,
    openGraph: { title, description, images: [{ url: `${origin}/og.png`, width: 1732, height: 909, alt: "Vow & Vibrato wedding string repertoire" }] },
    twitter: { card: "summary_large_image", title, description, images: [`${origin}/og.png`] },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
