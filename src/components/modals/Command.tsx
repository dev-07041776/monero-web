import React, { FC } from "react";

interface CommandProps {}

const Command: FC<CommandProps> = ({}) => {
  return (
    <iframe
      title="Command & Conquer"
      id="Command and Conquer"
      src="https://emupedia.net/emupedia-game-command-and-conquer1/"
      frameBorder="0"
      height={"100%"}
      allowTransparency={true}
    />
  );
};

export default Command;
