import React from "react";
import { Outlet } from "react-router-dom";

import Footer from "../ui/footer/Footer";
import Header from "../ui/header/Header";
import ScrollToTopButton from "../ui/buttons/scroll-to-top/ScrollToTopButton";

const MainLayout = () => {
  return (<>
      <Header title="" />
      {/* <Outlet /> */}
      <div className="flex justify-center items-center font-medium text-4xl text-gray-500 h-96 bg-background">

      </div>
      <ScrollToTopButton onClick={() => {}} />
      <Footer />
  </>);
}

export default MainLayout;