import '../Body.css';
import logo from '../../assets/LOGO.svg'; // Import the logo using ES6 import syntax

export const Header = () => {
  return (
    <>
      <div id='header'>
        <div id='banner'>
          <img src={logo} alt='bandeira-do-brasil' id='bandeira' />
        </div>
        <h1 id='titulo'>FARMÁCIA AILTON FARMA</h1>
        <div id='button'>
          <div id='buttons2'>
            <button type='button' className='btn btn-light' name='Link'>
              INÍCIO
            </button>
          </div>
          <div id='buttons2'>
            <button type='button' className='btn btn-light' name='Link'>
              COMPRAR
            </button>
          </div>{' '}
          <div id='buttons2'>
            <button type='button' className='btn btn-light' name='Link'>
              SOBRE
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
