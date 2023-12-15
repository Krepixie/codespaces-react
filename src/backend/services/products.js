const fs = require("fs");

const products = JSON.parse(fs.readFileSync("./database/products.json"));

function getEveryProduct() {
  return products;
}

function getProductById(id) {
  const filteredProduct = products.filter((product) => product.id === id)[0];
  return filteredProduct;
}

function addNewProduct(newProduct) {
  const updatedProductList = [...products, newProduct];

  fs.writeFileSync(
    "./database/products.json",
    JSON.stringify(updatedProductList)
  );
}

function editProduct(mods, id) {
  const editedProductId = products.findIndex((product) => product.id === id);

  const editedProduct = { ...products[editedProductId], ...mods };

  products[editedProductId] = editedProduct;

  fs.writeFileSync("./database/products.json", JSON.stringify(products));
}

function deleteProductById(id) {
  const currentProducts = products.filter((product) => product.id !== id);
  fs.writeFileSync("./database/products.json", JSON.stringify(currentProducts));
}

module.exports = {
  getEveryProduct,
  getProductById,
  addNewProduct,
  editProduct,
  deleteProductById,
};
