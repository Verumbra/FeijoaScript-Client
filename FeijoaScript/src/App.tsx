import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/tauri";

//import for css files
import "./App.css";

//imports for app components
import SideNav from "./components/SideNav.tsx";
import HomeView from "./components/HomeView/HomeView.tsx";
import LibraryView from "./components/LibraryView/LibraryView.tsx";
import ReaderView from "./components/ReaderView/ReaderView.tsx";
import JournalView from "./components/JournalView/JournalView.tsx";
import DiscoveryView from "./components/DiscoveryView/DiscoveryView.tsx";
import SubstitutionView from "./components/SubstitutionView/SubstitutionView.tsx";
import GroceryView from "./components/GroceryView/GroceryView.tsx";

//imports for redux
import {useSelector, useDispatch} from "react-redux";
import {RootState} from "./store/store.ts";





function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke("greet", { name }));
  }

  const currentPage = useSelector((state: RootState) => state.view.page);

  const viewProcessor = () => {
      switch (currentPage) {
          case "HOME":
              return <HomeView/>;
          case "READER":
              return <ReaderView/>;
          case "JOURNAL":
              return <JournalView/>;
          case "DISCOVERY":
              return <DiscoveryView/>;
          case "LIBRARY":
              return <LibraryView/>;
          case "GROCERY":
              return <GroceryView/>;
          case "SUBSTITUTION":
              return <SubstitutionView/>;
      }
  }

  return (
    <div className="container">
        <SideNav/>
        {viewProcessor()}
        <div className="greet">
          {currentPage}
          <h1>Welcome to Tauri!</h1>

          <div className="row">
            <a href="https://vitejs.dev" target="_blank">
              <img src="/vite.svg" className="logo vite" alt="Vite logo" />
            </a>
            <a href="https://tauri.app" target="_blank">
              <img src="/tauri.svg" className="logo tauri" alt="Tauri logo" />
            </a>
            <a href="https://reactjs.org" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
         </div>

          <p>Click on the Tauri, Vite, and React logos to learn more.</p>

          <form
            className="row"
            onSubmit={(e) => {
              e.preventDefault();
              greet();
            }}
          >
            <input
              id="greet-input"
              onChange={(e) => setName(e.currentTarget.value)}
              placeholder="Enter a name..."
            />
            <button type="submit">Greet</button>
          </form>

          <p>{greetMsg}</p>
        </div>
    </div>
  );
}

export default App;
