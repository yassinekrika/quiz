import './App.css';
import { useState , useEffect} from 'react';
import Question from './components/Question';

function App() {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [err, setErr] = useState('')
  const [start, setStart] = useState(false)

  async function startGame() {
    
    setIsLoading(true)

    try {

      const res = await fetch("https://opentdb.com/api.php?amount=5")
      if (!res.ok) {
        throw new Error(`Error! staturs: ${res.status}`)
      }

      const result = await res.json()
      setData(result)
    } catch (err) {
      console.log(err)
    } finally {
      setIsLoading(false)
    }
    
    setStart(true)
  }

  return (
    <section>
      {
        start ?
        <div className='questions'>
          <Question dataQst={data.results[0]} />
          <Question dataQst={data.results[1]} />
          <Question dataQst={data.results[2]} />
          <Question dataQst={data.results[3]} />
          <Question dataQst={data.results[4]} />
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
