import { useState, useEffect } from "react";


function ApplyPage() {

    //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 GitHub API key


    const [professions, setProfessions] = useState();
    const [form, setForm] = useState({})


    const handleSubmit = async (e) => {

        e.preventDefault();

        fetch('http://localhost:3000/api/aspirants/create/aspirant', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error al enviar los datos al servidor');
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.log('Error:', error);
            });

    }

    let handleChange = (e) => {
        let formulario = {}
        if (e.target.type === 'file') {
            formulario = {
                ...form,
                [e.target.name]: e.target.files[0]
            };
        } else {
            formulario = {
                ...form,
                [e.target.name]:  e.target.value
            };
        }
        setForm(formulario)
    }

    let handleReset = () => {
        setForm({})
    }

    useEffect(() => {

        async function getProfessions() {
            let response = await fetch("http://localhost:3000/api/professions");
            let data = await response.json();
            setProfessions(data.data)
        };

        getProfessions()
    }, [])

    return (
        <>
            {console.log(form)}
            <form className="md:mx-40 lg:mx-96" action="/aspirants" method="POST" encType="multipart/form-data" onSubmit={handleSubmit} onChange={handleChange}>

                <div className="flex flex-col bg-stone-50 dark:bg-stone-900 mx-2 rounded-2xl py-2">

                    <label className="mt-4 mx-4 px-2">First name</label>
                    <input className="mx-4 pl-2 bg-neutral-200 dark:bg-stone-950 rounded-md" type="text" name="name" />


                    <label className="mt-4 mx-4 px-2">Last name</label>
                    <input className="mx-4 pl-2 bg-neutral-200 dark:bg-stone-950 rounded-md px-2" type="text" name="surname" />


                    <label className="mt-4 mx-4 px-2">DNI</label>
                    <input className="mx-4 pl-2 bg-neutral-200 dark:bg-stone-950 rounded-md px-2" type="number" name="dni" />


                    <label className="mt-4 mx-4 px-2">email</label>
                    <input className="mx-4 pl-2 bg-neutral-200 dark:bg-stone-950 rounded-md px-2" type="email" name="email" />


                    <label className="mt-4 mx-4 px-2">Phone number</label>
                    <input className="mx-4 pl-2 bg-neutral-200 dark:bg-stone-950 rounded-md px-2" type="number" name="tel" />


                    <label className="mt-4 mx-4 px-2">Birthday</label>
                    <input className="mx-4 pl-2 bg-neutral-200 dark:bg-stone-950 rounded-md px-2" type="date" name="birthDate" />


                    <label className="mt-4 mx-4 px-2">linkedin profile</label>
                    <input className="mx-4 pl-2 bg-neutral-200 dark:bg-stone-950 rounded-md px-2" type="text" name="linkedin" />

                    <label className="mt-4 mx-4 px-2">Sex</label>
                    <select className="mx-4 pl-2 bg-neutral-200 dark:bg-stone-950 rounded-md px-2" name="gender"> profession
                        <option value="male" selected>Male</option>
                        <option value="female">Female</option>
                    </select>

                    <div className="my-4 mx-4 flex flex-col relative items-center justify-center h-8 w-3/4 self-center border border-neutral-700 dark:border-neutral-900 rounded-xl">

                        <input className="opacity-0 absolute w-full" type="file" name="image" />
                        <p className="">upload image <i class="fa-regular fa-image"></i></p>

                    </div>

                </div>

                <div className="flex flex-col bg-stone-50 dark:bg-stone-900 mx-2 rounded-lg py-2 mt-4">

                    <label className="mt-4 mx-4 px-2">GitHub profile</label>
                    <input className="mx-4 bg-neutral-200 dark:bg-stone-950 rounded-md px-2" type="text" name="link" />

                    <label className="mt-4 mx-4 px-2">Company</label>
                    <input className="mx-4 bg-neutral-200 dark:bg-stone-950 rounded-md px-2" type="text" name="company" />

                    <label className="mt-4 mx-4 px-2">Position</label>
                    <input className="mx-4 bg-neutral-200 dark:bg-stone-950 rounded-md px-2" type="text" name="position" />

                    <label className="mt-4 mx-4 px-2">Years on duty</label>
                    <input className="mx-4 bg-neutral-200 dark:bg-stone-950 rounded-md px-2" type="text" name="yearsOnDuty" />

                    <label className="mt-4 mx-4 px-2">Profession</label>
                    <select className="mb-4 mx-4 bg-neutral-200 dark:bg-stone-950 rounded-md px-2" name="profession">
                        <option> - Seleccione una Profession -</option>
                        {Array.isArray(professions) && professions.map((profession, i) => <option key={i + profession.name}>{profession.name}</option>)}
                    </select>

                    <div className="grid grid-cols-2 justify-items-center gap-x-4 mx-4 border-neutral-700 dark:border-neutral-900 rounded-xl">

                        <div className="flex flex-col relative items-center justify-center w-full border border-neutral-700 dark:border-neutral-900 rounded-xl">
                            <button className="opacity-0 absolute h-full w-full" type="reset" onClick={handleReset}></button>
                            <p className="">reset <i class="fa-solid fa-backward-step"></i></p>
                        </div>
                        <div className="flex flex-col relative items-center justify-center w-full border border-neutral-700 dark:border-neutral-900 rounded-xl">
                            <button className="opacity-0 absolute h-full w-full" type="submit"></button>
                            <p className="">Confirm <i class="fa-regular fa-circle-check"></i></p>
                        </div>

                    </div>

                </div>
            </form>
        </>
    )
}

export default ApplyPage