import { DataTypes } from "sequelize";
import db from "../db/connection";

const Usuario = db.define('Usuario',{
nombre: {
    type: DataTypes.STRING
},
email: {
    type: DataTypes.STRING
},
estado: {
    type: DataTypes.BOOLEAN //aunque en la base le pusimos tynint lo podemos
    //manejar como un boolean, sequelize se encargará de transformarlos en 1 o 0
},
})

export default Usuario;