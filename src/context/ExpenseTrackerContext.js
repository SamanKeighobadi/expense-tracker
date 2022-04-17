import {useState,createContext} from 'react'

export const ExpenseTracker = createContext({
    transactions:[]
})


const ExpenseTrackerProvider  = ({children}) =>{

    const [transactions, setTransactions] = useState([
        {id:1,text:'coffee',amount:20},
        {id:2,text:'coffee',amount:-20},
        
    ]);

    return(
        <ExpenseTracker.Provider value={{transactions}}>
            {children}
        </ExpenseTracker.Provider>
    )
}

export default ExpenseTrackerProvider;