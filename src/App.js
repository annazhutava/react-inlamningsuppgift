import './App.css';
import  {Navbar}  from "./components"

function App() {
  return (
 <div className="App">
      <div className='App-header'>
        <Navbar/>
        <div className='heading-primary'>
        <h1 className='header-title'>Welcome</h1>
        <span className='header-quote'>“Raise your words, not your voice. It is rain that grows flowers, not thunder.”</span>
        </div>
      </div>
    </div>
  );
}

export default App;
