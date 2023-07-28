import React, { FC } from "react";

interface WormsProps {}

const Worms: FC<WormsProps> = ({}) => {
  return (
    <iframe
      id="Command and Conquer"
      src="https://emupedia.net/emupedia-game-worms2/armageddon/#"
      frameBorder="0"
      height={"100%"}
      allowTransparency={true}
      allow="autoplay; fullscreen; accelerometer; gyroscope; geolocation; microphone; camera; midi; encrypted-media; clipboard-read; clipboard-write"
      sandbox="allow-forms allow-downloads allow-modals allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-presentation allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
    />
  );
};

export default Worms;
