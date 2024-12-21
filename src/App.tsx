// import { useEffect } from "react";
import "./App.css";
import Map from "./components/Map";
import { useDispatch, useSelector } from "react-redux";
import {
  getIsOpenAddMarker,
  toggleOpenAddMarker,
} from "./services/store/slices/markersSlice";
import { MdOutlineAddLocationAlt } from "react-icons/md";
import { RiLoginCircleLine } from "react-icons/ri";
import { FaRegCircleUser } from "react-icons/fa6";
import ModalWrapper from "./components/ModalWrapper";
import Form from "./components/Form";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  getProfile,
  toggleOpenLoginForm,
} from "./services/store/slices/profileSlice";
import { useEffect } from "react";
import { sendFile } from "./services/yandexDisk/api";

// const info_url = "https://cloud-api.yandex.net/v1/disk/";
// const public_resources =
//   "https://cloud-api.yandex.net/v1/disk/resources/public";

function App() {
  const dispatch = useDispatch();
  const { isOpenAddMarker } = useSelector(getIsOpenAddMarker);
  const { isOpenLoginForm, profile } = useSelector(getProfile);
  console.log("profile", profile.login);
  useEffect(() => {
    console.log("useEffect");
    sendFile();
  }, []);
  return (
    <>
      {profile?.email ? (
        <div
          style={{
            position: "absolute",
            top: 30,
            right: 20,
            width: 60,
            height: 60,
            background: "#afe0b4",
            zIndex: 2,
            borderRadius: 50,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={() => dispatch(toggleOpenLoginForm())}
        >
          <FaRegCircleUser size={31} color="white" title="New" />
        </div>
      ) : (
        <div
          style={{
            position: "absolute",
            top: 30,
            right: 20,
            width: 60,
            height: 60,
            background: "#afe0b4",
            zIndex: 2,
            borderRadius: 50,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={() => dispatch(toggleOpenLoginForm())}
        >
          <RiLoginCircleLine size={36} color="white" title="New" />
        </div>
      )}
      <div
        style={{
          position: "absolute",
          top: 100,
          right: 20,
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
        <MdOutlineAddLocationAlt size={36} color="white" />
        {/* <svg
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
        </svg> */}
      </div>
      <Map />
      {isOpenLoginForm && (
        <ModalWrapper>
          <Form />
        </ModalWrapper>
      )}
      <ToastContainer
        position="bottom-left"
        autoClose={2000}
        hideProgressBar={true}
      />
    </>
  );
}

export default App;
