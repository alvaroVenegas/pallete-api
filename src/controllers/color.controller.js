const Color = require('../models/color.model');

const postColor = async (req, res, next) => {
    try{
        const {hex} = req.body;
        const color = new Color({hex});
        const colorInserted = await color.save();
        return res.status(201).json(colorInserted);
    }catch(error){
        return next(error)
    }
}

const getAllColors = async (req, res, next) => {
    try{
        const colors = await Color.find();
        return res.status(200).json(colors)
    }catch(error){
        return next(error)
    }
}

const deleteColor = async (req, res, next) =>{
    try{
        const { id } = req.params;
        const colorDeleted = await Color.findByIdAndDelete(id);
        return res.status(200).json(colorDeleted)
    }catch(error){
        return next(error)
    }
}

module.exports = {
    postColor,
    getAllColors,
    deleteColor
}