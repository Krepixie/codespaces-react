import Sidebar from "../Sidebar/Sidebar";
import ProductCard from "../ProductCard/ProductCard";
import Search from "../Search/Search";
import styled from "styled-components";
import { products } from "../Search/dados";


const HomeStyle = styled.section`
  display: flex;
  width: 100%;
  height: 100%;

  #main {
    background-color: var(--blue);
    width: 100%;
    padding: 10rem 5rem;
  }

  #dog {
    height: 30rem;
  }
`;

export default function Home() {
  return (
    <HomeStyle>
      <Sidebar>
        <Search />
      </Sidebar>

      <main id="main">
        <ul>
          {products.map((product) => (
            <ProductCard></ProductCard>
          ))}
        </ul>
      </main>
    </HomeStyle>
  );
}
