import { getFirestore } from "firebase/firestore";
import app from "./app";

const db = getFirestore(app);

export default db;
