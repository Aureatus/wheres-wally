const OdlawCard = ({
  checkIfCharacterAtMouseCoords,
  charactersFound,
  setCharactersFound,
  setTargetingBoxPresent,
  odlawProfile,
}) => {
  if (charactersFound.Odlaw) {
    return (
      <div
        className="char-select-card"
        id="odlaw"
        style={{
          cursor: "not-allowed",
          filter: "grayscale(100%) blur(0.5px)",
          opacity: "50%",
        }}
      >
        <img src={odlawProfile} alt="Odlaw" height={26} width={26} />
        <p>Odlaw</p>
      </div>
    );
  } else {
    return (
      <div
        className="char-select-card"
        id="odlaw"
        onClick={() => {
          if (checkIfCharacterAtMouseCoords("Odlaw")) {
            setCharactersFound({ ...charactersFound, Odlaw: true });
            setTargetingBoxPresent(false);
          }
        }}
      >
        <img src={odlawProfile} alt="Odlaw" height={26} width={26} />
        <p>Odlaw</p>
      </div>
    );
  }
};

export default OdlawCard;
