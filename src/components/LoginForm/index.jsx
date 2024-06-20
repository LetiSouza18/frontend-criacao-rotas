'use client';
import axios from "axios";
import { useState } from "react";

function LoginForm () {
    const [ formulario, setFormulario ] = useState({
        email: '',
        senha: ''
    })

    const aoSubmeter = async (e) => {
        e.preventDefault()
        const result = await axios.post('http://localhost:8080/login', formulario)
        console.log(result)
        console.log("submeteu", formulario);
    }

    const aoAlterarValores = (e) => {
        const {name, value} = e.target 
        setFormulario({
            ...formulario,
            [name]: value
        })
    }

    return (
       <form onSubmit={aoSubmeter}>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" onChange={aoAlterarValores}/>
            </div>
            <div>
                <label htmlFor="senha">Senha</label>
                <input type="password" name="senha" onChange={aoAlterarValores}/>
            </div>
            <button type="submit">Enviar</button>
       </form> 
    )
}

export default LoginForm;