import Estreia from "../models/estreiaModel.js";
import Diretor from "../models/diretoresModel.js";

const associations = () => {
    Diretor.hasMany(Estreia, {
        foreignKey: "idDiretor"
    });

    Estreia.belongsTo(Diretor, {
        foreignKey: "idDiretor"
    })
}

export default associations;