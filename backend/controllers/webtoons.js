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
    where:{id:req.params.webtoon_id}})
     res.send(result)   
    } catch (error) {
        res.send(error)
    }  
}


exports.showCreations = async(req, res) => {
    try {
    const result = await webtoon.findAll({
    where:{
        created_by:req.params.user_id
    }})
     res.send(result)   
    } catch (error) {
        res.send(error)
    }  
}

exports.addEpisode = (req, res) => {
    const body = req.body
    const id_user=req.params.user_id
    const id_webtoon=req.params.webtoon_id
    detailWebtoon.create({
        ...body,
        id_user,
        id_webtoon
    },{
        where:{id_user :id_user,id_webtoon:id_webtoon}
    })
    .then(result=> {
        res.send({
            message: "add episode success",
            result
        })
    })
    .catch(err=>{
        res.send(err)
    })
}

exports.updateEpisode = (req, res) => {
    const body = req.body
    const id_user=req.params.user_id
    const id_webtoon=req.params.webtoon_id
    detailWebtoon.update({
        ...body
    },{
        where:{id_user :id_user,id_webtoon:id_webtoon}
    })
    .then(result=> {
        res.send({
            message: "update episode success",
            ...body,id_user,id_webtoon
        })
    })
    .catch(err=>{
        res.send(err)
    })
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

exports.updateCreation = (req, res) => {
    const body=req.body
    const id_user=req.params.user_id
    const id_webtoon=req.params.webtoon_id
    webtoon.update(
        req.body,   
        {where: {
            created_by:id_user,
            id:id_webtoon
        }})
    .then(result=> {
        res.send({
            message: "update success",
            ...body,id_user,id_webtoon
        })  
    })
    .catch(err=>{
        res.send(err)
    })
}

exports.showContent = async(req, res) => {
    const webtoonId=req.params.webtoon_id
    const episodeId=req.params.episode_id
    try {
    const result = await detailEpisode.findAll({
    where:{
        id_webtoon:webtoonId,
        id_episode:episodeId
    }})
     res.send(result)   
    } catch (error) {
        res.send(error)
    }  
}

exports.showEpisodes = async(req, res) => {
    const userId=req.params.user_id
    const webtoonId=req.params.webtoon_id
    try {
        const result = await detailEpisode.findAll({
        where:{
            id_user:userId,
            id_webtoon:webtoonId
        }})
        console.log(req.params)
        res.send(result)   
    } catch (error) {
        res.send(error)
    }  
}

exports.deleteCreation = async(req, res) => {
    const userId=req.params.user_id
    const webtoonId=req.params.webtoon_id
    try{
        const result = await webtoon.destroy({where:{
            created_by:userId,
            id:webtoonId
        }})  
        res.send({
            message:"success"
            ,result
        })  
    }
    catch(error){
        res.send(error)
    }
}
