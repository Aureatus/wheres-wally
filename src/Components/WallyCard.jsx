const WallyCard = ({
  checkIfCharacterAtMouseCoords,
  charactersFound,
  setCharactersFound,
  setTargetingBoxPresent,
  wallyProfile,
}) => {
  return (
    <div
      className="char-select-card"
      id="wally"
      onClick={() => {
        if (checkIfCharacterAtMouseCoords("Wally")) {
          setCharactersFound({ ...charactersFound, wally: true });
          setTargetingBoxPresent(false);
        }
      }}
    >
      <img src={wallyProfile} alt="Wally" height={26} width={26} />
      <p>Wally</p>
    </div>
  );
};

export default WallyCard;
