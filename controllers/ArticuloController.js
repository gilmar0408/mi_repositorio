const models = require('../models');


exports.listActive = async (req, res, next) => {
    try {
        const registro = await models.Articulo.findAll({


            where: {

                estado: 1
            },
            
            
            include:[
                {
                    model: models.Categoria,
                    as: 'categoria',
                    //attributes:["id","nombre","descripcion"]
                }
            ]
            
        });
        // 200 indica que la respuesta fue correcta
        if(registro){
            res.status(200).json(registro);
        }else{
            res.status(404).send({
                message: 'No hay artículos registrados'
            })
        }

    } catch (error) {
        res.status(500).send({
            message: 'Error'
        })
        next(error)
    }
};

exports.list = async (req, res, next) => {
    try {
        const registro = await models.Articulo.findAll({
            include:[
                {
                    model: models.Categoria,
                    as: 'categoria',
                    //attributes:["id","nombre","descripcion"]
                }
            ]
        });
        // 200 indica que la respuesta fue correcta
        if(registro){
            res.status(200).json(registro);
        }else{
            res.status(404).send({
                message: 'No hay artículos registrados'
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
        const registro = await models.Articulo.create(req.body);
        res.status(200).json(registro);

    } catch (error) {
        res.status(500).send({
            message: 'Error'
        })
        next(error)
    }
};

exports.update = async (req, res, next) => {
    try {
        const registro = await models.Articulo.update({codigo:req.body.codigo ,nombre:req.body.nombre,descripcion:req.body.descripcion,resumen:req.body.resumen,imagen:req.body.imagen, categoriaId:req.body.categoriaId},
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
        const registro = await models.Articulo.update({estado:1},
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
        const registro = await models.Articulo.update({estado:0},
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


