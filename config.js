import 'dotenv/config';
import mongoose from "mongoose";

const config = async () => {
    mongoose.Promise = global.Promise;
    mongoose.set('strictQuery', true);
    await mongoose
        .connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log('Connected to DB'))
        .catch((error) => console.log('DB error', error))
}
export default config;