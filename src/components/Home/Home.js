import dog from '../../images/dog.png';
import Sidebar from '../Sidebar/Sidebar';
import './Home.css'

export default function Home() {
  return (
    <section id="container">
      <Sidebar></Sidebar>
      <main id="main">
        <img id="dog" src={dog} alt="Cachorro"></img>
      </main>
    </section>
  );
}
