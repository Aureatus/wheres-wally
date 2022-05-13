const OdlawCard = ({
  checkIfCharacterAtMouseCoords,
  charactersFound,
  setCharactersFound,
  setTargetingBoxPresent,
  odlawProfile,
}) => {
  return (
    <div
      className="char-select-card"
      id="odlaw"
      onClick={() => {
        if (checkIfCharacterAtMouseCoords("Odlaw")) {
          setCharactersFound({ ...charactersFound, odlaw: true });
          setTargetingBoxPresent(false);
        }
      }}
    >
      <img src={odlawProfile} alt="Odlaw" height={26} width={26} />
      <p>Odlaw</p>
    </div>
  );
};

export default OdlawCard;
