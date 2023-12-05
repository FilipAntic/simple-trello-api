import {Router} from "express";
import {createUser} from "../services/user.service";

const routes = Router();

routes.post('/', (req, res) => {
    const userId = createUser({name: 'Filip A'});
    console.log(userId);
    res.json(userId);
});
routes.get('/', (req, res) => {});

export default routes;
