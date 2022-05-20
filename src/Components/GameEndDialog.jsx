import { useEffect, useState } from "react";

const GameEndDialog = ({ score, checkScore }) => {
  const [dialogElement, setDialogElement] = useState(null);

  const dialogElementGenerator = async (checkScore) => {
    if (await checkScore()) {
      setDialogElement(
        <dialog open>
          <div>Your time is {Math.round(score * 10) / 10} seconds!</div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <label htmlFor="nameInput">
              Please enter your name if you wish to be entered into the
              leaderboard!
            </label>
            <input type="text" id="nameInput" />
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
