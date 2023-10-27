import "./Header.css";
import logo from '../../images/logo.png';

export default function Header() {
  return (
    <header id="header">
      <div>
        <img id="logo" src={logo} alt="logo"></img>
      </div>
      <ul id="menu-list">
        <li className="menu-items">Início</li>
        <li className="menu-items">Produtos</li>
        <li className="menu-items">Contato</li>
      </ul>
      <div id="menu-buttons">
        <button id="login">Entrar</button>
        <button id="signup">Registrar-se</button>
      </div>
    </header>
  );
}
