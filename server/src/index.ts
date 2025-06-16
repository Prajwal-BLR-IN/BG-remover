import 'dotenv/config';
import express, {Request, Response} from 'express';
import cors from "cors";
import connectToDB from './configs/mongoDB';

// App config
const PORT = process.env.PORT || 3000;
const app = express();

// intialize middewares
app.use(express.json());
app.use(cors());

//API routes
app.get('/', (req: Request, res: Response) => {
    res.send("API WORKING")
})

const startServer = async() => {

    //connection to DB
    await connectToDB();
    app.listen(PORT, () => console.log(`server started at port http://localhost:${PORT}`))
}
startServer();
