import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
import { Header } from "./Header/Header";
import { AppContext } from "../context/context";
import { CustomCursor } from "./CustomCursor/CustomCursor";

const Layout = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const SettoggleMenu = (e) => {
    setToggleMenu(!toggleMenu);
  };
  return (
    <>
      <div className="App">
        <AppContext.Provider value={{ toggleMenu, SettoggleMenu }}>
          <Header />
          <CustomCursor />
          <Outlet />
        </AppContext.Provider>
      </div>
    </>
  );
};

export default Layout;
