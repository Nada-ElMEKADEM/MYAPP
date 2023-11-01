import './App.css';
import { Mycv } from './screens/Mycv ';
import { Myform } from './screens/Myform';
import {Routes,Route,NavLink} from 'react-router-dom';


function App() {
  return (
    <div>
      <header className='mb-5'>
      <nav className='flex justify-end'>
        <NavLink  className='mr-3'style={({isActive}) => ({ fontWeight: isActive ? 'bold' : 'normal'})}
         to='/'>CV</NavLink><br></br>
        <NavLink  className='mr-3'style={({isActive}) => ({ fontWeight: isActive ? 'bold' : 'normal'})} 
        to='/myform'>Form</NavLink>

      </nav>
      </header>
      <Routes>
        <Route path='/' element={<Mycv/>} />
        <Route path='/myform' element={<Myform/>} />



      </Routes>

    </div>

  );
}

export default App;
