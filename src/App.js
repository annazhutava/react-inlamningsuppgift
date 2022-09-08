import './App.css';
import {Link} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <div className='App-header'>
      <nav>
        <Link to="/">Home</Link> | {" "}
        <Link to="/second">#2</Link> | {" "}
        <Link to="/third">#3</Link>
      </nav>
      </div>
    </div>
  );
}

export default App;
