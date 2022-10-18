import {MongoClient} from "mongodb";

const {env: {DB_URL}} = process;

export const connectToDatabase = async () => {
    try {
        return new MongoClient(DB_URL);
    } catch (e) {
        console.error(e)
    }
};