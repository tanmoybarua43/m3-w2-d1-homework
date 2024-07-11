// var stats =[
//     {
//         'city': 'San Juan', 
//         'zip': '00926', 
//         'state': 'PR', 
//         'income': '34781',
//         'age': '44'
//     },
//     {
//         'city': 'Corona', 
//         'zip': '11368', 
//         'state': 'NY', 
//         'income': '50797',
//         'age': '32'
//     },
//     {
//         'city': 'Chicago', 
//         'zip': '60629', 
//         'state': 'IL', 
//         'income': '42019',
//         'age': '31'
//     },
//     {
//         'city': 'El Paso', 
//         'zip': '79936', 
//         'state': 'TX', 
//         'income': '54692',
//         'age': '31'
//     },
//     {
//         'city': 'Los Angeles', 
//         'zip': '90011', 
//         'state': 'CA', 
//         'income': '36954',
//         'age': '28'
//     },
//     {
//         'city': 'Norwalk', 
//         'zip': '90650', 
//         'state': 'CA', 
//         'income': '66453',
//         'age': '35'
//     }
// ]


// const { MongoClient } = require('mongodb');

// // Connection URL
// const url = 'mongodb://127.0.0.1:27017';
// const client = new MongoClient(url);

// async function createDatabase() {
//   try {
//     await client.connect();
//     console.log('Connected Successfully!');
//     const db = client.db('statsdb');
//     console.log('Database statsdb created!');
//   } catch (err) {
//     console.error(err);
//   } finally {
//     await client.close();
//   }
// }

// createDatabase();

// const { MongoClient } = require('mongodb');

// // Connection URL
// const url = 'mongodb://127.0.0.1:27017';
// const client = new MongoClient(url);

// async function createCollection() {
//   try {
//     await client.connect();
//     console.log('Connected Successfully!');
//     const db = client.db('statsdb');
//     await db.createCollection('uscensus');
//     console.log('Collection uscensus created!');
//   } catch (err) {
//     console.error(err);
//   } finally {
//     await client.close();
//   }
// }

// createCollection();

// const { MongoClient } = require('mongodb');

// const url = 'mongodb://127.0.0.1:27017';
// const client = new MongoClient(url);

// const stats = [
//   {
//     city: 'San Juan',
//     zip: '00926',
//     state: 'PR',
//     income: '34781',
//     age: '44',
//   },
//   {
//     city: 'Corona',
//     zip: '11368',
//     state: 'NY',
//     income: '50797',
//     age: '32',
//   },
//   {
//     city: 'Chicago',
//     zip: '60629',
//     state: 'IL',
//     income: '42019',
//     age: '31',
//   },
//   {
//     city: 'El Paso',
//     zip: '79936',
//     state: 'TX',
//     income: '54692',
//     age: '31',
//   },
//   {
//     city: 'Los Angeles',
//     zip: '90011',
//     state: 'CA',
//     income: '36954',
//     age: '28',
//   },
//   {
//     city: 'Norwalk',
//     zip: '90650',
//     state: 'CA',
//     income: '66453',
//     age: '35',
//   },
// ];

// async function addData() {
//   try {
//     await client.connect();
//     console.log('Connected Successfully!');
//     const db = client.db('statsdb');
//     const result = await db.collection('uscensus').insertMany(stats);
//     console.log(`${result.insertedCount} documents were inserted`);
//   } catch (err) {
//     console.error(err);
//   } finally {
//     await client.close();
//   }
// }

// addData();


// const { MongoClient } = require('mongodb');

// const url = 'mongodb://127.0.0.1:27017';
// const client = new MongoClient(url);

// const additionalStats = [
//   { city: 'Pacoima', zip: '91331', state: 'CA', income: '60360', age: '33' },
//   { city: 'Ketchikan', zip: '99950', state: 'AK', income: '00000', age: '00' },
// ];

// async function addAdditionalData() {
//   try {
//     await client.connect();
//     console.log('Connected Successfully!');
//     const db = client.db('statsdb');
//     const result = await db.collection('uscensus').insertMany(additionalStats);
//     console.log(`${result.insertedCount} additional documents were inserted`);
//   } catch (err) {
//     console.error(err);
//   } finally {
//     await client.close();
//   }
// }

// addAdditionalData();

// const { MongoClient } = require('mongodb');

// const url = 'mongodb://127.0.0.1:27017';
// const client = new MongoClient(url);

// async function findZipCode() {
//   try {
//     await client.connect();
//     console.log('Connected Successfully!');
//     const db = client.db('statsdb');
//     const result = await db.collection('uscensus').findOne({ city: 'Corona', state: 'NY' });
//     console.log(`The zip code for Corona, NY is ${result.zip}`);
//   } catch (err) {
//     console.error(err);
//   } finally {
//     await client.close();
//   }
// }

// findZipCode();

// const { MongoClient } = require('mongodb');

// const url = 'mongodb://127.0.0.1:27017';
// const client = new MongoClient(url);

// async function findIncomeCA() {
//   try {
//     await client.connect();
//     console.log('Connected Successfully!');
//     const db = client.db('statsdb');
//     const cursor = db.collection('uscensus').find({ state: 'CA' });
//     const results = await cursor.toArray();
//     console.log('Income for all cities in California:');
//     results.forEach(doc => {
//       console.log(`City: ${doc.city}, Income: ${doc.income}`);
//     });
//   } catch (err) {
//     console.error(err);
//   } finally {
//     await client.close();
//   }
// }

// findIncomeCA();
// const { MongoClient } = require('mongodb');

// const url = 'mongodb://127.0.0.1:27017';
// const client = new MongoClient(url);

// async function updateAlaska() {
//   try {
//     await client.connect();
//     console.log('Connected Successfully!');
//     const db = client.db('statsdb');
//     const result = await db.collection('uscensus').updateOne(
//       { state: 'AK' },
//       { $set: { income: '38910', age: '46' } }
//     );
//     console.log(`Updated ${result.modifiedCount} document(s) for Alaska`);
//   } catch (err) {
//     console.error(err);
//   } finally {
//     await client.close();
//   }
// }

// updateAlaska();

const { MongoClient } = require('mongodb');

const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);

async function sortByState() {
  try {
    await client.connect();
    console.log('Connected Successfully!');
    const db = client.db('statsdb');
    const cursor = db.collection('uscensus').find().sort({ state: 1 });
    const results = await cursor.toArray();
    console.log('Records sorted in ascending order by state:');
    results.forEach(doc => {
      console.log(doc);
    });
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

sortByState();





