import { Button, List, Modal } from "@react95/core";
import { Computer } from "@react95/icons";
import React, { FC } from "react";
import { AppLinkSC } from "./AppLink.styled";

interface AppLinkProps {
  icon: any;
  title: string;
  url: string | undefined;
}

const AppLink: FC<AppLinkProps> = ({ icon, title, url }) => {
  return (
    <AppLinkSC>
      <a href={url} target="_blank" rel="noopener noreferrer">
        {icon}
        <h1 className="text">{title}</h1>
      </a>
    </AppLinkSC>
  );
};

export default AppLink;
