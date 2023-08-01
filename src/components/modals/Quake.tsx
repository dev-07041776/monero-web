import React, { FC } from "react";

interface QuakeProps {}

const Quake: FC<QuakeProps> = ({}) => {
  return (
    <iframe
      title="Quake 1"
      id="Quake 1"
      src="https://emupedia.net/emupedia-game-quake1/wasm.html"
      frameBorder="0"
      height={"100%"}
      width={"100%"}
      allowTransparency={true}
    />
  );
};

export default Quake;
