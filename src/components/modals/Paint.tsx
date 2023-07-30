import React, { FC } from "react";

interface CommandProps {}

const Paint: FC<CommandProps> = ({}) => {
  return (
    <iframe
      title="Paint"
      id="MS Paint"
      src="https://jspaint.app"
      frameBorder="0px"
      height={"100%"}
      width={"100%"}
      allowTransparency={true}
    />
  );
};

export default Paint;
