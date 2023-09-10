import { Button, List, Modal } from "@react95/core";
import { Computer } from "@react95/icons";
import React, { FC } from "react";
import { AppButtonSC } from "./AppButton.styled";
import AppLink from "../AppLink";

interface AppButtonProps {
  icon: any;
  title: string;
  shown: boolean;
  url: string | undefined;
  children?: React.ReactNode;
  height: any;
  width: any;
}

const AppButton: FC<AppButtonProps> = ({
  icon,
  title,
  shown,
  url,
  children,
  height,
  width,
}) => {
  const [showModal, toggleShowModal] = React.useState(shown);
  const handleOpenModal = () => toggleShowModal(true);
  const handleCloseModal = () => toggleShowModal(false);
  const handleButtonClick = (e: React.MouseEvent<HTMLLIElement>) =>
    alert(e.currentTarget.value);

  if (url) {
    return <AppLink icon={icon} title={title} url={url} />;
  }
  return (
    <>
      <AppButtonSC onClick={handleOpenModal}>
        {icon}
        <p className="text">{title}</p>
      </AppButtonSC>
      {showModal && (
        <Modal
          className="modal"
          width={width}
          height={height}
          icon={icon}
          title={title}
          closeModal={handleCloseModal}
          children={children}
        />
      )}
    </>
  );
};

export default AppButton;
