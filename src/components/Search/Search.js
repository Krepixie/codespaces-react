import styled from "styled-components";
import search from "../../images/search.svg";
import { products } from "./dados";

const SearchStyle = styled.div`
    position: relative;
    img {
        height: 1.3rem;
        position: absolute;
        left: .6rem;
        top: .6rem;
    }
`

const InputStyle = styled.input`
  padding: 0.7rem 5rem 0.7rem 3rem;
`;

export default function Search() {
  return (
    <SearchStyle>
        <InputStyle type="search" placeholder="O que seu pet precisa?"></InputStyle>
        <img src={search} alt="Pesquisar"></img>
    </SearchStyle>
  );
}
