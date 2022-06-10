import { useState } from "react";
import question from '../assets/question.json'
function Question(params) {
    
    console.log(params.setquestion)
    const[selectQuestion,setSelectQuestion]=useState(null)

    // after select answer 
    const[selectAnswer,setSelectAnswer]=useState(null)
    const[class_Name,setClass_Name]=useState('answer')

   const efectQuestion =()=>{
       return setSelectQuestion((params.setquestion)-1)
   }
    
   const handleClick = (data)=>{
        setSelectAnswer(data)
        setClass_Name('answer active')
   }
   console.log('select question : ',selectQuestion)
    return (
        <div className="questions">
            <div className="question">
                <h3>{question[(params.setquestion)-1]?.question}</h3>
            </div>
            <div className="answers">
                {question[(params.setquestion)-1].answer.map((data,i)=>
                {
                   return <div className={selectAnswer===data ? class_Name: "answer"} key={i} onClick={()=>handleClick(data)}   >  {data.case} </div>
                })}
                
                
            </div>
            
        </div>
    )
}

export default Question;
