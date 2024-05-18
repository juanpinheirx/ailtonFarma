import './Header.css';
import logo from '../../assets/LOGO.svg'; // Import the logo using ES6 import syntax

export const Header = () => {
  return (
    <>
      <div id='header'>
        <img src={logo} alt='bandeira-do-brasil' id='bandeira' />
        <h1 id='titulo'>FARMÁCIA AILTON FARMA</h1>
      </div>
    </>
  );
};
