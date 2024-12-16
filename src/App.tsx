import "./App.css";
import Map from "./components/Map";

function App() {
  return (
    <>
      <div
        style={{
          position: "absolute",
          width: 100,
          height: 100,
          background: "green",
        }}
      ></div>
      <Map />
    </>
  );
}

export default App;
