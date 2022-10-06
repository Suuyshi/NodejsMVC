const path = require("path");
const express = require("express");

const router = express.Router();

const rootDir = require("../util/path");

const shopController = require("../controllers/shop");

router.get("/", shopController.getIndex);

//get gets exact match
router.get("/products", shopController.getProducts);

router.get("/cart", shopController.getCart);

router.get("/checkout", shopController.getCheckout);

router.get("/orders", shopController.getOrders);

module.exports = router;
