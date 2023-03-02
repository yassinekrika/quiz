import './App.css';
import { useState , useEffect} from 'react';
import Question from './components/Question';
import { nanoid } from 'nanoid';

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

      let array = []
      for (let i = 0; i < result.results.length; i++) {
        let newObj = {
          ...result.results[i],
          id: nanoid()
        }
        array.push(newObj)
      }

      setData(array)

    } catch (err) {
      console.log(err)
    } finally {
      setIsLoading(false)
    }
    
    setStart(true)
  }
  
  const questions = data.map(btn => {
    return  <Question dataQst={btn} key={btn.id} />
  })

  return (
    <section>
      {
        start ?
        <div className='questions'>
          {questions}
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
