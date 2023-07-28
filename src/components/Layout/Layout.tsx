import { TaskBar } from "@react95/core";
import React, { FC } from "react";
import { LayoutSC } from "./Layout.styled";
import Desktop from "./components/Desktop";

interface LayoutProps {}

const Layout: FC<LayoutProps> = ({}) => {
  return (
    <LayoutSC>
      <Desktop />
      <TaskBar />
    </LayoutSC>
  );
};

export default Layout;
