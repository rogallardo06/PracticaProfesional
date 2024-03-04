const { Aspirant, History, Profession, Profile} = require("../../../database/models")
const { Op } = require("sequelize");

const controller = {
    all: async(req,res) => {
        try {
            let aspirants = await Aspirant.findAll({
                include: ["history", "profile"]
            })
            return res.status(201).json({
                meta: {
                    status: "Ok",
                    length: aspirants.length
                },
                data: aspirants
            })
        } catch (error) {
            console.error("Error en la base de datos", error);
        }
    },
    one: async (req, res) => {
        try {
            let id = req.params.id
            let aspirant = await Aspirant.findByPk(id)
            return res.status(201).json({
                meta: {
                    status: "Ok",
                },
                aspirant: aspirant
            })
        } catch (error) {
            console.error("Error en la base de datos", error);
        }
    },
    search: async (req,res) => {
        try {
            let name = req.query.name
            let aspirant = await Aspirant.findAll({
                include: ["history", "profile"],
                where: {
                    name: {[Op.like]: "%" + name + "%"}
                }
            })
            if (name && aspirant.length > 0) {
            return res.status(201).json({
                meta: {
                    status: "Ok",
                },
                aspirantSearched: aspirant
            })
        } else {
            return res.status(201).json({
                error: "No se encontro a ningun Aspirante"
            })
        }
        } catch (error) {
            console.error("Error en la base de datos", error);
        }
    },
    create: async (req,res) => {
            const { dni, name, surname, email, tel, linkedin, birthDate, gender, image, link, company, position, yearsOnDuty, profession} = req.body;
            console.log(req.body);
        try {
                
            const newAspirant = await Aspirant.create({
                dni: dni,
                name: name,
                surname: surname,
                email: email,
                tel: tel,
                linkedin: linkedin,
                birthDate: birthDate,
                gender: gender,
                image: image
            });
    
            res.status(201).json({ message: "Usuario creado correctamente", user: newAspirant });
        } catch (error) {
            console.log("Error al crear el usuario:", error);
            res.status(500).json({ message: "Error al crear el usuario" });
        }
        
    }
}

module.exports = controller