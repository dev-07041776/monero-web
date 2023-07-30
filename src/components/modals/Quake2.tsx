import React, { FC } from "react";

interface QuakeProps {}

const Quake2: FC<QuakeProps> = ({}) => {
  return (
    <iframe
      title="Quake 2"
      id="Quake 2"
      src="https://emupedia.net/emupedia-game-quake2/wasm.html"
      frameBorder="0"
      height={"100%"}
      allowTransparency={true}
    />
  );
};

export default Quake2;
