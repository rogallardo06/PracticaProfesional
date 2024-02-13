const { Aspirant, History, Profession, Profile} = require("../../../database/models")
const { Op } = require("sequelize");

const controller = {
    all: async(req,res) => {
        try {
            let profiles = await Profile.findAll()
            return res.status(201).json({
                meta: {
                    status: "Ok",
                    length: profiles.length
                },
                data: profiles
            })
        } catch (error) {
            console.error("Error en la base de datos", error);
        }
    },
    one: async (req, res) => {
        try {
            let id = req.params.id
            let profile = await Profile.findByPk(id)
            return res.status(201).json({
                meta: {
                    status: "Ok",
                },
                profile: profile
            })
        } catch (error) {
            console.error("Error en la base de datos", error);
        }
    }
}

module.exports = controller;