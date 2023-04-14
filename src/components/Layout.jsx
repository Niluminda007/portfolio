import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { Header } from "./Header/Header";
import { AppContext } from "../context/context";
import { CustomCursor } from "./CustomCursor/CustomCursor";

const Layout = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const mediaQueryMobile = window.matchMedia("(max-width: 500px)");
    const mediaQueryTablet = window.matchMedia(
      "(min-width: 501px) and (max-width: 1300px)"
    );
    setIsMobile(mediaQueryMobile.matches);
    setIsTablet(mediaQueryTablet.matches);

    const handleMediaQueryMobileChange = (e) => {
      setIsMobile(e.matches);
    };

    const handleMediaQueryTabletChange = (e) => {
      setIsTablet(e.matches);
    };

    mediaQueryMobile.addEventListener("change", handleMediaQueryMobileChange);
    mediaQueryTablet.addEventListener("change", handleMediaQueryTabletChange);
    return () => {
      mediaQueryMobile.removeEventListener(
        "change",
        handleMediaQueryMobileChange
      );
      mediaQueryTablet.removeEventListener(
        "change",
        handleMediaQueryTabletChange
      );
    };
  }, []);

  const SettoggleMenu = (e) => {
    setToggleMenu(!toggleMenu);
  };
  return (
    <>
      <div className="App">
        <AppContext.Provider
          value={{ toggleMenu, SettoggleMenu, isMobile, isTablet }}
        >
          <Header />
          {!isMobile && !isTablet && <CustomCursor />}
          <Outlet />
        </AppContext.Provider>
      </div>
    </>
  );
};

export default Layout;
