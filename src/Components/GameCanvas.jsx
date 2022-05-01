import { useEffect, useState } from "react";
import wallyImage1 from "../Assets/wheres-wally-1.jpg";

const GameCanvas = () => {
  useEffect(() => {
    const context = document.querySelector("#canvas").getContext("2d");

    const image1 = new Image();
    image1.src = wallyImage1;
    image1.onload = () => {
      context.drawImage(image1, 0, 0);
    };
  }, []);
  return <canvas id="canvas" height={1136} width={640}></canvas>;
};

export default GameCanvas;
