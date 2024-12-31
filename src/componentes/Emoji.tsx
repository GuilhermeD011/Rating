
type Props = {
    Nota: number;
}

export const Emoji = ({ Nota }: Props) => {

    if (Nota > 5) Nota = 5
    if (Nota < 0) Nota = 0

   const NotaInt = Math.floor(Nota)
    const value = "⭐️".repeat(NotaInt)
   
    return(
    <div className="flex items-center text-6xl">
        <div className="bg-gray-700 p-2 rounded">{Nota.toFixed(1)}</div>
        <div className="ml_3">{value}</div>
    </div>

    )
}

