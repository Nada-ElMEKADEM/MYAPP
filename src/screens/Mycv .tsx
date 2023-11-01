
import { Footer } from '../components/Footer';
import { Media } from '../components/Media';
import { Interets } from '../components/Interets';
import { Langues } from '../components/Langue';
import { Atouts } from '../components/Atout';
import { Stages } from '../components/Stages';
import { Diplome } from '../components/Diplome';
import { Formation } from '../components/Formation';
import { Header } from '../components/Header';



export const Mycv =() =>{

    return( <div className='container bg-gray-100' >
    <Header/>
    <Formation/>
    <Diplome/>
    <Stages/>
    <Atouts/>
    <Langues/>
    <Interets/>
    <Media/>
    <Footer/>

    </div>

  );

}