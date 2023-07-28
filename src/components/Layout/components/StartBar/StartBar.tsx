import { List, TaskBar } from "@react95/core";
import React, { FC } from "react";
import { desktopItems } from "../Desktop/Desktop";

interface StartBarProps {}

const StartBar: FC<StartBarProps> = ({}) => {
  return (
    <TaskBar
      list={
        <List>
          {desktopItems.map((item, index) => (
            <List.Item icon={item.icon} key={index}>
              {item.title}
            </List.Item>
          ))}
        </List>
      }
    />
  );
};

export default StartBar;
