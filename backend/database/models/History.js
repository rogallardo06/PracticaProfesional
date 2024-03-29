module.exports = (sequelize,DataTypes) => {
    
    const History = sequelize.define("History", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        aspirant: {
            type: DataTypes.INTEGER
        },
        profession: {
            type: DataTypes.INTEGER
        },
        company: {
            type: DataTypes.STRING(25),
            allowNull: false
        },
        position: {
            type: DataTypes.STRING(25),
            allowNull: false
        },
        yearsOnDuty: {
            type: DataTypes.INTEGER(2),
            allowNull: false
        }
    },
    {
        timestamps: false
    });

    return History;
}