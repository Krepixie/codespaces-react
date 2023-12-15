import { useState } from "react";
import ProductCard from "../ProductCard/ProductCard.js";

export default function Search() {
  const [filteredProducts, setFilteredProducts] = useState([]);

  return (
    <div>
      <input placeholder="O que seu pet precisa?"></input>
      {filteredProducts.map((product) => (
        <ProductCard
          name={product.name}
          description={product.description}
          price={product.price}
          image={product.image}
        />
      ))}
    </div>
  );
}
