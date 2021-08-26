const express = require('express');
const db = require('../models/tindartModel.js')
const router = express.Router();
const apiController = require('../controllers/apiController');
const authController = require('../controllers/authController');
const loginController = require('../controllers/loginController');


router.get('/images/:userId',async (req, res) => {
    console.log(req.params.userId);
    let text;
    let params = [];
    
        const lastArt = await db.query(`select lastart_id from person where _id = $1`,[req.params.userId])
        text = `select * from art where _id>$1 order by _id limit 20`;
        params.push(lastArt.rows[0].lastart_id);
    
    console.log('this is the text', text);
    console.log('this is params',params)
    const array= await db.query(text,params);
    
    
    res.status(200).json(array.rows)});


router.get('/images', async(req,res)=> {
    const text = `select * from art order by _id limit 20`;
    const array = await db.query(text)

    res.status(200).json(array.rows)



})
//router.post('/like', apiController.like, (req, res) => res.status(200).json({})); // something is missing here
router.put('/like', async(req,res)=>{
    console.log(req.body);
    const {user_id, art_id} = req.body;
    console.log("user_id",user_id);
    console.log("art_id", art_id);
    console.log(typeof parseInt(art_id));
    const text = `update person set lastart_id = $2 where _id = $1`;
    await db.query(text,[user_id, parseInt(art_id)]);
    const textNumLikes = `UPDATE art SET numLikes = numLikes+1 WHERE _id = $1`
    await db.query(textNumLikes, [art_id])
    res.sendStatus(200)

})

router.put('/dislike', async(req,res)=>{
    console.log(req.body);
    const {user_id, art_id} = req.body;
    console.log("user_id",user_id);
    console.log("art_id", art_id);
    const text = `update person set lastart_id = $2 where _id = $1`;
    await db.query(text,[user_id, parseInt(art_id)]);

    res.sendStatus(200)

})
//router.put('/dislike', apiController, (req, res) => res.status(200).json({}))



module.exports = router;