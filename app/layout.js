import "./globals.css";
import { Providers } from "./providers";

export const metadata = {
  title: "Dhruv Sharma | Portfolio",
  description: "DHRUV SHARMA's portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
