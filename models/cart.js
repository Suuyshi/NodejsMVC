// const fs = require("fs");
// const path = require("path");
// const rootDir = require("../util/path");
// const p = path.join(rootDir, "data", "cart.json");

// module.exports = class Cart {
//   static addProduct(id, productPrice) {
//     //fetch the previous cart
//     fs.readFile(p, (err, fileContent) => {
//       let cart = { products: [], totalPrice: 0 };
//       if (!err) {
//         cart = JSON.parse(fileContent);
//       }
//       //analyze the cart => find existing product
//       const existingProductIndex = cart.products.findIndex(
//         (prod) => prod.id === id
//       );
//       const existingProduct = cart.products[existingProductIndex];
//       let updatedProduct;
//       // add new product/increase quantity
//       if (existingProduct) {
//         updatedProduct = { ...existingProduct };
//         updatedProduct.qty = updatedProduct.qty + 1;
//         cart.products = [...cart.products];
//         cart.products[existingProductIndex] = updatedProduct;
//       } else {
//         updatedProduct = { id: id, qty: 1 };
//         cart.products = [...cart.products, updatedProduct];
//       }
//       cart.totalPrice = cart.totalPrice + +productPrice;
//       fs.writeFile(p, JSON.stringify(cart), (err) => {
//         console.log(err);
//       });
//     });
//   }

//   static deleteProduct(id, productPrice) {
//     fs.readFile(p, (err, fileContent) => {
//       if (err) {
//         return;
//       }
//       const updatedCart = { ...JSON.parse(fileContent) };
//       const product = updatedCart.products.find((prod) => prod.id === id);
//       if (!product) {
//         return;
//       }
//       const productQty = product.qty;
//       updatedCart.products = updatedCart.products.filter(
//         (prod) => prod.id !== id
//       );
//       updatedCart.totalPrice =
//         updatedCart.totalPrice - productPrice * productQty;

//       fs.writeFile(p, JSON.stringify(updatedCart), (err) => {
//         console.log(err);
//       });
//     });
//   }

//   static getProducts(cb) {
//     fs.readFile(p, (err, fileContent) => {
//       const cart = JSON.parse(fileContent);
//       if (err) {
//         cb(null);
//       } else {
//         cb(cart);
//       }
//     });
//   }

//   static getCart(cb) {
//     fs.readFile(p, (err, fileContent) => {
//       const cart = JSON.parse(fileContent);
//       if (err) {
//         cb(null);
//       } else {
//         cb(cart);
//       }
//     });
//   }
// };

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

const Cart = sequelize.define("cart", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
});

module.exports = Cart;
