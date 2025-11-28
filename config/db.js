import mongoose from "mongoose"



export const connectDb = async() => {
   try {
       const conn = await mongoose.connect(String(process.env.MONGO_CONNECTION));
       return conn
   } catch (error) {
    console.error(error)
   }
}