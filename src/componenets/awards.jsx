import '../assets/app.css'
import pyramid from '../assets/pyramid.json'
function Award() {
    // console.log(pyramid.reverse())
    return <div className="pyramid">
        <ul>

            {pyramid.map((data) => {
                return <li className="moneyListItem" key={data.id}>
                    <span className='moneyListItemNumber'>{data.id}</span>
                    <span className='moneyListItemAmount'>$ {data.amount}</span>
                </li>
            }).reverse()}
        </ul>
    </div>
}

export default Award