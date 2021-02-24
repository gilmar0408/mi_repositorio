const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const models = require('../models');
const tokenServices = require('../services/token');

// Es una forma de hacer break para que continúe con la siguiente acción
// Evita que el controlador falle
exports.login = async (req, res, next) => {

    //req (Request) es la petición. req.body es el cuerpo de la petición que se hace
    // a la base de datos. Contiene la información que se pide 
    try {
        const user = await models.Usuario.findOne({where: { email: req.body.email }});
        // Si el usuario existe se verifica que la contraseña coincida
        // Como está encriptada, se debe compara la encriptada con la no encriptada.
        // Se usa una llave secreta para encriptar el token. En este caso es config.secret, que expira en 86400 segundos.
        if (user) {
            const passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
            if (passwordIsValid) {
                const token = await tokenServices.encode(user);
                res.status(200).send({
                    auth: true,
                    tokenReturn: token,
                    //user: user
                })
            } else {
                res.status(401).json({
                    error: 'Error en el usuario o contraseña'
                });
            }
        } else {
            res.status(404).json({
                error: 'Error en el usuario o contraseña'
            })

        }

    } catch (error) {
        res.status(500).send({
            message: 'Error'
        })
        next(error)
    }
};

exports.add = async (req, res, next) => {
    try {
        //Encriptar contraseña. El 10 indica la cantidad de veces que se encripta. Ese es el valor recomendado.
        req.body.password = bcrypt.hashSync(req.body.password, 10);
        const user = await models.Usuario.create(req.body);
        res.status(200).json(user);

    } catch (error) {
        res.status(500).send({
            message: 'Error'
        })
        next(error)
    }
};

exports.list = async (req, res, next) => {
    try {
        const user = await models.Usuario.findAll();
        // 200 indica que la respuesta fue correcta
        res.status(200).json(user);
    } catch (error) {
        res.status(500).send({
            message: 'Error'
        })
        next(error)
    }
};


exports.update = async (req, res, next) => {
    try {

        req.body.password = bcrypt.hashSync(req.body.password, 10);
        const registro = await models.Usuario.update({rol:req.body.rol ,nombre:req.body.nombre,password:req.body.password, email:req.body.email},
            {
               where:{
                   id: req.body.id
               } 
            });
        res.status(200).json(registro);

    } catch (error) {
        res.status(500).send({
            message: 'Error'
        })
        next(error)
    }
};

exports.activate = async (req, res, next) => {
    try {
        const registro = await models.Usuario.update({estado:1},
            {
               where:{
                   id: req.body.id
               } 
            });
        res.status(200).json(registro);

    } catch (error) {
        res.status(500).send({
            message: 'Error'
        })
        next(error)
    }
};

exports.deactivate = async (req, res, next) => {
    try {
        const registro = await models.Usuario.update({estado:0},
            {
               where:{
                   id: req.body.id
               } 
            });
        res.status(200).json(registro);

    } catch (error) {
        res.status(500).send({
            message: 'Error'
        })
        next(error)
    }
};

