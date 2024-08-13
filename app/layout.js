import "./globals.css";
import { Providers } from "./providers";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { AnimatePresence } from "framer-motion";
import { QuickContact } from "./components/QuickContack";

export const metadata = {
  title: "Dhruv Sharma | Portfolio",
  description: "DHRUV SHARMA's portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <div className="h-screen w-screen overflow-x-hidden">
            <div className="flex flex-col gap-1 md:gap-3 items-start absolute left-0 z-50 top-80">
              <QuickContact />
            </div>
            {children}
            <SpeedInsights />
          </div>
        </Providers>
      </body>
    </html>
  );
}