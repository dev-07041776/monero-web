import { Frame } from "@react95/core";
import React, { FC } from "react";
import imgMonero from "../../assets/jpg/monero.jpg";
import imgBelieve from "../../assets/gif/believe.gif";

interface AboutMoneroProps {}

const AboutMonero: FC<AboutMoneroProps> = ({}) => {
  return (
    <Frame boxShadow="in" bg="white" className="about">
      <div>
        <h1 style={{ marginTop: 0 }}>
          The FlatEarthFakeMoonLandingMKUltra1984 (Ticker: $MONERO) Project
        </h1>
        <div className="images">
          <img src={imgMonero} alt="img" />
          <img src={imgBelieve} alt="img" />
        </div>

        <p>
          In the realm of flat Earth truths, a web of deception has woven itself
          into history. The year 2023 brought forth revelations about the moon
          landing hoax, the CIA's covert MK Ultra program, and the eerie
          parallels between George Orwell's "1984" and our present reality.
          <br />
          <br />
          The prevailing theory among flat Earth knowers is that time itself is
          an illusion, a construct created to control and manipulate humanity's
          perception of reality. The moon landing was nothing more than an
          elaborate ruse, orchestrated by the powers that be to perpetuate the
          spherical Earth myth and further their control over the masses.
          <br />
          <br />
          A haunting chapter in the annals of conspiracy theories lies in the
          dark history of the CIA's MK Ultra program. Allegedly, this
          clandestine operation delved into mind control experiments,
          manipulating unwitting subjects and probing the depths of human
          consciousness. The purpose, it is claimed, was to create programmable
          individuals for covert operations and manipulation.
          <br />
          <br />
          Drawing eerie parallels with George Orwell's dystopian masterpiece
          "1984," truth-seekers highlight the increasing surveillance and
          erosion of privacy in modern society. The ominous Big Brother figure
          looms large, as governments and tech giants monitor citizens' every
          move, blurring the line between reality and fiction.
          <br />
          <br />
          In the midst of the enigma "$MONERO" emerges, embodying the essence of
          the Quest and its profound discoveries. To those who embrace this flat
          Earth truth, it represents a profound store of value that defies
          conventional understanding.
          <br />
          <br />
          As the veils of deception begin to lift, the enigmatic Quest beckons
          those willing to explore the mysteries of our world, unveiling truths
          that challenge our very perception of reality. Whether one chooses to
          accept or reject these beliefs, the narrative of the flat Earth, moon
          landing hoax, MK Ultra, and echoes of "1984" continue to captivate the
          imaginations of those who seek the truth behind the illusions.
        </p>
      </div>
    </Frame>
  );
};

export default AboutMonero;
