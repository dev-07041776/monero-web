import { Frame } from "@react95/core";
import React, { FC } from "react";
import tickerGay from "../../assets/gif/ticker-gay.gif";
import funny1 from "../../assets/jpg/funny1.jpeg";
import funny2 from "../../assets/jpg/funny2.jpeg";
import funny3 from "../../assets/jpg/funny3.jpeg";
import funny4 from "../../assets/jpg/funny4.jpeg";
import funny5 from "../../assets/jpg/funny5.jpeg";
import funny6 from "../../assets/jpg/funny6.jpeg";
import funny7 from "../../assets/jpg/funny7.jpeg";
import funny8 from "../../assets/jpg/funny8.jpeg";
import funny9 from "../../assets/jpg/funny9.jpeg";
import funny10 from "../../assets/jpg/funny10.jpeg";
import funny11 from "../../assets/jpg/funny11.jpeg";
import funny12 from "../../assets/jpg/funny12.jpeg";
import funny13 from "../../assets/jpg/funny13.jpeg";
import funny14 from "../../assets/jpg/funny14.jpeg";
import funny15 from "../../assets/jpg/funny15.jpeg";
import funny16 from "../../assets/jpg/funny16.jpeg";
import funny17 from "../../assets/jpg/funny17.jpeg";
import funny18 from "../../assets/jpg/funny18.jpeg";
import funny19 from "../../assets/jpg/funny19.jpeg";
import funny20 from "../../assets/jpg/funny20.jpeg";
import funny21 from "../../assets/jpg/funny21.jpeg";
import funny22 from "../../assets/jpg/funny22.jpeg";
import funny23 from "../../assets/jpg/funny23.jpeg";
import funny24 from "../../assets/jpg/funny24.jpeg";
import { Tweet } from "react-tweet";

const pics = [
  { img: funny1 },
  { img: funny24 },
  { img: funny2 },
  { img: funny3 },
  { img: funny4 },
  { img: funny5 },
  { img: funny6 },
  { img: funny7 },
  { img: funny8 },
  { img: funny9 },
  { img: funny10 },
  { img: funny11 },
  { img: funny12 },
  { img: funny13 },
  { img: funny14 },
  { img: funny15 },
  { img: funny16 },
  { img: funny17 },
  { img: funny18 },
  { img: funny19 },
  { img: funny20 },
  { img: funny21 },
  { img: funny22 },
  { img: funny23 },
];

const FlatEarth: FC = () => {
  return (
    <Frame boxShadow="in" bg="white" className="milkers">
      <div>
        <div className="title">
          <img src={tickerGay} alt="img" />
        </div>
        <div className="light">
          <Tweet id="1686506479866503168" />
          {/* <video
            disablePictureInPicture
            preload="none"
            playsInline
            style={{ width: "100%" }}
            poster="https://pbs.twimg.com/ext_tw_video_thumb/1686506115369197568/pu/img/0B5e-cjSOJ2HZdXI.jpg"
            src="https://twitter.com/i/status/1686506479866503168"
          ></video> */}
        </div>
        <div className="pron-images">
          {pics.map((image, index) => {
            return <img key={index} src={image.img} alt="funny" />;
          })}
        </div>
      </div>
    </Frame>
  );
};

export default FlatEarth;
