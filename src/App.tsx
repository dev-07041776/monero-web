import React, { useEffect } from "react";
import styled from "styled-components";
import { Alert, Button, TaskBar } from "@react95/core";
import { useClippy } from "@react95/clippy";
import logo from "./windows95_logo.png";
import Layout from "./components/Layout";

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
              onClick={() => {
                toggleFakeGayShown(false);
                toggleBsod(false);
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
          message="Moon landing, fake and gay or real?"
          closeAlert={() => toggleFakeGayShown(false)}
          buttons={[
            {
              value: "FAKE & GAY",
              onClick: () => toggleFakeGayShown(false),
            },
            {
              value: "REAL",
              onClick: () => toggleBsod(true),
            },
          ]}
        />
      )}
      <Layout />
    </div>
  );
}

export default App;
