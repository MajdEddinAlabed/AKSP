import { Inter } from "next/font/google";
import "@/src/components/globals.css";
import Header from "@/src/components/header/header";
import Footer from "@/src/components/footer/footer";
import { BackAPIClient as api } from "@/src/lib/bClient/client";
import { CommunityReadDto } from "@/src/lib/types";
import { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });
interface AppRootProps {
  children: ReactNode;
}
const AppRoot: React.FC<AppRootProps> = async ({ children }) => {
  const communities: CommunityReadDto[] = await (await api()).communitiesAll();
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header communities={communities} />
        {children}
        <Footer />
      </body>
    </html>
  );
};
export default AppRoot;
