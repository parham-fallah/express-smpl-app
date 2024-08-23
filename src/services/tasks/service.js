import { 
  getTaskById as getTaskByIdDataService,
  getTasksByUserIdDataService
} from '../../model/tasks/index.js';

async function getTasksByUserIdService(userId) {
  const tasks = await getTasksByUserIdDataService(userId);
  return tasks;
}



async function getTaskByIdService(taskId, userId) {
  const task = await getTaskByIdDataService(taskId, userId);
  if (task === null || task === undefined || task.length === 0) {
    return null;
  }
  return task[0];
}

export {
  getTaskByIdService,
  getTasksByUserIdService
}