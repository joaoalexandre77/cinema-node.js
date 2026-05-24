import { Sequelize, STRING } from "sequelize";
import connection from "../config/sequelize-config.js";

const Estreia = connection.define('estreias', {
    urlImage: {
        type: Sequelize.STRING,
        allowNull: false
    },
    titulo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    genero: {
        type: Sequelize.STRING,
        allowNull: false
    },
    dataEstreia: {
        type: Sequelize.STRING,
        allowNull: false
    },
    idDiretor: {
        type: Sequelize.INTEGER, 
        allowNull: false
    }
})

Estreia.sync({force: false});
export default Estreia;