import { useMemo, useState, type ChangeEvent , type FormEvent} from "react"
import { useBudget } from "../Hooks/useBudget"

export default function BudgetForm() {

    const [budget , setBudget]= useState(0)
    const {dispatch} = useBudget()


    const handleChange  = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.valueAsNumber)
        setBudget(e.target.valueAsNumber) 
    }
    const isValid = useMemo(() => {
        return isNaN(budget) || budget <= 0
    }, [budget])

    const handleSubmit = (e : FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        dispatch({type: 'add-budget' , payload:{budget}})

    }
    
    return (
        
        <form className="space-y-5" onSubmit={handleSubmit} >
            <div className="flex flex-col space-y-5 ">
                <label 
                    htmlFor="budget"
                    className="text-4xl text-sky-800 font-bold text-center"
                >
                    Definir Presupuesto
                </label>
                <input 
                    type="number"
                    value={budget}
                    className="w-full bg-white border border-slate-200 p-2 rounded-lg"
                    placeholder="Definir tu presupuesto"
                    id="budget"
                    name="budget"
                    onChange={handleChange}
                />
            </div>
            <input 
                type="submit"
                value= "Definir Presupuesto"
                className="bg-sky-800 w-full p-2 hover:bg-sky-700 text-white font-bold rounded-lg cursor-pointer uppercase disabled:opacity-50" 
                disabled={isValid}
                
                
            />
        </form>
    )
}
