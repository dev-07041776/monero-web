import React, { FC } from "react";

interface WormsProps {}

const Worms: FC<WormsProps> = ({}) => {
  return (
    <iframe
      title="Worms Armageddon"
      id="Command and Conquer"
      src="https://emupedia.net/emupedia-game-worms2/armageddon/#"
      frameBorder="0"
      height={"100%"}
      width={"100%"}
      allowTransparency={true}
    />
  );
};

export default Worms;
