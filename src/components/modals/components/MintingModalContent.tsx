import React, { FC, useState, useEffect } from "react";
import {
  Fieldset,
  Checkbox,
  Range,
  Dropdown,
  Input,
  Button,
  Tabs,
  Tab,
} from "@react95/core";
import nftAbi from "../../../nftContractABI.json";
import { EConnectionType } from "../MintingModal";
import { MintingModalSC } from "../Modals.styled";
import mintAnimation from "../../../assets/png/nft/mint-holo_optim.gif";
import { ethers } from "ethers";
import seal from "../../../assets/gif/seal.gif";
import dialUp from "../../../assets/mp3/dial-up.mp3";
import { allowlist } from "../../../components/data/allowlist";

const dialUpSound = new Audio(dialUp);

const MintingModalContent: FC = () => {
  const [mintQty, setMintQty] = useState(1);
  const [connectionType, setConnectionType] = useState<EConnectionType>(
    EConnectionType.Metamask
  );
  const [connectedAddress, setConnectedAddress] = useState<string | null>(null);
  const [mintsElegible, setMintsElegible] = useState(0);
  const [provider, setProvider] =
    useState<ethers.providers.Web3Provider | null>(null);
  const [contract, setContract] = useState<ethers.Contract | null>(null);

  useEffect(() => {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      setProvider(provider);

      provider.listAccounts().then((accounts) => {
        if (accounts.length > 0) {
          setConnectedAddress(accounts[0]);
        }
      });

      const contract = new ethers.Contract(
        // TODO CHANGE CONTRACT ADDRESS
        "0x2a702af3c8a93ba7bee98cf83311f82cd4dac819",
        nftAbi,
        provider.getSigner()
      );
      setContract(contract);

      window.ethereum.on("accountsChanged", function (accounts: string[]) {
        setConnectedAddress(accounts[0]);
      });

      const eligibleMints = checkAllowlist();
      setMintsElegible(eligibleMints);
      window.ethereum.on("chainChanged", function (chainId: string) {
        window.location.reload();
      });
    } else {
      console.log("Please install MetaMask!");
    }
  }, []);

  const allowListMint = async (numTokens: number) => {
    if (!provider || !contract) return;
    dialUpSound.play();
    const signer = provider.getSigner();
    const accounts = await signer.getAddress();
    try {
      await contract.allowListMint(numTokens, { from: accounts });
    } catch (error: any) {
      if (error.code === 4001) {
        console.error("User is not on the allowlist");
      } else {
        console.error(error);
      }
    }
  };

  const publicMint = async (numTokens: number) => {
    if (!provider || !contract) {
      console.error("Provider or contract is not initialized");
      return;
    }

    try {
      dialUpSound.play();
      const signer = provider.getSigner();
      const accounts = await signer.getAddress();
      const valueInWei = ethers.utils.parseEther((0.01 * numTokens).toString());
      const gasEstimate = await contract.estimateGas.publicMint(numTokens, {
        value: valueInWei,
        from: accounts,
      });

      await contract.publicMint(numTokens, {
        value: valueInWei,
        gasLimit: gasEstimate,
        from: accounts,
      });
    } catch (error: any) {
      console.error("Error while minting tokens:", error.message);
    }
  };

  const handleDropdownChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setConnectionType(event.target.value as EConnectionType);
  };

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMintQty(Number(event.target.value));
  };

  const checkAllowlist = () => {
    const user = allowlist.find(
      (user) =>
        user.HolderAddress.toLowerCase() === connectedAddress?.toLowerCase()
    );
    if (!user) return 0;
    if (user.Balance > 100000) return 3;
    if (user.Balance > 50000) return 2;
    if (user.Balance > 10000) return 1;
    return 0;
  };

  useEffect(() => {
    setMintQty(checkAllowlist());
  }, [connectedAddress]);

  return (
    <MintingModalSC>
      <Tabs defaultActiveTab="Allowlist Mint">
        <Tab title="Allowlist Mint">
          <form>
            <div className="monitor">
              <img src={mintAnimation} alt="Minting animation" />
            </div>

            <p>
              Monero Martians Allowlist Mint eligibility criteria:
              <br />
              10k $MONERO = 1 free mint | 50k $MONERO = 2 free mints | 100k
              $MONERO = 3 free mints
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
                <label htmlFor="address">Connected Address:</label>
                {window.ethereum && connectedAddress ? (
                  <Input
                    placeholder="Connect wallet..."
                    id="address"
                    disabled
                    style={{ color: mintsElegible === 0 ? "red" : "green" }}
                    value={`${connectedAddress.slice(
                      0,
                      8
                    )}...${connectedAddress.slice(-8)}`}
                  />
                ) : (
                  <Button
                    onClick={async () => {
                      if (window.ethereum) {
                        try {
                          // Request account access
                          await window.ethereum.request({
                            method: "eth_requestAccounts",
                          });
                        } catch (error) {
                          console.error("User denied account access");
                        }
                      } else {
                        console.log(
                          "Non-Ethereum browser detected. Please install MetaMask!"
                        );
                      }
                    }}
                  >
                    Connect Wallet
                  </Button>
                )}
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
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    alignItems: "center",
                  }}
                >
                  <div style={{ maxWidth: 75 }}>
                    <label htmlFor="address">Eligibility:</label>
                    <Input
                      placeholder="Connect wallet..."
                      id="address"
                      disabled
                      style={{
                        color: mintsElegible === 0 ? "red" : "green",
                        width: "100%",
                      }}
                      value={`${mintsElegible} free mints`}
                    />
                  </div>

                  <Checkbox
                    checked={mintQty === mintsElegible}
                    onChange={(e) => {
                      if ((e.target as HTMLInputElement).checked) {
                        setMintQty(mintsElegible);
                      }
                    }}
                  >
                    Mint maximum
                  </Checkbox>
                </div>
              </Fieldset>
            </div>
          </form>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "1rem",
            }}
          >
            {/* TODO CHANGE OPENSEA LINK */}
            <p style={{ margin: 0 }}>
              View collection on{" "}
              <a href="https://opensea.io/collection/boredapeyachtclub">
                Opensea
              </a>
            </p>
            <Button
              disabled={
                mintQty > mintsElegible ||
                !window.ethereum ||
                mintsElegible === 0
              }
              style={{
                maxWidth: "150px",
                width: "100%",
                alignSelf: "flex-end",
              }}
              onClick={() => allowListMint(mintQty)}
            >
              Mint
            </Button>
          </div>
        </Tab>
        <Tab
          title="Public Mint"
          disabled={true}
          style={{
            color: "rgb(134, 138, 142)",
            backgroundColor: "rgb(195, 199, 203)",
          }}
        ></Tab>
        <Tab title="Details">
          <p
            style={{
              marginTop: 0,
              marginBottom: "1.6em",
              maxWidth: "500px",
            }}
          >
            Monero Martians is the greatest NFT collection the world has ever
            seen with extremely early BAYC vibes. Smart people will have and
            want these NFTs.
          </p>

          <div className="settings">
            <Fieldset legend="Tokenomics">
              <label htmlFor="totalSupply">Total Supply:</label>
              <Input placeholder="1,000" id="totalSupply" disabled />
              <label htmlFor="royalty">Royalty:</label>
              <Input placeholder="5%" id="royalty" disabled />
              <label htmlFor="royalty">Contract Address:</label>
              {/* TODO INSERT CONTRACT ADDY */}
              <Input placeholder="[INSERT CONTRACT]" id="ca" disabled />
            </Fieldset>
            <Fieldset legend="Other Details">
              <label htmlFor="authenticity">Authenticity:</label>
              <Input placeholder="NOT FAKE OR GAY" id="authenticity" disabled />
              <img src={seal} alt="authentic" className="authenticity" />
            </Fieldset>
          </div>
        </Tab>

        {/* <Tab title="History">

    </Tab> */}
      </Tabs>
    </MintingModalSC>
  );
};

export default MintingModalContent;
