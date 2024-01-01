import Navbar from './Navbar';
import Home from './home';
import Newhome from './newhome';
import Create from './create';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import BlogDetails from './BlogDetails';

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
          <Route path='/blogs/:id' element={<BlogDetails/>} />
        </Routes> 
        </div>
      </div>
    </Router>
  );
}

export default App;
