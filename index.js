const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
let db = require('./db.js');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/messages', (req, res) => {
  res.send(db.items);
});

// const validateItem = item => {
//   const errors = {};
//   if (!item.name) {
//     errors.name = 'Field name is required.';
//   }
//   if (!item.type) {
//     errors.type = 'Field type is required.';
//   }

//   if (!item.price) {
//     errors.price = 'Field price is required.';
//   } else {
//     if (isNaN(item.price)) {
//       errors.price = 'Field price must be a numeric value.';
//     }
//   }

//   if (!item.rating) {
//     errors.rating = 'Field rating is required.';
//   } else {
//     if (isNaN(item.rating)) {
//       errors.rating = 'Field rating must be a numeric value.';
//     }
//   }

//   return errors;
// };

// app.post('/api/items', (req, res) => {
//   const id = db.items.length + 1;
//   const newItem = { ...req.body, id };
//   const errors = validateItem(newItem);
//   if (Object.keys(errors).length > 0) {
//     res.status(400);
//     res.send(errors);
//   }

//   const parsedItem = {
//     ...newItem,
//     price: parseFloat(newItem.price),
//     rating: parseFloat(newItem.rating),
//   };
//   db = {
//     ...db,
//     items: [...db.items, parsedItem],
//   };

//   res.status(200);
//   res.send(parsedItem);
// });

const port = 4000;
app.listen(port, () => {
  console.info(`Listening on port ${port}`);
});
