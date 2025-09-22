import { createContext, useReducer, type Dispatch, type ReactNode } from "react"
import { budgetReducer, initialState, type BudgetActions, type BudgetState } from "../Reducers/BudgetReducer"


type BudgetContextProps = {
    state: BudgetState
    dispatch : Dispatch<BudgetActions>
}

type BudgetProviderProps = {

    children : ReactNode
}
export const BudgetContext = createContext<BudgetContextProps>(null!)

export const BudgetProvider = ({children}:BudgetProviderProps ) => {

    const [state,dispatch] = useReducer(budgetReducer, initialState)

    return (
        <BudgetContext.Provider value = {{ state, dispatch}}>
            {children}
        </BudgetContext.Provider>
    )
}

