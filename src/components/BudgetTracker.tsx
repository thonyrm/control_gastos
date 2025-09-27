import {CircularProgressbar, buildStyles} from 'react-circular-progressbar'
import { useBudget } from "../Hooks/useBudget";
import AmountDisplay from "./AmountDisplay";
import 'react-circular-progressbar/dist/styles.css';



export default function BudgetTracker() {

    const {state, totalExpenses, remainingBudget, dispatch} = useBudget()

    const percentage  = +((totalExpenses / state.budget)*100).toFixed(2)
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="flex justify-center">
                <CircularProgressbar
                    value={percentage} 
                    styles={buildStyles({
                        pathColor: percentage === 100 ? '#EF085F' : '#0284C7',
                        trailColor: '#F5F5F5',
                        textSize:8 ,
                        textColor: percentage === 100 ? '#EF085F' : '#0284C7'
                    })}
                    text={`${percentage}% Gastado`}
                />
            </div>
            <div className="flex flex-col justify-center items-center gap-8 ">
                <button className="bg-pink-800 w-full p-2 text-white uppercase font-bold rounded-lg cursor-pointer"
                    onClick={()=> dispatch({type: 'reset-app'})}
                >
                    Resetar App
                </button>
                <AmountDisplay
                    label= "Presupuesto"
                    amount={state.budget}
                />
                <AmountDisplay
                    label= "Disponible"
                    amount={remainingBudget}
                />
                <AmountDisplay
                    label= "Gastado"
                    amount={totalExpenses}
                />
            </div>

            
        </div>
    )
}
