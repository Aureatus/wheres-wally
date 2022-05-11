import GameCanvas from "./Components/GameCanvas";
import wallyImage1 from "./Assets/wheres-wally-beach-scaled.jpg";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyARq8iPDaAvq2ZLrYYYyVsw146hbLbpFvg",
  authDomain: "wheres-wally-1fa55.firebaseapp.com",
  projectId: "wheres-wally-1fa55",
  storageBucket: "wheres-wally-1fa55.appspot.com",
  messagingSenderId: "907449387792",
  appId: "1:907449387792:web:01b104d7f66e4c38363395",
};

const app = initializeApp(firebaseConfig);

function App() {
  const drawWallyImage = (context, image1) => {
    context.drawImage(image1, 0, 0);
  };
  const wallyImage = new Image();
  wallyImage.src = wallyImage1;

  return (
    <div className="App">
      <header></header>
      <main>
        <GameCanvas drawWallyImage={drawWallyImage} wallyImage1={wallyImage} />
      </main>
    </div>
  );
}

export default App;
