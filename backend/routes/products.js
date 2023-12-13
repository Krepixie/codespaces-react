const { Router } = require("express");

const {
  getAllProducts,
  getProduct,
  postProduct,
  patchProduct,
  deleteProduct,
} = require("../controllers/products");

const router = Router();

router.get("/", getAllProducts);

router.get("/:id", getProduct);

router.post("/", postProduct);

router.patch("/:id", patchProduct);

router.delete("/:id", deleteProduct);

module.exports = router;
