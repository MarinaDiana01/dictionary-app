import WordMeaning from "../WordMeaning/WordMeaning";
import "./WordDescription.css";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const WordDescription = (props) => {
  const handleSpeechClick = () => {
    const textToSpeech = new SpeechSynthesisUtterance(props.wordData[0].word);
    window.speechSynthesis.speak(textToSpeech);
  };

  return (
    <>
      <div className="word-meaning-header">
        <div>
          <h1 className="word-meaning-term">{props.wordData[0].word}</h1>
          <p className="word-meaning-phonetic">{props.wordData[0].phonetic}</p>
        </div>
        <button
          onClick={handleSpeechClick}
          className={`word-meaning-speech-button ${
            props.isSwitchOn === true ? "word-meaning-dark-speech-button" : ""
          }`}
        >
          <PlayArrowIcon className="word-meaning-speech-icon" />
        </button>
      </div>

      {props.wordData[0].meanings.map((meaning, index) => (
        <WordMeaning key={index} meaning={meaning} />
      ))}
      <div className="horizontal-line"></div>
      <div className="word-meaning-footer-container">
        <p>Source</p>
        <a
          href={`https://en.wiktionary.org/wiki/${props.wordData[0].word}`}
          className={`${props.isSwitchOn === true ? "white-text" : ""}`}
        >{`https://en.wiktionary.org/wiki/${props.wordData[0].word}`}</a>
        <OpenInNewIcon fontSize="small" className="word-meaning-footer-icon" />
      </div>
    </>
  );
};

export default WordDescription;
