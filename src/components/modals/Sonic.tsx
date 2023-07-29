import React, { FC } from "react";

const Sonic: FC = () => {
  return (
    <iframe
      id="Sonic"
      src="https://v6p9d9t4.ssl.hwcdn.net/html/3962593/index.html"
      frameBorder="0"
      height={"100%"}
      allowTransparency={true}
      allow="accelerometer; gyroscope; geolocation; microphone; camera; midi; encrypted-media; clipboard-read; clipboard-write"
      sandbox="allow-forms allow-downloads allow-modals allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-presentation allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
    />
  );
};

export default Sonic;
