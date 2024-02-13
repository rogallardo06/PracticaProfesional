const { Aspirant, History, Profession, Profile} = require("../../../database/models")
const { Op } = require("sequelize");

const controller = {
    all: async(req,res) => {
        try {
            let histories = await History.findAll()
            return res.status(201).json({
                meta: {
                    status: "Ok",
                    length: histories.length
                },
                data: histories
            })
        } catch (error) {
            console.error("Error en la base de datos", error);
        }
    },
    one: async (req, res) => {
        try {
            let id = req.params.id
            let history = await History.findByPk(id)
            return res.status(201).json({
                meta: {
                    status: "Ok",
                },
                history: history
            })
        } catch (error) {
            console.error("Error en la base de datos", error);
        }
    }
}

module.exports = controller;