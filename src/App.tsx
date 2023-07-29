import React, { useEffect } from "react";
import { Alert, Button } from "@react95/core";
import { useClippy } from "@react95/clippy";
import Layout from "./components/Layout";
import gayFrogsSfx from "./assets/mp3/gay-frogs.mp3";
import yRUGaySfx from "./assets/mp3/why-are-you-gay.mp3";
const gayFrogsSound = new Audio(gayFrogsSfx);
const yRUGaySound = new Audio(yRUGaySfx);

function App() {
  const [fakeGayShown, toggleFakeGayShown] = React.useState(true);
  const [bsod, toggleBsod] = React.useState(false);
  const { clippy } = useClippy();

  useEffect(() => {
    if (clippy) {
      clippy.play("GetAttention");
    }
  }, [clippy]);

  const BSOD = () => {
    return (
      <div className="bsod">
        <div className="bsod__content">
          <div
            style={{
              background: "white",
              padding: "0.25rem",
              color: "navy",
              maxWidth: 150,
              fontWeight: 600,
              textAlign: "center",
              margin: "auto",
            }}
          >
            <h3 style={{ textAlign: "center", margin: 0 }}>WARNING</h3>
          </div>
          <p>An error has occured. To continue:</p>
          <p>
            Click "I AM GAY" below and press Enter to return to your desktop,
            or:
          </p>
          <p>
            Press CTRL+ALT+DEL to restart your computer. But be warned, doing so
            has a chance to initiate anal probe.
          </p>
          <p>Error: 69 : 420 : 5UP3RG4Y</p>
          <p style={{ textAlign: "center" }}>Click to continue:</p>
          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button
              onClick={async () => {
                toggleFakeGayShown(false);
                toggleBsod(false);
                await gayFrogsSound.play();
              }}
            >
              I AM GAY
            </Button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="app">
      {bsod && <BSOD />}
      {fakeGayShown && (
        <Alert
          title="Do you accept the truth?"
          style={{ zIndex: 5 }}
          message="Moon landing, fake and gay or real?"
          closeAlert={() => toggleFakeGayShown(false)}
          buttons={[
            {
              value: "FAKE & GAY",
              onClick: async () => {
                await gayFrogsSound.play();
                toggleFakeGayShown(false);
              },
            },
            {
              value: "REAL",
              onClick: async () => {
                await yRUGaySound.play();
                toggleBsod(true);
              },
            },
          ]}
        />
      )}
      <Layout />
    </div>
  );
}

export default App;
