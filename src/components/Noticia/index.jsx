'use client'
function Noticia ({noticia}) {
    return (
        <div>
            <div>{noticia.titulo}</div>
            <img src = {noticia.img} alt = "noticia"></img>
            <div dangerouslySetInnerHTML = {{__html: noticia.texto}}></div>
        </div>
    )   
}

export default Noticia;