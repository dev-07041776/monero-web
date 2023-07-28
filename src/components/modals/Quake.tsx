import React, { FC } from "react";

interface QuakeProps {}

const Quake: FC<QuakeProps> = ({}) => {
  return (
    <iframe
      id="Command and Conquer"
      src="https://emupedia.net/emupedia-game-quake1/wasm.html"
      frameBorder="0"
      height={"100%"}
      allowTransparency={true}
      allow="accelerometer; gyroscope; geolocation; microphone; camera; midi; encrypted-media; clipboard-read; clipboard-write"
      sandbox="allow-forms allow-downloads allow-modals allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-presentation allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
    />
  );
};

export default Quake;
