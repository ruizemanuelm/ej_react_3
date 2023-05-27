import { useState } from "react";
const Titulo = (props) => {
const [Msj, setMsj] = useState('')
    return (

        <>
            <h1>Hello {props.tituloNuevo}{Msj}!</h1>
            <button>click me c:</button>
        </>
    );
};

export default Titulo;