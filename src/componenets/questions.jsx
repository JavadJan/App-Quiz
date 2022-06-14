import { useEffect, useState } from "react";
import question from '../assets/question.json'
import pyramid from '../assets/pyramid.json'
import useSound from "use-sound";
import correctAnswer from "../music/correct.mp3"
import wrongAnswer from "../music/wrong.mp3"


function Question(params) {


    //selectQuestion from json file [0]
    const [number, setNumber] = useState(1)

    const [correct] = useSound(correctAnswer)
    const [wrong] = useSound(wrongAnswer)

    // after select answer 
    const [selectAnswer, setSelectAnswer] = useState(null)
    const [class_Name, setClass_Name] = useState('answer')


    // select the question 
    const efectQuestion = () => {

        return params.setquestion(number)
    }


    //  check question, after selection is correct or not
    const delay = (duration, callback) => {
        setTimeout(() => {
            callback();
        }, duration);
    }

    // when we choose answer run this func
    const handleClick = (data) => {
        setSelectAnswer(data)
        setClass_Name('answer active')

        delay(3000, setClass_Name(data.correct ? "answer correct " : "answer wrong"))
        // we want to when we select an answer after 3s show us the answer 
        delay(6000, () => {
            
            if (data.correct) {
                setNumber(number + 1)
                setSelectAnswer(null)
                correct()
            }
            else {
                // params.setEarned(params.amount)
                params.setEarned(number - 1 === 0 ? 0 : pyramid[(number - 2)].amount)
                params.setStop(true)
                wrong()
            }
        })

    }

    return (
        <div className="questions">
            <div className="question">
                <h3>{question[number - 1]?.question}</h3>
            </div>
            <div className="answers">
                {question[number - 1].answer.map((data, i) => {
                    return <div className={selectAnswer === data ? class_Name : "answer"} key={i} onClick={() => handleClick(data)}   >  {data.case} </div>
                })}


            </div>
            {efectQuestion()}
        </div>
    )
}

export default Question;
