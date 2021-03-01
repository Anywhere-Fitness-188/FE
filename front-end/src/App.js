import logo from "./logo.svg";
import "./App.css";
import CreateEvent from "./Components/CreateEvent";
import DisplayEvents from "./Components/DisplayEvents";

function App() {
  return (
    <div className="App">
      <CreateEvent />
      <DisplayEvents />
    </div>
  );
}

export default App;
