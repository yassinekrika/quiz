import { nanoid } from "nanoid"
import { useState } from "react"
export default function Question(props) {

    const questions = props.answers

    
    function shuffle(array) {
        const newArray = [...array]
        const length = newArray.length
      
        for (let start = 0; start < length; start++) {
            const randomPosition = Math.floor((newArray.length - start) * Math.random())
            const randomItem = newArray.splice(randomPosition, 1)
      
            newArray.push(
                {
                    ...randomItem,
                    id: nanoid(),
                    isChecked: false
                }
            )
        }
      
        return newArray
    }
    
    const shuffledQst = shuffle(questions)
    console.log(shuffledQst)
    
    function handleCheck(id) {
        // console.log(id)
    }
    
    const chooseBtn = shuffledQst.map(btn => {
        return  <button key={btn.id} className="chooseBtn" onClick={handleCheck(btn.id)}>{btn[0]}</button>
    })
    return (
        <div className="question">
            <h1>{props.question}</h1>
            {chooseBtn}
            <hr></hr>
        </div>
    )
}