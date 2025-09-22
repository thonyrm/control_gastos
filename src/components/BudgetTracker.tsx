import AmountDisplay from "./AmountDisplay";


export default function BudgetTracker() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="flex justify-center">
                <img src="/img/grafico.jpg" alt="Gráfica de gastos" />
            </div>
            <div className="flex flex-col justify-center items-center gap-8 ">
                <button className="bg-pink-800 w-full p-2 text-white uppercase font-bold rounded-lg">
                    Resetar App
                </button>
                <AmountDisplay
                    label= "Presupuesto"
                    amount={200}
                />
                <AmountDisplay
                    label= "Disponible"
                    amount={100}
                />
                <AmountDisplay
                    label= "Gastado"
                    amount={100}
                />
            </div>

            
        </div>
    )
}
