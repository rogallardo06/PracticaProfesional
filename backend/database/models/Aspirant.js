module.exports = (sequelize,DataTypes) => {
    const Aspirant = sequelize.define("Aspirant", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        dni: {
            type: DataTypes.INTEGER(10),
            allowNull: false,
            unique: true
        },
        name: {
            type: DataTypes.STRING(25),
            allowNull: false
        },
        surname: {
            type: DataTypes.STRING(25),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(50),
            allowNull: false,
            unique: true
        },
        tel: {
            type: DataTypes.STRING(25),
            allowNull: false,
            unique: true
        },
        linkedin: {
            type: DataTypes.STRING(100),
            allowNull: false,
            unique: true
        },
        birthDate: {
            type: DataTypes.DATE,
            allowNull: false
        },
        gender: {
            type: DataTypes.STRING(25),
            allowNull: false
        },
        image: {
            type: DataTypes.STRING(255)
        }
    },
    {
        timestamps: false
    });

    Aspirant.associate = function(models){

        Aspirant.belongsToMany(models.Profession, {
            as: "history",
            through: models.History,
            foreignKey: "aspirant",
            otherKey: "profession"
        });

        Aspirant.hasOne(models.Profile, {
            as: "profile",
            foreignKey: "aspirantId"
        });
    }

    return Aspirant;
}