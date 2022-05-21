import { useEffect, useState, useRef } from "react";

const GameEndDialog = ({ score, checkScore, addScoreToFirestore }) => {
  const [dialogElement, setDialogElement] = useState(null);

  const nameInput = useRef(null);

  const dialogElementGenerator = async (checkScore) => {
    if (await checkScore()) {
      setDialogElement(
        <dialog open>
          <div>Your time is {Math.round(score * 10) / 10} seconds!</div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const playerName = nameInput.current.value;
              addScoreToFirestore(playerName, Math.round((score * 10) / 10));
            }}
          >
            <label htmlFor="nameInput">
              Please enter your name if you wish to be entered into the
              leaderboard!
            </label>
            <input type="text" id="nameInput" ref={nameInput} />
            <input type="submit" />
          </form>
        </dialog>
      );
    } else {
      setDialogElement(
        <dialog open>
          <div>Your time is {Math.round(score * 10) / 10} seconds!</div>
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
