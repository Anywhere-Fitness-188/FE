import Login from "./Login.js";
import Register from "./Register.js";
import "./App.css";
import CreateEvent from "./Components/CreateEvent";
import DisplayEvents from "./Components/DisplayEvents";

function App() {
  return (
    <div className="App">
      <Register />
      <Login />
      <CreateEvent />
      <DisplayEvents />
    </div>
  );
}

export default App;
