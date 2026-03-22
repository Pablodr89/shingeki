import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Providers } from "@/providers/providers";

export const metadata: Metadata = {
  title: "Shingeki No Kyojin APP",
  description:
    "Listado con filtrado de personajes del anime y detalle de cada personaje",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body>
        <Navbar />

        <Providers>
          <main className="flex flex-1 flex-col max-[2000px]:max-w-7xl min-[2000px]:max-w-400 mx-auto pt-40">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
