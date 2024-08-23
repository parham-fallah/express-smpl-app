import express from 'express';
import { getTaskByIdController } from './controller.js';
import { getTaskByIdValidator } from './validations.js';
import { getTasks, createTask } from '../../model/tasks/index.js';

import { getTasksByUserIdService } from '../../services/tasks/service.js';

const router = express.Router();


router.get('', async (req, res) => {
  try {
    const userId = req.user.id;
    const taskList = await getTasksByUserIdService(userId);
    res.json(taskList);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message
    });
  }
});

router.get('/:id', getTaskByIdValidator, getTaskByIdController);

router.post('', async (req, res) => {
  try {
    const {title, description, isCompleted} = req.body;
    await createTask(title, description, isCompleted);
    res.status(201).json({
      message: `The task added to the database.`
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message
    });
  }
})


export {
  router
};