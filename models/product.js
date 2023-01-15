// //file code
// // const fs = require("fs");
// // const path = require("path");
// // const rootDir = require("../util/path");
// // const p = path.join(rootDir, "data", "products.json");
// //var uuid = require("uuid");

// // const getProductsFromFile = (cb) => {
// //   fs.readFile(p, (err, fileContent) => {
// //     if (err) {
// //       cb([]);
// //     } else {
// //       cb(JSON.parse(fileContent));
// //     }
// //   });
// // };

// const db = require("../util/database");

// module.exports = class Product {
//   constructor(id, title, imageUrl, description, price) {
//     this.id = id;
//     this.title = title;
//     this.imageUrl = imageUrl;
//     this.description = description;
//     this.price = price;
//   }

//   save() {
//     return db.execute(
//       "INSERT INTO PRODUCTS (title, imageUrl, description, price) VALUES (?, ?, ?, ?)",
//       [this.title, this.imageUrl, this.description, this.price]
//     );
//   }

//   static deleteById(id) {}

//   static fetchAll() {
//     return db.execute("SELECT * FROM PRODUCTS");
//   }

//   static findById(id) {
//     return db.execute("SELECT * FROM PRODUCTS WHERE products.id = ?", [id]);
//   }

//   //file code
//   // save() {
//   //   getProductsFromFile((products) => {
//   //     if (this.id) {
//   //       const existingProductIndex = products.findIndex(
//   //         (p) => p.id === this.id
//   //       );
//   //       const updatedProducts = [...products];
//   //       updatedProducts[existingProductIndex] = this;
//   //       fs.writeFile(p, JSON.stringify(updatedProducts), (err) => {
//   //         console.log(err);
//   //       });
//   //     } else {
//   //       this.id = uuid.v4();
//   //       products.push(this);
//   //       fs.writeFile(p, JSON.stringify(products), (err) => {
//   //         console.log(err);
//   //       });
//   //     }
//   //   });
//   // }

//   // static fetchAll(cb) {
//   //   getProductsFromFile(cb);
//   // }

//   // static getProduct(id, cb) {
//   //   getProductsFromFile((products) => {
//   //     const product = products.find((p) => p.id === id);
//   //     cb(product);
//   //   });
//   // }

//   // static deleteProduct(id, cb) {
//   //   getProductsFromFile((products) => {
//   //     const updatedProducts = products.filter((p) => p.id !== id);
//   //     fs.writeFile(p, JSON.stringify(updatedProducts), (err) => {
//   //       console.log(err);
//   //     });
//   //     cb(updatedProducts);
//   //   });
//   // }
// };

const Sequelize = require("sequelize");
const sequelize = require("../util/database");

const Product = sequelize.define("product", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  title: Sequelize.STRING,
  price: { type: Sequelize.DOUBLE, allowNull: false },
  imageUrl: { type: Sequelize.STRING, allowNull: false },
  description: { type: Sequelize.STRING, allowNull: false },
});

module.exports = Product;
