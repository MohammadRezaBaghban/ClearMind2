import React from "react";
import Nav from "@/components/layout/nav";
import Footer from "./footer";
function layout({ children }) {
  return (
    <>
      <div className="flex flex-col">
        <img src="../hero-bg.png" className="absolute top-0 -z-20 w-full xl:h-[730px] h-[450px]" />

        <Nav />
        {children}
        <Footer/>
      </div>
    </>
  );
}

export default layout;
