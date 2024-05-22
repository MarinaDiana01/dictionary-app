import "./WordMeaning.css";

const WordMeaning = (props) => {
  return (
    <>
      <div className="word-meaning-lexical-category">
        <h3>{props.meaning.partOfSpeech}</h3>
        <div className="horizontal-line"></div>
      </div>
      <p className="word-meaning-content-container"> Meaning </p>
      <ul className="word-meaning-content">
        {props.meaning.definitions.map((definition, index) => (
          <li key={index}>{definition.definition}</li>
        ))}
      </ul>
      <div className="word-meaning-synonyms-container">
        {props.meaning.synonyms.length > 0 ? (
          <>
            <p className="word-meaning-synonyms-title">Synonyms</p>
            {props.meaning.synonyms.map((synonym, index) => (
              <p key={index} className="word-meaning-synonyms">
                {synonym}
              </p>
            ))}
          </>
        ) : null}
      </div>
    </>
  );
};

export default WordMeaning;
