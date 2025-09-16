import React from "react";
import Header from "./Header";
import Footer from "./Footer";

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

const Layout: React.FC<{ children: React.ReactNode, refs: IHeaderRefs, footerRefs: IFooterRefs }> = ({ children, refs, footerRefs }) => {
    return (
        <React.Fragment>
            <Header refs={refs} />
            <main className="hover-white-text">{children}</main>
            <Footer refs={footerRefs} />
        </React.Fragment>
    );
};

export default Layout;
