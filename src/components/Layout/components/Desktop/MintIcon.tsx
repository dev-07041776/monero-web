import React, { FC, useState, useEffect } from "react";
import nft1 from "../../../../assets/png/nft/preview/preview1.png";
import nft2 from "../../../../assets/png/nft/preview/preview2.png";
import nft3 from "../../../../assets/png/nft/preview/preview3.png";
import nft4 from "../../../../assets/png/nft/preview/preview4.png";
import nft5 from "../../../../assets/png/nft/preview/preview5.png";
import nft6 from "../../../../assets/png/nft/preview/preview6.png";
import nft7 from "../../../../assets/png/nft/preview/preview7.png";
import nft9 from "../../../../assets/png/nft/preview/preview9.png";
import nft10 from "../../../../assets/png/nft/preview/preview10.png";
import nft11 from "../../../../assets/png/nft/preview/preview11.png";
import nft12 from "../../../../assets/png/nft/preview/preview12.png";

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

const MintIcon: FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <img
      src={images[currentImageIndex].img}
      alt={images[currentImageIndex].alt}
    />
  );
};

export default MintIcon;
