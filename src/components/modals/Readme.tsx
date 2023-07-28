import { Frame } from "@react95/core";
import React, { FC } from "react";

interface ReadmeProps {}

const Readme: FC<ReadmeProps> = ({}) => {
  return (
    <Frame boxShadow="in" bg="white" className="readme">
      <div>
        <h1 style={{ marginTop: 0 }}>🇳🇬🇿🇼🇬🇭 ATTENTION 🇬🇭🇿🇼🇳🇬</h1>
        <p>
          This website is a community contribution made with love by Monero
          Mandela, world acclaimed autist, retard, and philanthropist.
        </p>
        <p>
          If sers like this contribution, the Honorable Monero Mandela will
          accept tokens of appreciation in $MONERO or $BITCOIN only. No
          shitcoins.
        </p>
        <p>
          Pls sers feed ma familia. Mandela seeks your generous contributions
          for downpayment on new mudhut in outskirts of Nairobi, and maybe for
          some droogs.
        </p>
        <p>
          Donation Address:{" "}
          <a
            className="dontaion"
            href="https://etherscan.io/address/0x8da6a95a3fcda0ad05185876a40cce0568a3c155"
          >
            0x8da6a95a3fcda0ad05185876a40cce0568a3c155
          </a>
        </p>
        <p>
          Github repository:{" "}
          <a href="https://github.com/monero-mandela/monero-web">
            https://github.com/monero-mandela/monero-web
          </a>
        </p>
      </div>
    </Frame>
  );
};

export default Readme;
