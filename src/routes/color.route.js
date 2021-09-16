const express = require('express');
const router = express.Router();
const {postColor, getAllColors, deleteColor} = require('../controllers/color.controller')

router.post('/', postColor);
router.get('/', getAllColors);
router.delete('/:id',deleteColor)
module.exports = router;