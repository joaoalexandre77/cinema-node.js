import { Sequelize, STRING } from "sequelize";
import connection from "../config/sequelize-config.js";

const Diretor = connection.define('diretores', {
    nomeDiretor: {
        type: Sequelize.STRING,
        allowNull: false
    },
    idadeDiretor: {
        type: Sequelize.STRING,
        allowNull: false
    },
    generoDiretor: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

Diretor.sync({force: false});
export default Diretor;