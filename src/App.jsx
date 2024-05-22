import { useState } from "react";
import "./App.css";
import SearchInput from "./components/SearchInput/SearchInput";
import WordDescription from "./components/WordDescription/WordDescription";
import Dropdown from "./components/Dropdown/Dropdown";
import ThemeSwitcher from "./components/ThemeSwitcher/ThemeSwitcher";
import { LinearProgress } from "@mui/material";

const App = () => {
  const [wordData, setWordData] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  document.body.style.backgroundColor = isSwitchOn ? "var(--black)" : "";
  document.body.style.color = isSwitchOn ? "white" : "";

  return (
    <div className="app-container">
      <div>
        <nav className="navbar-container">
          <img className="navbar-logo" src="./src/assets/logo.svg" alt="logo" />
          <div className="navbar-options">
            <Dropdown isSwitchOn={isSwitchOn} />
            <div className="navbar-separator"></div>
            <ThemeSwitcher
              isSwitchOn={isSwitchOn}
              setIsSwitchOn={setIsSwitchOn}
            />
            <img
              src="./src/assets/dark-mode-icon.svg"
              className="navbar-theme-switcher-icon"
            />
          </div>
        </nav>

        <SearchInput
          setWordData={setWordData}
          setIsLoading={setIsLoading}
          setInputValue={setInputValue}
          isSwitchOn={isSwitchOn}
        />
      </div>
      {wordData[0] === undefined &&
      (isLoading === false || inputValue.trim() === "") ? (
        <div>
          <p className="error-message-title">{wordData.title}</p>
          <p className="error-message-content">{wordData.message}</p>
        </div>
      ) : isLoading === true ? (
        <LinearProgress className="search-input-spinner" />
      ) : (
        <WordDescription wordData={wordData} isSwitchOn={isSwitchOn} />
      )}
    </div>
  );
};

export default App;
