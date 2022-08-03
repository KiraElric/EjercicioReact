import logo from "./logo.svg";
import "./App.css";
import { AñoComponente } from "./components/AñoComponente";

function App() {
  const getYear = () => {
    return new Date().getFullYear();
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <AñoComponente actualYear={getYear} />
      </header>
    </div>
  );
}

export default App;
