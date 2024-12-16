import "./App.css";
import Map from "./components/Map";

function App() {
  return (
    <>
      <div
        style={{
          position: "absolute",
          top: 50,
          right: 50,
          width: 60,
          height: 60,
          background: "green",
          zIndex: 2,
          borderRadius: 50,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      </div>
      <Map />
    </>
  );
}

export default App;
