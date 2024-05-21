import './SubBody.css';
import dipirona from '../../assets/Rectangle 4.svg';
import torsilax from '../../assets/Rectangle 5.svg';
import mioflex from '../../assets/Rectangle 6.svg';

export const SubBody = () => {
  return (
    <>
      <div id='subbody'>
        <div className='card' id='card'>
          <img src={dipirona} className='card-img-top' alt='...' />
          <div className='card-body'>
            <h5 className='card-title'>Dipirona</h5>
            <h5>R$4,99</h5>
            <p className='card-text'>
              Este é um medicamento à base de dipirona.
            </p>
            <a href='#' className='btn btn-primary'>
              Quero comprar
            </a>
          </div>
        </div>
        <div className='card' id='card'>
          <img src={torsilax} className='card-img-top' alt='...' />
          <div className='card-body'>
            <h5 className='card-title'>Torsilax</h5>
            <h5>R$1,68</h5>
            <p className='card-text'>
              Indicado para o tratamento de reumatismo.
            </p>
            <a href='#' className='btn btn-primary'>
              Quero comprar
            </a>
          </div>
        </div>
        <div className='card' id='card'>
          <img src={mioflex} className='card-img-top' alt='...' />
          <div className='card-body'>
            <h5 className='card-title'>Mioflex</h5>
            <h5>R$21,84</h5>
            <p className='card-text'>
              O seu medicamento de referência é o Tandrilax.
            </p>
            <a href='#' className='btn btn-primary'>
              Quero comprar
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
