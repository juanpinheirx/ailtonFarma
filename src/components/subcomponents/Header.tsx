import './Header.css';
import logo from '../../assets/LOGO.svg'; // Import the logo using ES6 import syntax
import { Button } from '../utils/Button';

export const Header = () => {
  return (
    <>
      <div id='header'>
        <div id='banner'>
          <img src={logo} alt='bandeira-do-brasil' id='bandeira' />
        </div>
        <h1 id='titulo'>FARMÁCIA AILTON FARMA</h1>
        <div id='button'>
          <Button />
          <Button />
          <Button />
        </div>
      </div>
    </>
  );
};
