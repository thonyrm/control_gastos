import { useMemo } from "react"
import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions

} from 'react-swipeable-list'

import { categories } from "../data/db"
import { formatDate } from "../helpers"
import type { Expense } from "../Types"
import AmountDisplay from "./AmountDisplay"
import { useBudget } from "../Hooks/useBudget"
import 'react-swipeable-list/dist/styles.css'


type ExpenseDetailProps = {
    expense : Expense
}

export default function ExpenseDetail({expense}: ExpenseDetailProps) {

    const categoryInfo = useMemo(() =>  categories.filter(cat => cat.id === expense.category)[0], [expense])
    const {dispatch}= useBudget()

    const leadingActions = () => (
        <LeadingActions>
            <SwipeAction 
                onClick={() =>dispatch({type: 'get-expense-by-id', payload: { id: expense.id}})}
            >
                Actualizar
            </SwipeAction>
        </LeadingActions>
    )
    const trailingActions = () => (
        <TrailingActions>
            <SwipeAction 
                onClick={() => dispatch({type: 'remove-expense', payload: { id: expense.id}})}
                destructive={true}
            >
                Eliminar
            </SwipeAction>
        </TrailingActions>
    )
    return (
        <SwipeableList>
            <SwipeableListItem
                maxSwipe={30}
                leadingActions = {leadingActions()}
                trailingActions = {trailingActions()}
            >

                <div className="bg-white shadow-lg p-10  border-b border-gray-200 flex gap-5 items-center w-full">
                    <div>
                        <img src={`/img/icono_${categoryInfo.icon}.svg`} alt="icono gasto" className="w-20" />

                    </div>
                    <div className="flex-1 space-y-2" >
                        <p className="text-sm font-bold uppercase text-slate-500 ">{categoryInfo.name}</p>
                        <p>{expense.expenseName}</p>
                        <p className="text-slate-600">{formatDate( expense.date!.toString())}</p>

                    </div>
                    <AmountDisplay amount = {expense.amount}/>
                </div>
            </SwipeableListItem>
        </SwipeableList>
    )
}
