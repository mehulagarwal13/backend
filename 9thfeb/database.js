// const url="mongodb+srv://mehulagarwal333:luhem@1313@coding.dzqigr6.mongodb.net/";
const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
//username password clustername   %40
// @=%40
const url = "mongodb+srv://mehulagarwal333:luhem%401313@coding.dzqigr6.mongodb.net/myProject";
const client = new MongoClient(url);

// Database Name
const dbName = 'CoderArmy';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName); //yeh check hi nhi karta ki esa database exist karta bhi hai
  const collection = db.collection('user'); //yeh yha bhi check nhi karta ki esa document hai bhi ya nhi

  // the following code examples can be pasted here...
  const findResult = await collection.find({}).toArray();
  console.log('Found documents =>', findResult);

  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());