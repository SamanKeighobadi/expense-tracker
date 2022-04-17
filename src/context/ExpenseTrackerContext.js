import { useState, createContext } from "react";

export const ExpenseTracker = createContext({
  transactions: [],
  addTransaction: () => {},
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

  return (
    <ExpenseTracker.Provider value={{ transactions, addTransaction }}>
      {children}
    </ExpenseTracker.Provider>
  );
};

export default ExpenseTrackerProvider;
