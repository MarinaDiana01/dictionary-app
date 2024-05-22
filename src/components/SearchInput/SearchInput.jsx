import SearchIcon from "@mui/icons-material/Search";
import "./SearchInput.css";
import { useState } from "react";

const SearchInput = (props) => {
  const [isEmpty, setIsEmpty] = useState(false);
  const [isDesplayed, setIsDesplayed] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const inputValue = formData.get("word");

    setIsEmpty(inputValue.trim() === "");

    if (inputValue.trim() === "") {
      setIsDesplayed(true);
      return;
    }
    setIsDesplayed(false);

    props.setInputValue(inputValue);
    props.setIsLoading(true);

    const serverResponse = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${inputValue}`
    );
    const parsedData = await serverResponse.json();

    props.setIsLoading(false);
    props.setWordData(parsedData);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className={`search-input-container ${
          isEmpty === true ? "search-input-border" : ""
        } ${
          props.isSwitchOn === true ? "search-input-transparent-background" : ""
        }`}
      >
        <input
          type="text"
          name="word"
          className={`search-input ${
            props.isSwitchOn === true ? "white-text" : ""
          }`}
          placeholder="Search for any word..."
          autoComplete="off"
        />
        <button className="search-input-button">
          <SearchIcon className="search-input-button-icon" />
        </button>
      </form>
      <p
        className={`search-input-error-message ${
          isDesplayed === true ? "display-error-message" : ""
        }`}
      >
        Whoops, can't be empty...
      </p>
    </>
  );
};

export default SearchInput;
