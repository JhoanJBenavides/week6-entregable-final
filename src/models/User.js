const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection'); 
   // En Mayúsculas y singular      // en minúsculas y singular
const NombreModelo = sequelize.define('nombreModelo', {
    // Definimos las columnas aquí
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
         unique:true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

User.prototype.toJSON = function () {
    const values = Object.assign({},this.get());
    delete values .password;
    return values; 
}

User.veforeCreate(async (user) =>{
    const password = user.password
    const hashedPassword = await bcrypt.hash(password, 10)
    user.password = hashedPassword
})

module.exports = NombreModelo;