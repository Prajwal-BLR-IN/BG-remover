import 'dotenv/config';
import express, {Request, Response} from 'express';
import cors from "cors";
import connectToDB from './configs/mongoDB';
import userRouter from './routes/userRoutes';
import { clerkWebhook } from './controllers/userController';

// App config
const PORT = process.env.PORT || 4000;
const app = express();

app.post('/api/user/webhook', express.raw({ type: 'application/json' }), clerkWebhook)

// intialize middewares
app.use(express.json());
app.use(cors());

//API routes
app.get('/', (req: Request, res: Response) => {
    res.send("API WORKING")
})

app.use('/api/user', userRouter);

const startServer = async() => {

    //connection to DB
    await connectToDB();
    app.listen(PORT, () => console.log(`server started at port http://localhost:${PORT}`))
}
startServer();

