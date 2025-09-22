import { useContext } from "react";
import { BudgetContext } from "../Context/BudgetContext";

export const useBudget = () => {
    const context = useContext(BudgetContext)
    if(!context) throw new Error('useBudger must be used within a BudgetProvider')
    return context
}