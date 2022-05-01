import { useEffect, useState } from "react";
import wallyImage1 from "../Assets/wheres-wally-1.jpg";

const GameCanvas = () => {
  const [imageHeight, setImageHeight] = useState(0);
  const [imageWidth, setImageWidth] = useState(0);

  useEffect(() => {
    const context = document.querySelector("#canvas").getContext("2d");
    const img = new Image();
    img.src = wallyImage1;
    img.onload = () => {
      setImageHeight(img.height);
      setImageWidth(img.width);
      context.drawImage(img, 0, 0);
    };
  });
  return <canvas id="canvas" height={imageHeight} width={imageWidth}></canvas>;
};

export default GameCanvas;
