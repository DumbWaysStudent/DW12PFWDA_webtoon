const Sequelize = require('sequelize')
const models = require('../models')
const webtoon = models.webtoons
const detailWebtoon = models.detail_webtoon
const detailEpisode = models.detail_episode
const favorites = models.favorites
const user = models.user
const Op = Sequelize.Op;



// exports.index = (req, res) => {
//     webtoon.findAll({
//         include: [{
//             model: user,
//             as: "UserData"
//         }]
//     })
//     .then(result=>res.send(result))
//     .catch(err=>res.send(err))
// }
// exports.show = (req, res) => {
//     webtoon.findOne({where:{id: req.params.id}})
//     .then(result => {
//         res.send(result)
//     }).catch(err => res.send(err))
    
// }

exports.index = (req, res) => {
    if(req.query.title){
        webtoon.findAll({
            where:{title:{[Op.like]:`%${req.query.title}%` }}
        })
        .then(result=>res.send(result))
        .catch(err=>res.send(err))
    }
    else if(req.query.id_user){
        favorites.findAll({
            where:{id_user:req.query.id_user},
            include: [{
                model: webtoon,
                as: "webtoonData"
            }]
        })
        .then(result=>res.send(result))
        .catch(err=>res.send(err))
    }
    else{
        webtoon.findAll()
        .then(result=>res.send({
            result
        }))
        .catch(err=>res.send(err))
    }
}

exports.showFavorites = async(req, res) => {
    try {
    const result = await favorites.findAll({
    where:{id_user:req.query.id_user},
        include: [{
            model: webtoon,
            as: "webtoonData"
        }]
    })
     res.send(result)   
    } catch (error) {
        res.send(error)
    }  
}

exports.showDetails = async(req, res) => {
    try {
    const result = await detailWebtoon.findOne({
    where:{id:req.params.id}})
     res.send(result)   
    } catch (error) {
        res.send(error)
    }  
}


exports.showCreations = async(req, res) => {
    try {
    const result = await webtoon.findAll({
    where:{created_by:req.params.id}})
     res.send(result)   
    } catch (error) {
        res.send(error)
    }  
}

exports.showEpisodes = async(req, res) => {
    try {
    const result = await detailEpisode.findAll({
    where:{id_webtoon:req.params.idWebtoon,id_episode:req.params.idEpisode}})
     res.send(result)   
    } catch (error) {
        res.send(error)
    }  
}

exports.addCreation = (req, res) => {
    webtoon.create(req.body)
    .then(result=> {
        res.send({
            message: "add creation success",
            result
        })
    })
    .catch(err=>{
        res.send(err)
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
