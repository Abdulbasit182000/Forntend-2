import Navbar from './Navbar';
import Home from './home';
import Newhome from './newhome';
import Create from './create';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
        {/* <Home /> */}
        <Routes>
          <Route path='/' element={<Newhome/>} />
          <Route path='/create' element={<Create/>} />
        </Routes> 
        </div>
      </div>
    </Router>
  );
}

export default App;
