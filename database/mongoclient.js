// This approach is taken from https://github.com/vercel/next.js/tree/canary/examples/with-mongodb
import { MongoClient } from "mongodb";

if (!process.env.MONGO_CONNECTION) {
  throw new Error('Invalid/Missing environment variable: "MONGO_CONNECTION"');
}
/* declare variable */
const uri = process.env.MONGO_CONNECTION;
const options = {};

let client;
let mongoClientPromise;
/* declare variable */
if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  mongoClientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri, options);
  mongoClientPromise = client.connect();
}


export default mongoClientPromise;