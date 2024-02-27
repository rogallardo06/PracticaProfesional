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
    }
}

module.exports = controller