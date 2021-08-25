import './App.css';

function App() {
  // logique
  const titre     = "Bonjour voici mon blog!!";
  const paragraph = "C'est un blog qui parle de technologie...";
  const lien = "https://www.facebook.com/Invictus.Consulting";

  // Template 
  return (
    <div className="App">
      <div className="contenu">
        <h2> { titre } </h2>
        <p> { paragraph } </p>
        <p>{lien} </p>
        <p>{Math.random() * 10}</p>
        <a href={lien}>Aller liker ma page facebook.</a>
      </div>
    </div>
  );
}

export default App;
