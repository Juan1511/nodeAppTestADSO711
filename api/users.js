const { where } = require('sequelize');
const db = require('../models');
const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.send({ Title: 'Hello ADSO!' });
});

router.post("/new", async (req, res) => {
    let name = req.body.name;
    let email = req.body.email;
    let password = req.body.password;
    try {
        await db.User.create({
            name: name,
            email: email,
            password: password
        });
        res.status(200).send("Usuario Creado");

    } catch (error) {
        console.log(error);
        res.status(400).send("Error al crear el usuario");
    }
});

router.get("/all", async (req, res) => {
    try {
        const users = await db.User.findAll();
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(400).send("No se pudieron obtener los usuarios");
    }
});

router.get("/:id", async (req, res) => {
    try {
        let id = req.params.id;
        let users = await db.User.findByPk(id);
        res.status(200).send(users);
    } catch (error) {
        res.status(400).send("No se pudo obtener el usuario");
    }
});

router.put("/:id", async (req, res) => {
    try {
        let id = req.params.id;
        let { name, email, password } = req.body;
        await db.User.update(
            { name, email, password },
            {
                where: {
                    id,
                }
            }
        );
        res.status(200).send("Usuario actualizado correctamente");
    } catch (error) {
        res.status(400).send("Error al actualizar el usuario");
    }
});

router.delete("/:id", async (req, res) => {
    try {
        let id = req.params.id;
        await db.User.destroy({
            where: {
                id
            }
        });
        res.status(200).send("Usuario eliminado correctamente");
    } catch (error) {
        res.status(400).send("No se pudo eliminar el usuario eliminar el usuario");
    }
});

module.exports = router;