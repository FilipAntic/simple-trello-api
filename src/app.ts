import express from "express";
import bodyParser from "body-parser";
import {sequelize} from "./model/model";
import taskRoutes from "./routes/task.routes";
import userRoutes from "./routes/user.routes";
import statusRoutes from "./routes/status.routes";

const app = express();
app.use(bodyParser.json());
app.set('sequelize', sequelize)
app.set('models', sequelize.models)

app.use('/tasks',taskRoutes);
app.use('/users',userRoutes);
// app.use(statusRoutes);

// app.use((err, req, res, next) => {
//     console.error(err.stack)
//     res.status(500).end();
// })
export default app;
