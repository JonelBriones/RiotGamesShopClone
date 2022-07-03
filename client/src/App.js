
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import NavbarComponent from './components/navbar/NavbarComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './views/Home';
import Apparel from './views/Apparel';
import Collectibles from './views/Collectibles';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavbarComponent/>
        <Routes>
          <Route element={<Home/>} path="/"/>
          <Route element={<Apparel/>} path="/category/:param"/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
