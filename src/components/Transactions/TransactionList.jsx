import {useContext} from 'react'
import { ExpenseTracker } from '../../context/ExpenseTrackerContext';
import Transaction from './Transaction';

const TransactionList = () => {

    const {transactions} = useContext(ExpenseTracker);

    return ( 
        <div className='px-2'>
            {transactions.map(trx  => (
                <Transaction transaction={trx} />
            ))}
        </div>
     );
}
 
export default TransactionList;