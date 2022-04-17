import { useState, createContext } from "react";
import { toast } from "react-toastify";

export const ExpenseTracker = createContext({
  transactions: [],
  addTransaction: () => {},
  deleteTransaction: () => {},
});

const ExpenseTrackerProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([
    { id: 1, text: "coffee", amount: 120 },
    { id: 2, text: "coffee", amount: -20 },
  ]);

  /**
   *
   * @param {string} text title of transaction
   * @param {number} amount amount of transaction
   */
  const addTransaction = (text, amount) => {
    setTransactions([
      ...transactions,
      { id: Math.floor(Math.random() * 100), text, amount },
    ]);
    toast.success("Transaction successfully added", {
      position: "top-right",
      theme: "colored",
      pauseOnHover: false,
    });
  };

  /**
   *
   * @param {string} id  id of transaction which we want to delete
   */
  const deleteTransaction = (id) => {
    const allTransaction = [...transactions];
    const filteredTransaction = allTransaction.filter((tr) => tr.id !== id);
    setTransactions(filteredTransaction);
    toast.success("Transaction successfully deleted", {
      position: "bottom-right",
      theme: "colored",
      pauseOnHover: false,
    });
  };

  return (
    <ExpenseTracker.Provider
      value={{ transactions, addTransaction, deleteTransaction }}
    >
      {children}
    </ExpenseTracker.Provider>
  );
};

export default ExpenseTrackerProvider;
