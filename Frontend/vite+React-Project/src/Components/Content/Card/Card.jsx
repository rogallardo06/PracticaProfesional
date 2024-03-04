function Card({imagen, nombre, apellido, profession, position, company, yearsOnDuty, email, tel, linkedin}) {


    return (
    <div className="card mx-auto mb-5 w-72 dark:bg-stone-700">
        <img src={imagen} className="card-img-top" alt="imagen de aspirante"/>
            <div className="card-body dark:bg-zinc-950 dark:text-white">
                <h5 className="card-title font-bold">{nombre} {apellido}</h5>
                <p className="text-neutral-400">{position} - {profession}</p>
                <p>{yearsOnDuty} years in {company}</p>
                {linkedin && (
                    <div className="flex justify-around mt-8">
                        <a href={"https://api.whatsapp.com/send?phone=" + "54".concat(tel.replace(/\+|\s/g, ""))}><i class="fa-brands fa-whatsapp"></i></a>
                        <a href={"mailto:" + email}><i class="fa-regular fa-envelope"></i></a>
                        <a href={linkedin}><i class="fa-brands fa-linkedin"></i></a>
                    </div>
                )}
            </div>
    </div>
    )
}

export default Card