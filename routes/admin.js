//routes accessible by the admin
const path = require("path");
const express = require("express");
const router = express.Router();

const adminController = require("../controllers/admin");

//GET request
router.get("/add-product", adminController.getAddProduct);

//POST request
router.post("/add-product", adminController.postAddProduct);
router.get("/edit-product/:productId", adminController.getEditProduct);


router.post("/delete-product", adminController.postDeleteProduct);

router.get("/products", adminController.getAdminProducts);

module.exports = router;
