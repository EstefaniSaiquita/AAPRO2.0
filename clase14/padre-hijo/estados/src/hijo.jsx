export const Hijo = ({color, setColor}) => {
    return (
        <div>
            <button onClick={() => setColor ("red")} >Rojo</button>
            <button onClick={() => setColor ("verde")} >Verde</button>

        </div>
    )
}