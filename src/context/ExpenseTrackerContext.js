import { useState, createContext } from "react";
import { toast } from "react-toastify";
import {v4 as uuidv4} from 'uuid'

export const ExpenseTracker = createContext({
  transactions: [],
  addTransaction: () => {},
  deleteTransaction: () => {},
});

const ExpenseTrackerProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([
    { id: 1, text: "salary", amount: 300 },
    { id: 2, text: "Book", amount: -60 },
  ]);

  /**
   *
   * @param {string} text title of transaction
   * @param {number} amount amount of transaction
   */
  const addTransaction = (text, amount) => {
    setTransactions([
      ...transactions,
      { id: uuidv4(), text, amount },
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
