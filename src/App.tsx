import React from "react";
import "./style.css";
import Button from "./button/Button";

import applause from "./sounds/applause.mp3";
import boo from "./sounds/boo.mp3";
import gasp from "./sounds/gasp.mp3";
import tada from "./sounds/tada.mp3";
import victory from "./sounds/victory.mp3";
import wrong from "./sounds/wrong.mp3";
import useSound from "use-sound";

const App = () => {
  const sounds = {
    applause: useSound(applause),
    boo: useSound(boo),
    gasp: useSound(gasp),
    tada: useSound(tada),
    victory: useSound(victory),
    wrong: useSound(victory),
  };

  const stopAll = () => {
    for (const [, [, { stop }]] of Object.entries(sounds)) {
      stop();
    }
  };

  return (
    <>
      {Object.entries(sounds).map(([name, [play]]) => (
        <Button
          onClick={() => {
            stopAll();
            play();
          }}
          key={name}
          name={name}
        ></Button>
      ))}
    </>
  );
};

export default App;
