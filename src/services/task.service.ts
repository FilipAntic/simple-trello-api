import {Task, TaskCreationAttributes, User} from "../model/model";

export const getAllTasks = async () => {
    return Task.findAll({raw: true, attributes: ['title', 'id', 'userId'], include: [
            {
                attributes: [['name', 'userName']],
                model: User,
                as: 'user',
            },
        ]});
};
export const getTask = async (taskId: number) => {
    return Task.findOne({
        where: {
            id: taskId,
        },
        raw: true
    });
};
export const deleteTask = async (taskId: number) => {
    const rowsDeleted = await  Task.destroy({where: {id: taskId}});
    return rowsDeleted === 1;
};
export const updateTask = async (taskId: number, task: Partial<TaskCreationAttributes>) => {
    await Task.update(task, {where :{id: taskId}});
    return getTask(taskId);
};
export const createTask = async (task: TaskCreationAttributes) => {
    const result = await Task.create(task)
    return result.id;
};
