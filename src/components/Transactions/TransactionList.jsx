// Custom components
import Transaction from "./Transaction";
// Context API
import { useContext } from "react";
import { ExpenseTracker } from "../../context/ExpenseTrackerContext";

const TransactionList = () => {
  const { transactions } = useContext(ExpenseTracker);

  return (
    <div className="px-2 " style={{overflowY:"auto",overflowX:"hidden",height:"140px"}}>
      {transactions.map((trx) => (
        <Transaction transaction={trx} />
      ))}
    </div>
  );
};

export default TransactionList;
