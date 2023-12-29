import Navbar from './Navbar';
import Home from './home';
import Newhome from './newhome';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
      {/* <Home /> */}
      <Newhome/>
      </div>
    </div>
  );
}

export default App;
