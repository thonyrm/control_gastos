import { categories } from "../data/db"
import DatePicker from 'react-date-picker';
import 'react-calendar/dist/Calendar.css';
import 'react-date-picker/dist/DatePicker.css'
import type { DraftExpense, Value } from "../Types";
import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import ErrorMessage from "./ErrorMessage";
import { useBudget } from "../Hooks/useBudget";


export default function ExpenseForm() {

    const [expense, setExpense] = useState<DraftExpense>({
        amount: 0,
        expenseName : '',
        category: '',
        date: new Date()
    })
    const [error , setError] = useState('')
    const [previousAmaount, sertPreviousAmount] = useState(0)
    const {dispatch, state, remainingBudget} = useBudget()
    
    useEffect(() =>{
        if(state.editingId){
            const editingExpense = state.expenses.filter(currentExpense => currentExpense.id === state.editingId)[0]
            setExpense(editingExpense)
            sertPreviousAmount(editingExpense.amount)
        }
    },[state.editingId])

    const handleChangeDate = (value: Value) =>{
        setExpense({...expense, date: value})
    }

    const handleChange = (e : ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>)=>{
        const {name, value} = e.target 
        const isAmountField = ['amount'].includes(name)
        setExpense({
            ...expense,
            [name]: isAmountField ? +value : value
        })
    }

    const handleSubmit = (e : FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if(Object.values(expense).includes('')){
            setError('Todos los campos son obligatorios')
            return
        }
        // Validar que no me pase del presupuesto limite
        if((expense.amount - previousAmaount) > remainingBudget){
            setError('Este gasto excede el presupuesto restante')
            return
        }

        // Agregar o actualizar el gasto
        if(state.editingId){
            dispatch({type: 'update-expense', payload: {expense:{id: state.editingId, ...expense}}})
        }else {
            dispatch({type:'add-expense' , payload : {expense}})
        }
        // Reiniciarl el state
        setExpense({
            amount: 0,
            expenseName : '',
            category: '',
            date: new Date()
        })
    }



    return (
        <form className="space-y-5" onSubmit={handleSubmit}>
            <legend
                className="uppercase text-center text-2xl font-black border-b-4 border-sky-800 py-2"
            >
                { state.editingId ? 'Guardar Cambios' : 'Nuevo Gasto'}
            </legend>
            { error && <ErrorMessage>{error}</ErrorMessage>}

            <div className="flex flex-col gap-2">
                <label 
                    htmlFor="expenseName"
                    className="text-xl"
                >Nombre  Gasto: </label>
                <input 
                    type="text"
                    id="expenseName"
                    placeholder="Añade el nombre del gasto"
                    name="expenseName"
                    className="w-full bg-white border border-slate-200 p-2 rounded-lg "
                    value={expense.expenseName}
                    onChange={handleChange}
                />
            </div>
            <div className="flex flex-col gap-2">
                <label 
                    htmlFor="amount"
                    className="text-xl"
                >Cantidad: </label>
                <input 
                    type="number"
                    id="amount"
                    placeholder="Añade la cantidad del gasto: ej. 300"
                    name="amount"
                    className="w-full bg-white border border-slate-200 p-2 rounded-lg "
                    value={expense.amount}
                    onChange={handleChange}
                />
            </div>
            <div className="flex flex-col gap-2">
                <label 
                    htmlFor="category"
                    className="text-xl"
                >Categoría: </label>
                <select 
                    id="category"
                    name="category"
                    className="w-full bg-white border border-slate-200 p-2 rounded-lg "
                    value={expense.category}
                    onChange={handleChange}
                > 
                    <option value=""> -- Seleccione -- </option>
                    {categories.map(category =>(
                        <option
                            key={category.id}
                            value={category.id}
                        >
                            {category.name}
                        </option>
                    ))}
                </select>
            </div>
            <div className="flex flex-col gap-2">
                <label 
                    htmlFor="amount"
                    className="text-xl"
                >Fecha Gasto: </label>
                <DatePicker
                    className="w-full bg-white border border-slate-200 p-2 rounded-lg "
                    value={expense.date}
                     onChange={handleChangeDate}
                />
            </div>

            <input 
                type="submit" 
                className="bg-sky-800 w-full p-2 hover:bg-sky-900 text-white font-bold rounded-lg cursor-pointer uppercase "
                value={ state.editingId ? 'Guardar Cambios' : 'Registrar Gasto'}
            />
        </form>
    )
}
