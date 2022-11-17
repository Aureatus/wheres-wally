import { createContext, useEffect, useRef, useState } from "react";
import {
  getDocs,
  collection,
  setDoc,
  doc,
  query,
  orderBy,
} from "firebase/firestore";
import GameCanvas from "./Components/GameCanvas";
import GameEndDialog from "./Components/GameEndDialog";
import wallyImage1 from "./Assets/wheres-wally-beach-scaled.jpg";
import db from "./firebase/firestore";

const characterCoordinateContext = createContext();

const characterCoordinates = {};

function App() {
  const [charactersFound, setCharactersFound] = useState({
    Wally: false,
    Odlaw: false,
    Wizard: false,
  });

  const [gameFinished, setGameFinished] = useState(false);
  const [score, setScore] = useState(null);
  const [playerScores, setPlayerScores] = useState(null);

  const startTime = useRef(Date.now());
  const finishTime = useRef(Date.now());

  const drawWallyImage = (context, image1) => {
    context.drawImage(image1, 0, 0);
  };
  const wallyImage = new Image();
  wallyImage.src = wallyImage1;

  const fetchCharacterCoords = async () => {
    const beachCharacterQuery = collection(db, "WallyBeachImage");
    const beachCharacterSnap = await getDocs(beachCharacterQuery);
    beachCharacterSnap.forEach((doc) => {
      switch (doc.id) {
        case "WallyLocation":
          characterCoordinates[doc.id] = doc.data();
          break;
        case "OdlawLocation":
          characterCoordinates[doc.id] = doc.data();
          break;
        case "WizardLocation":
          characterCoordinates[doc.id] = doc.data();
          break;
        default:
          break;
      }
    });
  };

  const fetchPlayerScores = async (playerScores) => {
    const scoresQuery = query(collection(db, "scores"), orderBy("time", "asc"));
    const scoresSnap = await getDocs(scoresQuery);
    const tempScores = {};
    scoresSnap.forEach((score) => {
      if (Object.keys(tempScores).length < 10) {
        tempScores[score.id] = score.data();
      }
    });
    return tempScores;
  };

  const checkScore = async () => {
    if (await playerScores) {
      if (score) {
        if (
          Object.values(await playerScores).some((e) => e.time > score) ||
          Object.values(await playerScores).length < 10
        ) {
          return true;
        }
      }
    }
  };

  const addScoreToFirestore = async (playerName, time) => {
    const scoresQuery = collection(db, "scores");
    await setDoc(doc(scoresQuery, playerName), { time });
  };

  const resetGameState = () => {
    setGameFinished(false);
    setScore(null);
    setPlayerScores(null);
    setCharactersFound({
      Wally: false,
      Odlaw: false,
      Wizard: false,
    });
    setPlayerScores(fetchPlayerScores());
    startTime.current = Date.now();
  };

  fetchCharacterCoords();

  useEffect(() => {
    setPlayerScores(fetchPlayerScores());
  }, []);

  useEffect(() => {
    if (Object.values(charactersFound).every((value) => value === true)) {
      finishTime.current = Date.now();
      setGameFinished(true);
    }
  }, [charactersFound]);

  useEffect(() => {
    if (gameFinished) {
      const score = (finishTime.current - startTime.current) / 1000;
      setScore(score);
    }
  }, [gameFinished, startTime, finishTime]);

  if (gameFinished) {
    if (score) {
      return (
        <div className="App">
          <main>
            <GameEndDialog
              score={score}
              checkScore={checkScore}
              addScoreToFirestore={addScoreToFirestore}
              setGameFinished={setGameFinished}
              resetGameState={resetGameState}
            />
            <characterCoordinateContext.Provider value={characterCoordinates}>
              <GameCanvas
                drawWallyImage={drawWallyImage}
                wallyImage1={wallyImage}
                charactersFound={charactersFound}
                setCharactersFound={setCharactersFound}
                gameFinished={gameFinished}
              />
            </characterCoordinateContext.Provider>
          </main>
        </div>
      );
    }
  } else {
    return (
      <div className="App">
        <main>
          <characterCoordinateContext.Provider value={characterCoordinates}>
            <GameCanvas
              drawWallyImage={drawWallyImage}
              wallyImage1={wallyImage}
              charactersFound={charactersFound}
              setCharactersFound={setCharactersFound}
            />
          </characterCoordinateContext.Provider>
        </main>
      </div>
    );
  }
}

export default App;
export { characterCoordinateContext };
