const obtenerPublicaciones = async () => {
    const response = await fetch('/api/publicaciones')
    const data = await response.json()
    return data;
}

const mostrarPublicaciones = (publicaciones, elementoHtml) => {

    let secciones = "";

    // Método para recorrer los registros
    publicaciones.forEach(publicacion => {
            secciones += `
                <div class="box">
                    <section class="d-flex gap-2">
                    <img src="${publicacion.url_imagen}" class="rounded" height=200 >
                    <div class="d-flex flex-column justify-content-between">
                        <h3>${publicacion.titulo}</h3>
                        <h5>${publicacion.descripcion}</h5>
                        <h5>Estrenado el: ${(publicacion.fecha).split('T')[0]}</h5>
                    </div>
                    ${publicacion.url_video}
                    </section>
                </div>
            `
    })


    // Se crea la lista
    elementoHtml.innerHTML = secciones;

}



document.addEventListener('DOMContentLoaded', async () => {

    const publicaciones = await obtenerPublicaciones()
    console.log(publicaciones)


    // Modificar el DOM para mostrar las publicaciones
    const main = document.querySelector('#lista-publicaciones')

    mostrarPublicaciones(publicaciones, main)
})