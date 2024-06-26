'use client';
import axios from "axios";
import { useState } from "react";

function CadastroNoticiaForm () {
    const [titulo, setTitulo] = useState("");
    const [img, setImg] = useState("");
    const [texto, setTexto] = useState("")
    const [categoria, setCategoria] = useState("")

    const aoSubmeter = async (e) => {
        e.preventDefault();
        try {
            const formulario = {
                titulo,
                img,
                texto,
                categoria,
            }
            const result = await axios.post('http://localhost:8080/login', formulario)
            alert(result.data.message)
            router.push('/admin/noticia/criar');
        } catch (error) {
            alert(error.response.data.message)
        }
        console.log("submeteu", titulo, img, texto);
    }

    aoAlterarValores = (e) => {
        const { name, value } = e.target;
        if (name === "titulo") {
            setTitulo(value);
        }
        else if (name === "img") {
            setImg(value);
        }
        else if (name === "texto"){
            setTexto(value);
        }
    }

    return (
        <form onSubmit={aoSubmeter}>
            <div>
                <label htmlFor="titulo">Titulo</label>
                <input type="text" name="titulo" onChange={aoAlterarValores}/>
            </div>
            <div>
                <label htmlFor="img">Imagem</label>
                <input type="text" name="img" onChange={aoAlterarValores}/>
            </div>
            <div>
                <label htmlFor="texto">Texto</label>
                <input type="text" name="texto" onChange={aoAlterarValores}/>
            </div>
            <button type="submit">Criar notícia</button>
        </form>
    )
}

export default CadastroNoticiaForm;