import React, { FC } from "react";

interface CommandProps {}

const Command2: FC<CommandProps> = ({}) => {
  return (
    <iframe
      title="Command & Conquer 2"
      id="Command and Conquer 2"
      src="https://emupedia.net/emupedia-game-ra2/"
      frameBorder="0"
      height={"100%"}
      width={"100%"}
      allowTransparency={true}
    />
  );
};

export default Command2;
