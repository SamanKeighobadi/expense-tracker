import {useContext} from 'react'
import { ExpenseTracker } from '../context/ExpenseTrackerContext';


const Balance = () => {

    const {transactions} = useContext(ExpenseTracker)

    const amounts = transactions.map(tr => tr.amount);
    const total = amounts.reduce((acc,item) =>(acc +=item),0);

    return ( 
        <div>
            <h4>Balance</h4>
            <p>${total}</p>
        </div>
     );
}
 
export default Balance;