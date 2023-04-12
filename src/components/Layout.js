import React from "react";
import Header from "./Header";

const Layout = ({ children, menu }) => {
  return (
    <>
      <Header menu={menu} />
      <main>{children}</main>
    </>
  );
};

export default Layout;
