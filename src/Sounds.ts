import applause from "./sounds/applause.mp3";
// import boo from "./sounds/boo.mp3";
// import gasp from "./sounds/gasp.mp3";
// import tada from "./sounds/tada.mp3";
// import victory from "./sounds/victory.mp3";
// import wrong from "./sounds/wrong.mp3";
import useSound from "use-sound";

export const sounds = [
  {
    name: "applause",
    play: useSound(applause)[0],
  },
];
