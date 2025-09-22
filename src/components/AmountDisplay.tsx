import { formatCurrency } from "../helpers"

type AmountDisplayProps = {
    label?: string,
    amount: number
}
export default function AmountDisplay({label , amount} : AmountDisplayProps) {

    return (
        <p className="text-2xl text-sky-900 font-bold">
            {label && `${label}: `}
            <span className="font-black">{formatCurrency(amount)}</span>
        </p>
    )
}
