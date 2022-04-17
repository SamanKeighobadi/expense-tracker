import { useState, createContext } from "react";

export const ExpenseTracker = createContext({
  transactions: [],
  addTransaction: () => {},
  deleteTransaction:()=>{}
});

const ExpenseTrackerProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([
    { id: 1, text: "coffee", amount: 20 },
    { id: 2, text: "coffee", amount: -20 },
  ]);

  const addTransaction = (text, amount) => {
    setTransactions([
      ...transactions,
      { id: Math.floor(Math.random() * 100), text, amount },
    ]);
  };

  const deleteTransaction = (id) =>{
      const allTransaction = [...transactions];
      const filteredTransaction = allTransaction.filter(tr => tr.id !==id);
      setTransactions(filteredTransaction) 
  }

  return (
    <ExpenseTracker.Provider value={{ transactions, addTransaction,deleteTransaction }}>
      {children}
    </ExpenseTracker.Provider>
  );
};

export default ExpenseTrackerProvider;
