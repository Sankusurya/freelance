import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Freelance Dashboard - Find the perfect freelance services",
  description: "Connect with top freelance talent or find your next gig on our premium marketplace.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#FBFCFF] relative min-h-screen`}
      >
        {/* Animated Background Blobs */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 bg-[#FBFCFF]">
          <div
            className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-rose-500/10 blur-[120px] animate-blob"
          />
          <div
            className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-500/10 blur-[120px] animate-blob"
            style={{ animationDelay: "2s" }}
          />
          <div
            className="absolute bottom-[-20%] left-[10%] w-[60%] h-[60%] rounded-full bg-blue-500/10 blur-[120px] animate-blob"
            style={{ animationDelay: "4s" }}
          />
          <div
            className="absolute bottom-[10%] right-[10%] w-[40%] h-[40%] rounded-full bg-purple-500/10 blur-[120px] animate-blob"
            style={{ animationDelay: "6s" }}
          />
        </div>

        {children}
      </body>
    </html>
  );
}
