const models = require('../models')
const webtoon = models.webtoons
const detailWebtoon = models.detail_webtoon
const user = models.user

exports.index = (req, res) => {
    webtoon.findAll({
        include: [{
            model: user,
            as: "UserData"
        }]
    })
    .then(result=>res.send(result))
    .catch(err=>res.send(err))
}

// exports.show = (req, res) => {
//     webtoon.findOne({where:{id: req.params.id}})
//     .then(result => {
//         res.send(result)
//     }).catch(err => res.send(err))
    
// }

exports.showDetail = async(req, res) => {
    const webtoonId = req.params.id
    try {
    const result = await detailWebtoon.findOne({
    where:{id:req.params.id}})
     res.send(result)   
    } catch (error) {
        res.send(error)
    }  
}

exports.store = (req, res) => {
    webtoon.create(req.body)
    .then(result=> {
        res.send({
            message: "success",
            result
        })
    })
}

exports.update = (req, res) => {
    webtoon.update(
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
        const result = await webtoon.destroy({where:{id:req.params.id}})  
        res.send({
            message:"success"
            ,result
        })  
    }
    catch(error){
        res.send(error)
    }
}
