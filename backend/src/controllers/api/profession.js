const { Aspirant, History, Profession, Profile} = require("../../../database/models")
const { Op } = require("sequelize");

const controller = {
    all: async(req,res) => {
        try {
            let professions = await Profession.findAll()
            return res.status(201).json({
                meta: {
                    status: "Ok",
                    length: professions.length
                },
                data: professions
            })
        } catch (error) {
            console.error("Error en la base de datos", error);
        }
    },
    one: async (req, res) => {
        try {
            let id = req.params.id
            let profession = await Profession.findByPk(id)
            return res.status(201).json({
                meta: {
                    status: "Ok",
                },
                profession: profession
            })
        } catch (error) {
            console.error("Error en la base de datos", error);
        }
    },
}

module.exports = controller;