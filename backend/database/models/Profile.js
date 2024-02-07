module.exports = (sequelize,DataTypes) => {
    const Profile = sequelize.define("Profile", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        aspirantId: {
            type: DataTypes.INTEGER
        },
        link: {
            type: DataTypes.STRING(25),
            allowNull: false
        },
        name: {
            type: DataTypes.STRING(25),
            allowNull: false
        },
        contributions: {
            type: DataTypes.INTEGER(5),
            allowNull: false
        },
        stars: {
            type: DataTypes.INTEGER(5),
            allowNull: false
        }
    },
    {
        timestamps: false
    });

    Profile.associate = function(models){

        Profile.belongsTo(models.Aspirant, {
            as: "aspirant",
            foreignKey: "aspirantId"
        });

    }
    
    return Profile;
}