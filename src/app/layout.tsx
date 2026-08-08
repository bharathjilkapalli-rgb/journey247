import type { Metadata } from "next";
import { Toaster } from "sonner";
import "./globals.css";

export const metadata: Metadata = {
  title: "ROAD TO 247 — Official Builder Clearance Terminal | Hacker House Goa 2026",
  description: "Official Builder Clearance Terminal for Hacker House Goa 2026. Earn your official Builder Clearance and start your Road to 247.",
  openGraph: {
    title: "ROAD TO 247 — Official Builder Clearance Terminal",
    description: "Every builder begins somewhere. Welcome to the Road to 247 for Hacker House Goa 2026.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="bg-forest-950 text-cream-50 antialiased min-h-screen selection:bg-hh-pink selection:text-white">
        {children}
        <Toaster
          position="bottom-center"
          toastOptions={{
            style: {
              background: "#0D5C3A",
              color: "#FAF7F2",
              border: "1px solid rgba(250, 204, 21, 0.3)",
              fontFamily: "var(--font-sans)",
            },
          }}
        />
      </body>
    </html>
  );
}
