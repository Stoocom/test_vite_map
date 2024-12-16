// import { useEffect } from "react";
import "./App.css";
import Map from "./components/Map";
import { useDispatch, useSelector } from "react-redux";
import {
  getIsOpenAddMarker,
  toggleOpenAddMarker,
} from "./service/store/slices/markersSlice";

function App() {
  const dispatch = useDispatch();
  const { isOpenAddMarker } = useSelector(getIsOpenAddMarker);
  // useEffect(() => {
  //   console.log("useEffect");
  //   fetch("http://localhost:3010/api/auth/profile", {
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization:
  //         "Bearer " +
  //         "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzYsImxvZ2luIjoidXNlcjEiLCJpYXQiOjE3MzQxMjU0OTQsImV4cCI6MTczNTMzNTA5NH0.4stleGLtj4Wmb7Ai7YzhfFW59Hu38j7MEw0uNuPmbNo",
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((responseData) => {
  //       console.log(responseData);
  //       // toast("responseData");
  //     })
  //     .catch((error) => {
  //       console.log("error", error);
  //     });
  // }, []);
  return (
    <>
      <div
        style={{
          position: "absolute",
          top: 50,
          right: 50,
          width: 60,
          height: 60,
          background: isOpenAddMarker ? "#60d66c" : "#afe0b4",
          zIndex: 2,
          borderRadius: 50,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        onClick={() => dispatch(toggleOpenAddMarker())}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="white"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      </div>
      <Map />
    </>
  );
}

export default App;
