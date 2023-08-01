import React, { FC } from "react";

interface LemmingsProps {}

const Lemmings: FC<LemmingsProps> = ({}) => {
  return (
    <iframe
      title="Lemmings"
      id="Lemmings"
      src="https://emupedia.net/emupedia-game-lemmings1/?version=1&difficulty=1&level=1&speed=1&cheat=false"
      frameBorder="0"
      height={"100%"}
      width={"100%"}
      allowTransparency={true}
    />
  );
};

export default Lemmings;
