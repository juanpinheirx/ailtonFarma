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
          <a href='http://ailtonfarma.vercel.app' rel='noopener noreferrer'>
            <div id='buttons2'>
              <button type='button' className='btn btn-light' name='Link'>
                INÍCIO
              </button>
            </div>
          </a>
          <div id='buttons2'>
            <a
              href='https://api.whatsapp.com/send/?phone=5582987357475&text&type=phone_number&app_absent=0'
              target='_blank'
              rel='noopener noreferrer'
            >
              <button type='button' className='btn btn-light' name='Link'>
                COMPRAR
              </button>
            </a>
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
