const Model = require('../Model/imageModel')
const fs = require('fs')


const createImage = async (req, res, next)=>{
    try{
        // const imageShow = req.file.path;
        // const fileBuffer = fs.readFileSync(`${imageShow}`)
        // const base64Image = fileBuffer.toString('base64');

        // const newItem = await Model.create({
        //     name: req.body.name,
        //     image: base64Image
        //     // image: imageShow

        // })
        const newItem = await Model.create({
            name: req.body.name,
            image: req.body.image
        })
        res.status(201).json({data: newItem})
    }catch(err){
        res.status(400).json({error: err.message})
        next(err)
    }
}

const getImage = async (req, res, next)=>{
    try{
        // const Id = req.params.id
        // const show = await Model.findById(Id)
        // const input = show.image;
        // const imageBuffer = new Buffer.from(input, 'base64');
        // fs.writeFileSync('anew.jpg', imageBuffer)
        const getImages = await Model.find();

        res.status(200).json({data: getImages})
    }catch(err){
        // res.status(400).json({error: err.message})
        next(err)
    }
}

module.exports = {
    createImage,
    getImage,
}