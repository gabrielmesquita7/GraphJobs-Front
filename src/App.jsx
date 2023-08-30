import "./App.css";
import { Dropdown } from "./components";
import { DougChart } from "./DougChart";
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
      <DougChart />
    </div>
  );
}

export default App;
