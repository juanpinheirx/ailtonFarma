import { Footer } from "./subcomponents/Footer";
import { Header } from './subcomponents/Header';
import { SubBody } from './subcomponents/SubBody';

export const Body = () => {
  return (
    <div>
      <Header />
      <h1>
        <div className='titulo'>
          <h2>REMÉDIOS DISPONÍVEIS</h2>
        </div>
      </h1>
      <SubBody />
      <hr />
      <SubBody />
      <Footer />
    </div>
  );
};
