//CSS
import './App.css';

// REACT
import { useCallback, useEffect, useState } from 'react';

// DATA
import { wordsList } from './data/words';

// COMPONENTS
import StartScreeen from './components/StartScreeen';
import Game from './components/Game';
import GameOver from './components/GameOver';

const stages = [
  { id: 1, name: "start"},
  { id: 2, name: "game" },
  { id: 3, name: "end"},
];

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList)

  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState("");

  const [guessedLetters, setuuessedLetters] = useState([])
  const [wrongLetters, setwrongLetters] = useState([])
  const [guesses, setGuesses] = useState(3)
  const [score, setScore] = useState(0);

  const pickedWordAndCategory = () => {
    //escolher uma categoria aleatória
    const categories = Object.keys(words);
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)];

    //escolher uma palavra aleatória
    const word = words[category][Math.floor(Math.random() * words[category].length)];
    
    console.log('1 - Categoria: ' + category + ' - palavra: ' + word);

    return {word, category};
  }

  // iniciar jogo
  const startGame = () => {
    //pega uma palavra e uma categoria
    const { word, category } = pickedWordAndCategory();

    //cria uma array de letras
    let wordLetters = word.split("");

    wordLetters = wordLetters.map((l) => l.toLowerCase());

    console.log('2 - Categoria: ' + category + ' - palavra: ' + word)
    console.log('Letras: ' + wordLetters);

    //Preenche os estados (states)
    setPickedWord(word);
    setPickedCategory(category);
    setLetters(wordLetters);

    setGameStage(stages[1].name);
  }

  //process o jogo
  const verifyLetter = () => {
    setGameStage(stages[2].name);
  }

  const retry = () => {
    setGameStage(stages[0].name);
  }

  return (
    <>
      <div className='base'>
        {gameStage === 'start' && <StartScreeen startGame={startGame} />}
        {gameStage === 'game' && <Game 
                                      verifyLetter={verifyLetter} 
                                      pickedWord={pickedWord} 
                                      pickedCategory={pickedCategory} 
                                      letters={letters} 
                                      wrongLetters={wrongLetters}
                                      guessedLetters={guessedLetters}
                                      guesses={guesses}
                                      score={score}
                                      />}
        {gameStage === 'end' && <GameOver retry={retry} />}        
      </div>      
    </>
  )
}

export default App
