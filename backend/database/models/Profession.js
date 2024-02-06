module.exports = (sequelize,DataTypes) => {
    const Profession = sequelize.define("Profession", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(25),
            allowNull: false
        }
    },
    {
        timestamps: false
    });

    Profession.associate = function(models){

        Profession.belongsToMany(models.Aspirant, {
            as: "history",
            through: models.History,
            foreignKey: "profession",
            otherKey: "aspirant"
        });
    }
    
    return Profession;
}