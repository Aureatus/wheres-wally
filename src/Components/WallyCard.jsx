const WallyCard = ({
  checkIfCharacterAtMouseCoords,
  charactersFound,
  setCharactersFound,
  setTargetingBoxPresent,
  wallyProfile,
}) => {
  if (charactersFound.Wally) {
    return (
      <div
        className="char-select-card"
        id="wally"
        style={{
          cursor: "not-allowed",
          filter: "grayscale(100%) blur(0.5px)",
          opacity: "50%",
        }}
      >
        <img src={wallyProfile} alt="Wally" height={26} width={26} />
        <p>Wally</p>
      </div>
    );
  } else {
    return (
      <div
        className="char-select-card"
        id="wally"
        onClick={() => {
          if (checkIfCharacterAtMouseCoords("Wally")) {
            setCharactersFound({ ...charactersFound, Wally: true });
            setTargetingBoxPresent(false);
          }
        }}
      >
        <img src={wallyProfile} alt="Wally" height={26} width={26} />
        <p>Wally</p>
      </div>
    );
  }
};

export default WallyCard;
