import Sidebar from "../Sidebar/Sidebar";
import Search from "../Search/Search";
import styled from "styled-components";
import ImageCarousel from "../ImageCarousel/ImageCarousel";
import Game from "../Game/Game";

const HomeStyle = styled.section`
  display: flex;
  width: 100%;
  height: 100%;

  #main {
    background-color: var(--blue);
    width: 100%;
    padding-bottom: 10rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  ul {
    list-style-type: none;
  }

`;

export default function Home() {
  return (
    <HomeStyle>
      <Sidebar></Sidebar>

      <main id="main">
        <ImageCarousel />

        <Game></Game>
      </main>
    </HomeStyle>
  );
}
