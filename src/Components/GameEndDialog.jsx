import { useEffect, useState, useRef } from "react";

import "../styles/GameEndDialog.css";

const GameEndDialog = ({
  score,
  checkScore,
  addScoreToFirestore,
  resetGameState,
}) => {
  const [dialogElement, setDialogElement] = useState(null);

  const nameInput = useRef(null);

  const dialogElementGenerator = async (checkScore) => {
    if (await checkScore()) {
      setDialogElement(
        <dialog open>
          <p className="scoreText">
            Your time is {Math.round(score * 10) / 10} seconds!
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const playerName = nameInput.current.value;
              addScoreToFirestore(playerName, Math.round((score * 10) / 10));
              resetGameState();
            }}
          >
            <label htmlFor="nameInput">
              Please enter your name if you wish to be entered into the
              leaderboard!
            </label>
            <input type="text" id="nameInput" ref={nameInput} required />
            <input type="submit" />
          </form>
        </dialog>
      );
    } else {
      setDialogElement(
        <dialog open>
          <p className="scoreText">
            Your time is {Math.round(score * 10) / 10} seconds!
          </p>
          <button
            onClick={(e) => {
              e.preventDefault();
              resetGameState();
            }}
          >
            Play again!
          </button>
        </dialog>
      );
    }
  };

  useEffect(() => {
    if (!dialogElement) {
      dialogElementGenerator(checkScore);
    }
  });

  return dialogElement;
};

export default GameEndDialog;
