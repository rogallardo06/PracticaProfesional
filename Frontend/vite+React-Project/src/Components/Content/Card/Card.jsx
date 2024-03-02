function Card({imagen, nombre, apellido}) {

    return (
    <div class="card mx-auto mb-5 w-60 dark:bg-stone-700">
        <img src={imagen} class="card-img-top" alt="imagen de aspirante"/>
            <div class="card-body dark:bg-zinc-950 dark:text-white">
                <h5 class="card-title">{nombre} {apellido}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Conocer mas detalles</a>
            </div>
    </div>
    )
}

export default Card