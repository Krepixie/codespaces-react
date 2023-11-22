import styled from "styled-components";
import search from "../../images/search.svg";
import { products } from "./dados";
import { useState } from "react";
import ProductCard from "../ProductCard/ProductCard.js";

export default function Search() {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const SearchStyle = styled.div`
    position: relative;
    img {
      height: 1.3rem;
      position: absolute;
      left: 0.6rem;
      top: 0.6rem;
    }
  `;

  const InputStyle = styled.input`
    padding: 0.7rem 5rem 0.7rem 3rem;
  `;
  return (
    <SearchStyle>
      <InputStyle
        type="search"
        placeholder="O que seu pet precisa?"
        onChange={(event) => {
          const searched = event.target.value;
          const searchResult = products.filter((product) =>
            product.name.includes(searched)
          );
          setFilteredProducts(searchResult);
        }}
      ></InputStyle>
      <img src={search} alt="Pesquisar"></img>
      {filteredProducts.map((product) => (
        <ProductCard
          name={product.name}
          description={product.description}
          price={product.price}
        />
      ))}
    </SearchStyle>
  );
}
