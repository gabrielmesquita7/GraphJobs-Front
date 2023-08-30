import "./App.css";
import FilterSection from "./FilterSection";
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
      <FilterSection />
      <DougChart />
    </div>
  );
}

export default App;
