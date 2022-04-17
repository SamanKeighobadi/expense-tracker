import {useState,createContext} from 'react'

export const ExpenseTracker = createContext({})


const ExpenseTrackerProvider  = ({children}) =>{
    return(
        <ExpenseTracker.Provider>
            {children}
        </ExpenseTracker.Provider>
    )
}

export default ExpenseTrackerProvider;