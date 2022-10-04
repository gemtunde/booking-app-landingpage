import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/home/Home';
import List from './pages/list/List';
import Hotel from './pages/hotel/Hotel';

function App() {
  return (
   <BrowserRouter>
      <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/hotels' element={<List />} />
            <Route exact path='/hotel/:id' element={<Hotel />} />
      </Routes>
   </BrowserRouter>
  );
}

export default App;
