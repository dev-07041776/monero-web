import React, { FC } from "react";

const UnrealTournament: FC = ({}) => {
  return (
    <iframe
      id="Command and Conquer"
      src="https://emupedia.net/emupedia-game-unreal-tournament/"
      frameBorder="0"
      height={"100%"}
      allowTransparency={true}
      allow="accelerometer; gyroscope; geolocation; microphone; camera; midi; encrypted-media; clipboard-read; clipboard-write"
      sandbox="allow-forms allow-downloads allow-modals allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-presentation allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
    />
  );
};

export default UnrealTournament;
