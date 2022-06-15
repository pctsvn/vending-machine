import mongoose from "mongoose";
import { Secrets } from "../util";

const DB_URI = Secrets.DB_URI;

export const connectDatabase = () => {
  mongoose.connect(DB_URI);
};
