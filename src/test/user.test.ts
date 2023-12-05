import {Status, Task, User} from "../model/model";
import {createStatus, getAllStatuses} from "../services/status.service";
import {createUser} from "../services/user.service";
import {createTask, deleteTask, getAllTasks, updateTask} from "../services/task.service";


test('create user', async () => {
    await Task.sync();
    await User.sync();
    await Status.sync();
    const statusId = await createStatus({name: 'Done'});
    const userId = await createUser({name: 'Filip A.'});
    const taskId = await createTask({description: 'Desc', title: 'Do something!', userId, statusId});
    const task = await updateTask(taskId, {title: "Updated"} );
    // const deleted = await deleteTask(taskId);
    console.log(task);
    console.log(await getAllTasks());
    expect(taskId).toBeGreaterThan(0);
});
