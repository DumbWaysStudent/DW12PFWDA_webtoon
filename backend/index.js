const express = require('express')
require('express-group-routes')

const app = express()
const bodyParser = require('body-parser')
const port = 9876


app.use(bodyParser.json())
//controllers

const webtoonsController = require('./controllers/webtoons')
const AuthController = require('./controllers/auth')
//middleware
const {authenticated} = require('./middleware')
app.group("/api/v1",(router)=>{

    router.post('/login',AuthController.login)
    router.post('/register',AuthController.register)
    router.get('/webtoons', webtoonsController.index)

    //SHOW DATA
    router.get('/webtoon/:webtoon_id/episodes', webtoonsController.showDetails)
    router.get('/webtoon/:webtoon_id/episode/:episode_id',webtoonsController.showContent)
    router.get('/user/:user_id/webtoons',authenticated,webtoonsController.showCreations)
    router.get('/user/:user_id/webtoon/:webtoon_id/episodes',authenticated,webtoonsController.showEpisodes)

    //CRUD CREATION
    router.post('/user/:user_id/webtoon/:webtoon_id',authenticated,webtoonsController.addCreation)
    router.post('/user/:user_id/webtoon/:webtoon_id/episode',authenticated,webtoonsController.addEpisode)
    router.put('/user/:user_id/webtoon/:webtoon_id/episode',authenticated,webtoonsController.updateEpisode)
    router.put('/user/:user_id/webtoon/:webtoon_id',authenticated,webtoonsController.updateCreation)
    router.delete('/user/:user_id/webtoon/:webtoon_id',authenticated,webtoonsController.deleteCreation)
    router.delete('/user/:user_id/webtoon/:webtoon_id/episode/:episode_id',authenticated,webtoonsController.deleteEpisode)


})
app.listen(port, () => console.log(`Listening on port ${port}!`))