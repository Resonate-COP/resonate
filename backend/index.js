import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import userRouter from './routes/users.route.js';

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/v1/users', userRouter);

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
})