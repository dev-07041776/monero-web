import { List, Modal, TaskBar } from "@react95/core";
import React, { FC } from "react";
import { desktopItems } from "../Desktop/Desktop";
import { ReaderClosed, WindowsExplorer } from "@react95/icons";

const StartBar: FC = () => {
  const [first, toggleFirst] = React.useState(false);
  const [second, toggleSecond] = React.useState(false);
  const closeFirst = () => toggleFirst(false);
  const closeSecond = () => toggleSecond(false);
  return (
    <>
      {first && (
        <Modal
          icon={<WindowsExplorer variant="16x16_4" />}
          title="Windows Explorer"
          closeModal={closeFirst}
          width="300"
          height="200"
        />
      )}

      {second && (
        <Modal
          defaultPosition={{
            x: 50,
            y: 50,
          }}
          width="300"
          height="200"
          icon={<ReaderClosed variant="16x16_4" />}
          title="Local Disk (C:)"
          closeModal={closeSecond}
        />
      )}

      <TaskBar
        list={
          <List>
            <List.Item icon={<WindowsExplorer variant="16x16_4" />}>
              Windows Explorer
            </List.Item>
            {/* {desktopItems.map((item, index) => (
              <List.Item icon={item.icon} key={index}>
                {item.title}
              </List.Item>
            ))} */}
          </List>
        }
      />
    </>
  );
};

export default StartBar;
