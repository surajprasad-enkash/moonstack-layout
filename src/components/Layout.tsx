import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import BodyClass from "./BodyClass/BodyClass"; // Ensure this path is correct
import NewHeader from "@/components/Header/Header";

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
}> = ({
  children,
  refs = {} as IHeaderRefs,
  footerRefs = {} as IFooterRefs,
}) => {
  return (
    <>
      <BodyClass />
      {/* <Header refs={refs} /> */}
      <NewHeader />
      <main className="bg-black relative z-[2]">{children}</main>
      <Footer refs={footerRefs} />
    </>
  );
};

export default Layout;
