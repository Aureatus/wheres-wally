import { useEffect, useRef } from "react";
import wallyImage1 from "../Assets/wheres-wally-1.jpg";

const GameCanvas = ({ drawWallyImage }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const context = canvasRef.current.getContext("2d");

    const image1 = new Image();
    image1.src = wallyImage1;
    image1.onload = () => {
      drawWallyImage(context, image1);
    };
  }, [drawWallyImage]);
  return <canvas ref={canvasRef} height={1136} width={640}></canvas>;
};

export default GameCanvas;
