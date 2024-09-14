const express =require ('express');
const {getAllUser,getById,deleteById,updateById}=require('../controllers/User.controller');
const authenticate=require('../middlewares/AuthMiddleWare');

const router =express.Router();


router.get('/',authenticate,getAllUser);
router.get('/:id',authenticate,getById);
router.delete('/:id',authenticate,deleteById);
router.put('/:id',authenticate,updateById);


module.exports =router;