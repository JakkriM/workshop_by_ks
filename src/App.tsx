import { useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CountBtn from "./components/count-btn/CountBtn";
import Box from "./components/Box/Box";

type userInfoType = {
  fName: string;
  lName: string;
  age: number;
};

function App() {
  const [val, setVal] = useState(0);
  const [currentUser, setCurrentUser] = useState<userInfoType>(
    {} as userInfoType
  );
  useEffect(() => {
    // do something
    setCurrentUser({
      fName: "K",
      lName: "S",
      age: 20,
    });

    setCurrentUser((prev) => ({ ...prev, age: 28 }));
    console.log(currentUser);
  }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
          {/* <button onClick={}></button> */}
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <p>
        <Box isBox={true}>
          <CountBtn setVal={setVal}></CountBtn>
        </Box>

        <Box isBox={true}>
          <h1>Hello</h1>
        </Box>
      </p>
    </>
  );
}

export default App;
