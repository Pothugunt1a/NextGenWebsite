import { ReactNode } from "react";
import { useLocation } from "wouter";
import Navbar from "./Navbar";
import Footer from "./Footer";
import InfoBanner from "./InfoBanner";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [location] = useLocation();
  const showInfoBanner = location !== "/contact";

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar isDarkBackground={true} />
      <main className="flex-grow">{children}</main>
      {showInfoBanner && <InfoBanner />}
      <Footer />
    </div>
  );
}
