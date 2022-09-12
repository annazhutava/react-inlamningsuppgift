import "./App.css";
import { Navbar } from "./components";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Navbar />
        <div className="heading-primary">
          <h1 className="header-title">Welcome</h1>
          <span className="header-quote">
            “That’s the thing about books. They let you travel without moving
            your feet.”
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
