import instagram from '../../assets/Instagram Circle.svg';
import whatsapp from '../../assets/WhatsApp.svg';

export const Footer = () => {
  return (
    <>
      <div id='footer'>
        <div id='banner'></div>
        <h1 id='titulo-footer'>Redes Sociais</h1>
        <div id='social-network'>
          <a href='http://' target='_blank' rel='noopener noreferrer'>
            <img src={instagram} alt='' />
          </a>
          <a href='http://' target='_blank' rel='noopener noreferrer'>
            <img src={whatsapp} alt='' />
          </a>
        </div>
      </div>
    </>
  );
};
