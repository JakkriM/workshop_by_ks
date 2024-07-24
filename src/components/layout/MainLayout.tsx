import React from "react";
import AppBar from "./AppBar";

type MainLayoutType = {
  children?: JSX.Element | React.ReactNode;
};
const MainLayout = ({ children }: MainLayoutType) => {
  return (
    <>
      <AppBar />
      <div>{children}</div>
    </>
  );
};

export default MainLayout;
