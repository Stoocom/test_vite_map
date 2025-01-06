// import { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  changeZoomCurrentLocation,
  getMarkers,
  openAddCommentForm,
  toggleOpenAddMarker,
} from "./services/store/slices/markersSlice";
// import { MdOutlineAddLocationAlt } from "react-icons/md";
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
import { useEffect, useState } from "react";
// import { getLastPublicFiles } from "./services/yandexDisk/api";
import Map from "./components/Map/Map";
import { MdOutlineAddLocationAlt } from "react-icons/md";
import CommentForm from "./components/CommentForm";
import { MenuItem, Select } from "@mui/material";
import i18n from "./i18n";

// const info_url = "https://cloud-api.yandex.net/v1/disk/";
// const public_resources =
//   "https://cloud-api.yandex.net/v1/disk/resources/public";

function App() {
  const [lang, setLang] = useState("en");
  const dispatch = useDispatch();
  const { isOpenAddMarker, isOpenAddCommentForm } = useSelector(getMarkers);
  const { isOpenLoginForm, profile } = useSelector(getProfile);
  console.log("profile", profile.login);

  const changeLanguage = (lng: string) => {
    console.log("lng", lng);
    i18n.changeLanguage(lng);
    setLang(lng);
  };

  useEffect(() => {
    console.log("useEffect");
    // getLastPublicFiles();
  }, []);

  return (
    <>
      {profile?.email ? (
        <div
          style={{
            position: "absolute",
            top: 30,
            right: 30,
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
            right: 30,
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
          right: 30,
          width: 60,
          height: 60,
          background: isOpenAddMarker ? "#60d66c" : "#afe0b4",
          zIndex: 2,
          borderRadius: 50,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        onClick={() => {
          dispatch(toggleOpenAddMarker());
          dispatch(changeZoomCurrentLocation(19));
        }}
      >
        <MdOutlineAddLocationAlt size={36} color="white" />
      </div>
      <div
        style={{
          position: "absolute",
          top: 30,
          left: 30,
          width: 80,
          height: 40,
          zIndex: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* <MdOutlineAddLocationAlt size={36} color="white" /> */}
        <Select
          value={lang}
          variant="outlined"
          style={{ background: "white" }}
          onChange={(event) => changeLanguage(event.target.value)}
        >
          <MenuItem value={"en"}>En</MenuItem>
          <MenuItem value={"ru"}>Ru</MenuItem>
        </Select>
      </div>
      <Map />
      {isOpenLoginForm && (
        <ModalWrapper close={() => dispatch(toggleOpenLoginForm())}>
          <Form />
        </ModalWrapper>
      )}
      {isOpenAddCommentForm && (
        <ModalWrapper close={() => dispatch(openAddCommentForm(false))}>
          <CommentForm />
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
