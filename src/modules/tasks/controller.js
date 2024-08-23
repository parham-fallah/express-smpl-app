import {
  getTaskByIdService
} from '../../services/tasks/service.js';

const getTaskByIdController = async (req, res, next) => {
  try {
    const taskId = req.validatedParams.id;
    const userId = req.user.id;
    const task = await getTaskByIdService(taskId, userId);
    if (task === null) {
      res.status(404).json({
        message: `The task with id=${taskId} is not exists`
      });
    } else {
      res.json(task);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message
    });
  }
}

export {
  getTaskByIdController
}
