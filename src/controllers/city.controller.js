import {getConnection} from "../database/database"

const getCiudades = async(req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM ciudades");

        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const getCiudad = async(req, res) => {
    try {
        const {id} = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM ciudades WHERE id = ?", id);

        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}


const addCiudad = async(req, res) => {
    try {
        const {nombre, pais, continente, ciudadcostera, atractivos, idioma} = req.body;

        if (nombre === undefined || pais === undefined || continente === undefined || ciudadcostera === undefined || atractivos === undefined || idioma === undefined) {
            res.status(400).json({message:"Bad Request. Please fill all field."})
            return
        }

        const ciudad = {
            nombre,
            pais,
            continente,
            ciudadcostera,
            atractivos,
            idioma
        }
        const connection = await getConnection();
        const result = await connection.query("INSERT INTO ciudades SET ?", ciudad);
        res.json({message:"City added!"})
        return
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const updateCiudad = async(req, res) => {
    try {
        const {id} = req.params;
        const {nombre, pais, continente, ciudadcostera, atractivos, idioma} = req.body;

        console.log(body);
        if (nombre === undefined || pais === undefined || continente === undefined || ciudadcostera === undefined || atractivos === undefined || idioma === undefined) {
            res.status(400).json({message:"Bad Request. Please fill all field."});
            return
        }

        const ciudad = {
            nombre,
            pais,
            continente,
            ciudadcostera,
            atractivos,
            idioma
        }

        const connection = await getConnection();
        const result = await connection.query("UPDATE ciudades SET ? WHERE id = ?", [ciudad, id]);

        res.json(result);
        return
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const deleteCiudad =  async(req, res) => {
    try {
        const {id} = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM ciudades WHERE id = ?", id);

        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const methods = {
    getCiudades,
    getCiudad,
    addCiudad,
    deleteCiudad,
    updateCiudad
};