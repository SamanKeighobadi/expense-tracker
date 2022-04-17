// React Bootstrap components
import {Card} from 'react-bootstrap'
import {useContext} from 'react'
import { ExpenseTracker } from '../../context/ExpenseTrackerContext';

const Transaction = ({transaction}) => {

    const sign = transaction.amount<0 ? "-":"+";

    const {deleteTransaction} = useContext(ExpenseTracker)

    return ( 
        <div>
            <Card onClick={() => deleteTransaction(transaction.id)}  >
                {transaction.text} - ({sign}{Math.abs(transaction.amount)}) 
            </Card>
        </div>
     );
}
 
export default Transaction;