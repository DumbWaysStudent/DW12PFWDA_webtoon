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
    router.get('/webtoon/:id/episodes', webtoonsController.showDetails)
    router.get('/webtoon/:webtoon_id/episode/:episode_id',webtoonsController.showContent)

    router.get('/user/:id/webtoons',authenticated,webtoonsController.showCreations)
    router.post('/user/:id/webtoon/:webtoon_id',authenticated,webtoonsController.addCreation)
    router.put('/user/:id/webtoon/:webtoon_id',authenticated,webtoonsController.updateCreation)

    router.get('/user/:id/webtoon/:webtoon_id/episodes',authenticated,webtoonsController.showEpisodes)

})
app.listen(port, () => console.log(`Listening on port ${port}!`))