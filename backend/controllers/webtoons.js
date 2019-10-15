const models = require('../models')
const Webtoon = models.webtoons
const User = models.user

exports.index = (req, res) => {
    Webtoon.findAll({
        include: [{
            model: User,
            as: "UserData"
        }]
    })
    .then(result=>res.send(result))
    .catch(err=>res.send(err))
}

// exports.show = (req, res) => {
//     Webtoon.findOne({where:{id: req.params.id}})
//     .then(result => {
//         res.send(result)
//     }).catch(err => res.send(err))
    
// }

exports.show = async(req, res) => {
    try {
     const result = await Webtoon.findOne({where:{id:req.params.id}})
     res.send(result)   
    } catch (error) {
        res.send(error)
    }
    
}

exports.store = (req, res) => {
    Webtoon.create(req.body)
    .then(result=> {
        res.send({
            message: "success",
            result
        })
    })
}

exports.update = (req, res) => {
    Webtoon.update(
        req.body,
        {where: {id: req.params.id}}
    )
    .then(result=> {
        res.send({
            message: "success",
            data: req.body
        })
    })
}

exports.delete = async(req, res) => {
    try{
        const result = await Webtoon.destroy({where:{id:req.params.id}})  
        res.send({
            message:"success"
            ,result
        })  
    }
    catch(error){
        res.send(error)
    }
}
