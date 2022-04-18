// Context API
import {useContext} from 'react'
import { ExpenseTracker } from '../context/ExpenseTrackerContext';
// icons
import {ScaleIcon} from '@heroicons/react/outline'

const Balance = () => {

    const {transactions} = useContext(ExpenseTracker)

    const amounts = transactions.map(tr => tr.amount);
    const total = amounts.reduce((acc,item) =>(acc +=item),0);

    return ( 
        <div>
            <ScaleIcon style={{width:'3rem'}} className="text-dark pb-2 " />
            <h4 style={{fontSize:"0.8rem"}}>Balance</h4>
            <p className='pb-3 ' style={{fontSize:"1.3rem"}}>${total}</p>
        </div>
     );
}
 
export default Balance;