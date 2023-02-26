import './App.css';
import { useState , useEffect} from 'react';
import Question from './components/Question';

function App() {
  const [start, setStart] = useState(true)
  const [allQuestions, setAllQuestions] = useState([])

  function startGame() {
    setStart(true)
  }

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5")
    .then(res => res.json())
    .then(allQuestions => setAllQuestions(allQuestions))
  }, [])

  console.log(allQuestions)

  return (
    <section>
      {
        start ?
        <div className='questions'>
          <Question />
          <Question />
          <Question />
          <Question />
          <Question />
          <button className='check-btn'> Check answers</button>
        </div>
        :
        <div className='start'>
          <h1>Quizzical</h1>
          <p>Some description if needed</p>
          <button className='start-btn' onClick={startGame}>Start quiz</button>
      </div>
      }
    </section>
  );
}

export default App;
