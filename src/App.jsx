import GameCanvas from "./Components/GameCanvas";
import wallyImage1 from "./Assets/wheres-wally-beach-scaled.jpg";

import { initializeApp } from "firebase/app";
import { createContext } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyARq8iPDaAvq2ZLrYYYyVsw146hbLbpFvg",
  authDomain: "wheres-wally-1fa55.firebaseapp.com",
  projectId: "wheres-wally-1fa55",
  storageBucket: "wheres-wally-1fa55.appspot.com",
  messagingSenderId: "907449387792",
  appId: "1:907449387792:web:01b104d7f66e4c38363395",
};

const app = initializeApp(firebaseConfig);
const appContext = createContext();

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
        <appContext.Provider value={app}>
          <GameCanvas
            drawWallyImage={drawWallyImage}
            wallyImage1={wallyImage}
            app={app}
          />
        </appContext.Provider>
      </main>
    </div>
  );
}

export default App;
export { appContext };
