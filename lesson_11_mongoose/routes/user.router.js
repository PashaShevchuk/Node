const { Router } = require('express');

const {
  userController: { getAll, createOne, updateById, deleteById }
} = require('../controllers');

const userRouter = Router();


userRouter.post('/', createOne);       // create
userRouter.get('/', getAll);           // read
userRouter.patch('/:id', updateById);  // update
userRouter.delete('/:id', deleteById); // delete


module.exports = userRouter;
