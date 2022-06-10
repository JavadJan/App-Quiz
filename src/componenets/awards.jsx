import { useState } from 'react'
import '../assets/app.css'
import pyramid from '../assets/pyramid.json'
function Award({questionNumber}) {  

     console.log(questionNumber)
    return <div className="pyramid">
        <ul>

            {/* if was question 2, active award 2 if was question 3 active award 3, we can implement this feature by useState() Func*/}
            {pyramid.map((data) => {
                return <li className={data.id===questionNumber ? "moneyListItem active" : "moneyListItem"} key={data.id}> 

                    <span className='moneyListItemNumber'>{data.id}</span>
                    <span className='moneyListItemAmount'>$ {data.amount}</span>
                </li>
            }).reverse()}
            {/* after read file json we get as Array so I can use from reverse() */}
        </ul>
        {}
    </div>
}

export default Award