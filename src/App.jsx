import logo from "./logo.svg";
import "./App.scss";
import DisplayName from "./components/DisplayName";
import ConditionalComponent from "./components/ConditionalComponent";
import ListComponent from "./components/ListComponent";
import EventComponent from "./components/EventComponent";
import StateComponent from "./components/StateComponent";
import ObjectComponent from "./components/ObjectComponent";
import ColorComponent from "./components/FetchComponent";

function App() {
  return (
    <div className="App">
      {/* <DisplayName name={"hello"} />
      <ConditionalComponent value={null} /> */}
      {/* <ListComponent />
      <EventComponent /> */}
      <StateComponent />
      {/* <ColorComponent /> */}
      
    </div>
  );
}

export default App;
