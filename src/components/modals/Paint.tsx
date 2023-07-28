import React, { FC } from "react";

interface CommandProps {}

const Paint: FC<CommandProps> = ({}) => {
  return (
    <iframe
      id="Command and Conquer"
      src="https://jspaint.app"
      frameBorder="0px"
      height={"100%"}
      width={"100%"}
      allowTransparency={true}
      allow="autoplay; fullscreen; accelerometer; gyroscope; geolocation; microphone; camera; midi; encrypted-media; clipboard-read; clipboard-write"
      sandbox="allow-forms allow-downloads allow-modals allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-presentation allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
    />
  );
};

export default Paint;
