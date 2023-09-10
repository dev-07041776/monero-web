import React, { FC } from "react";
import { BouncingImageSC } from "./Modals.styled";
import logo from "../../assets/png/logo.png";
import dialUp from "../../assets/mp3/dial-up.mp3";
import MintingModalContent from "./components/MintingModalContent";

declare global {
  interface Window {
    ethereum: any;
  }
}

export enum EConnectionType {
  Metamask = "Metamask",
  // WalletConnect = "WalletConnect",
  // TrustWallet = "TrustWallet",
}

const MintingModal: FC = () => {
  return (
    <>
      <div className="bouncing-overlay">
        <BouncingImageSC>
          <img src={logo} alt={"logo"} />
        </BouncingImageSC>
      </div>
      <MintingModalContent />
    </>
  );
};

export default MintingModal;
