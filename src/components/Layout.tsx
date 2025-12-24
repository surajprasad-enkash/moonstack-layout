import React from "react";
import Footer from "./Footer";
import BodyClass from "./BodyClass/BodyClass"; // Ensure this path is correct
import NewHeader from "@/components/Header/Header";
import BackgroundLines from "./Homepage/BackgroundLines";
 

interface IHeaderRefs {
  home: React.RefObject<HTMLDivElement>;
  service: React.RefObject<HTMLDivElement>;
  aboutUs: React.RefObject<HTMLDivElement>;
  contactUs: React.RefObject<HTMLDivElement>;
  career: React.RefObject<HTMLDivElement>;
  talkBtn: React.RefObject<HTMLDivElement>;
}
 
interface IFooterRefs {
  footerCareer: React.RefObject<HTMLDivElement>;
  terms: React.RefObject<HTMLDivElement>;
  privacy: React.RefObject<HTMLDivElement>;
  blog: React.RefObject<HTMLDivElement>;
  footerContactUs: React.RefObject<HTMLDivElement>;
  twitter: React.RefObject<HTMLDivElement>;
  facebook: React.RefObject<HTMLDivElement>;
  whatsapp: React.RefObject<HTMLDivElement>;
  linkedin: React.RefObject<HTMLDivElement>;
}
 
const Layout: React.FC<{
  children: React.ReactNode;
  refs?: IHeaderRefs;
  footerRefs?: IFooterRefs;
}> = ({ children }) => {
  return (
    <>
      <BodyClass />
     
      
      {/* <Header refs={refs} /> */}
      <NewHeader />
      <main className="relative bg-black">
        <BackgroundLines />
          {/* <ProjectInquiryModal /> */}
        <div className="z-3 relative">
        {children}
        </div>
        <Footer />
      </main>
    </>
  );
};
 
export default Layout;