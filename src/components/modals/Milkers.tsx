import { Frame } from "@react95/core";
import React, { FC } from "react";
import milkersGif from "../../assets/gif/milkers.gif";
import milkersTitle from "../../assets/png/games/noflatmilkers-text.png";
import milkers1 from "../../assets/jpg/noflatmilkers.jpeg";
import milkers2 from "../../assets/jpg/noflatmilkers2.jpeg";
import buzz from "../../assets/jpg/buzz.jpeg";
import isthisreal from "../../assets/jpg/isthisreal.jpeg";
import landingnotreal from "../../assets/jpg/landingnotreal.jpeg";

const images = [
  { alt: "", img: milkersGif },
  { alt: "", img: milkers1 },
  { alt: "", img: milkers2 },
  { alt: "", img: buzz },
  { alt: "", img: isthisreal },
  { alt: "", img: landingnotreal },
];

const Milkers: FC = () => {
  return (
    <Frame boxShadow="in" bg="white" className="milkers">
      <div>
        <div className="title">
          <img src={milkersTitle} alt="img" />
        </div>
        <div className="pron-images">
          {images.map((image, index) => (
            <img key={index} src={image.img} alt={image.alt} />
          ))}
        </div>
      </div>
    </Frame>
  );
};

export default Milkers;
