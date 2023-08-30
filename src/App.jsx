import "./App.css";
import { Dropdown, Graphs } from "./components";
function Header() {
  return (
    <div className="header">
      <h1>GraphJobs</h1>
    </div>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Dropdown />
      <Graphs />
    </div>
  );
}

export default App;
