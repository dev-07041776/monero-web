import {
  Fieldset,
  Frame,
  Checkbox,
  Range,
  Dropdown,
  Input,
  Button,
  Tabs,
  Tab,
} from "@react95/core";
import React, { FC, useState, useEffect } from "react";
import nft1 from "../../assets/png/nft/preview/preview1.png";
import nft2 from "../../assets/png/nft/preview/preview2.png";
import nft3 from "../../assets/png/nft/preview/preview3.png";
import nft4 from "../../assets/png/nft/preview/preview4.png";
import nft5 from "../../assets/png/nft/preview/preview5.png";
import nft6 from "../../assets/png/nft/preview/preview6.png";
import nft7 from "../../assets/png/nft/preview/preview7.png";
import nft9 from "../../assets/png/nft/preview/preview9.png";
import nft10 from "../../assets/png/nft/preview/preview10.png";
import nft11 from "../../assets/png/nft/preview/preview11.png";
import nft12 from "../../assets/png/nft/preview/preview12.png";
import { MintingModalSC } from "./Modals.styled";

const images = [
  { alt: "NFT", img: nft1 },
  { alt: "NFT", img: nft2 },
  { alt: "NFT", img: nft3 },
  { alt: "NFT", img: nft4 },
  { alt: "NFT", img: nft5 },
  { alt: "NFT", img: nft6 },
  { alt: "NFT", img: nft7 },
  { alt: "NFT", img: nft9 },
  { alt: "NFT", img: nft10 },
  { alt: "NFT", img: nft11 },
  { alt: "NFT", img: nft12 },
];

enum EConnectionType {
  Metamask = "Metamask",
  WalletConnect = "WalletConnect",
  TrustWallet = "TrustWallet",
}

const MintingModal: FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [mintQty, setMintQty] = useState(1);
  const [connectionType, setConnectionType] = useState<EConnectionType>(
    EConnectionType.Metamask
  );
  const [connectedAddress, setConnectedAddress] = useState<string | null>(null);
  const mintsRemaining = 3;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const handleDropdownChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setConnectionType(event.target.value as EConnectionType);
  };

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMintQty(Number(event.target.value));
  };

  return (
    <MintingModalSC>
      <Tabs defaultActiveTab="General">
        <Tab title="General">
          <form>
            <img
              src={images[currentImageIndex].img}
              alt={images[currentImageIndex].alt}
            />
            <p>
              Monero Martians freemint eligibility criteria:
              <br />
              25k $MONERO = 1 free mint | 40k $MONERO = 2 free mint | 75k
              $MONERO = 3 free mint
            </p>
            <div className="settings">
              <Fieldset legend="Connection Settings">
                <label htmlFor="dropdown">Type:</label>
                <Dropdown
                  id="dropdown"
                  options={Object.values(EConnectionType)}
                  defaultValue={EConnectionType.Metamask}
                  onChange={handleDropdownChange}
                />
                <label htmlFor="address">Address:</label>
                <Input placeholder="Connect wallet..." id="address" disabled />
              </Fieldset>
              <Fieldset legend="Quantity">
                <div
                  style={{
                    display: "flex",
                    gap: "0.5rem",
                    justifyContent: "space-between",
                  }}
                >
                  <p>1</p>

                  <Range
                    type="range"
                    min="1"
                    max="3"
                    style={{ background: "none" }}
                    value={mintQty.toString()}
                    onChange={handleSliderChange}
                    id="qtyRange"
                  />

                  <p>3</p>
                </div>

                <Checkbox
                  checked={mintQty === mintsRemaining}
                  onChange={(e) => {
                    if ((e.target as HTMLInputElement).checked) {
                      setMintQty(mintsRemaining);
                    }
                  }}
                >
                  Mint maximum
                </Checkbox>
                <p style={{ textAlign: "center" }}>
                  {mintsRemaining} free mints left
                </p>
              </Fieldset>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <p style={{ margin: 0 }}>
                View collection on <a>Opensea</a>
              </p>
              <Button
                disabled={mintQty > mintsRemaining || !connectedAddress}
                type="submit"
                style={{
                  maxWidth: "150px",
                  width: "100%",
                  alignSelf: "flex-end",
                }}
              >
                Mint
              </Button>
            </div>
          </form>
        </Tab>
        <Tab title="Details">
          <p
            style={{
              marginTop: 0,
              marginBottom: "1.6em",
              maxWidth: "500px",
            }}
          >
            If you have problems with this program and it worked correctly on an
            earlier version of Windows, select the compatibility mode that
            matches that earlier version.
          </p>

          <div className="settings">
            <Fieldset legend="Collection Details">
              <label htmlFor="dropdown">Type:</label>
              <Dropdown id="dropdown" options={["Metamask", "WalletConnect"]} />
              <label htmlFor="address">Address:</label>
              <Input placeholder="Connect wallet..." id="address" disabled />
            </Fieldset>
            <Fieldset legend="Contract"></Fieldset>
          </div>
        </Tab>
        {/* <Tab title="History">
  
        </Tab> */}
      </Tabs>
    </MintingModalSC>
  );
};

export default MintingModal;
