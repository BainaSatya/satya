
import './App.css';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home';
import Training from './Pages/Training/Training';


import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element = {<Home/>}/>
          <Route path='/training' element = {<Training/>}/>
          <Route path='/contact' element = {<Contact/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
