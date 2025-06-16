import mongoose from 'mongoose';

const connectToDB = async() =>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/bg-remover`)
        console.log('DB connection successful')
    } catch (err) {
        console.log("Error occuring using connenting to DB (file: mongoDB.ts)", err);
    }
}

export default connectToDB;