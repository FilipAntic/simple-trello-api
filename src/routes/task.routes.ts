import {Router} from "express";
import {createTask, deleteTask, getAllTasks, getTask, updateTask} from "../services/task.service";
import {TaskCreationAttributes} from "../model/model";

const routes = Router();

routes.get('/', async (req, res) => {
    try{
        const tasks = await getAllTasks();
        if(tasks.length > 0) {
            res.json(tasks);
        } else {
            res.json([]);
        }
        return;
    } catch (e) {
        console.error('Something went wrong while getting tasks',e)
        res.sendStatus(500);
    }
});
routes.get('/:id', async (req, res) => {
    try{
        const taskId = req.params.id;
        const task = await getTask(+taskId);
        if(!task) {
            return res.sendStatus(404);
        } else {
            return res.status(200).json(task);
        }
    }catch (e) {
        console.error('Something went wrong while getting task',e)

        res.sendStatus(500);

    }
});
routes.post('/', async (req, res) => {
    try{
        const taskBody = req.body as TaskCreationAttributes;
        const taskId = await createTask(taskBody);
        res.status(201).json({taskId});
    }catch (e) {
        console.error('Something went wrong while creating task',e)
        res.sendStatus(500);
    }
});
routes.put('/:id', async (req, res) => {
    try{
        const taskId = req.params.id;
        const taskBody = req.body as Partial<TaskCreationAttributes>;

        const task = await updateTask(+taskId,taskBody);
        if(!task) {
            res.sendStatus(400);
        } else {
            res.status(200).json(task);
        }

    }catch (e) {
        console.error('Something went wrong while updating task',e)
        res.sendStatus(500);
    }
});
routes.delete('/:id', async (req, res) => {
    try{
        const taskId = req.params.id;
        const isDeleted = await deleteTask(+taskId);
        if(isDeleted){
             return res.sendStatus(200);
        } else {
            return res.sendStatus(400);
        }
    }catch (e) {
        console.error('Something went wrong while deleting task',e)
        res.sendStatus(500);
    }
});

export default routes;
