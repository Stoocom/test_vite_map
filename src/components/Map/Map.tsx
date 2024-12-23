// import React from "react";
import { DomEvent, DomEventHandlerObject } from "@yandex/ymaps3-types";
import { YMapLocation } from "@yandex/ymaps3-types/imperative/YMap";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  YMap,
  YMapComponentsProvider,
  YMapDefaultSchemeLayer,
  YMapDefaultFeaturesLayer,
  //   YMapListener,
  //   YMapFeature,
  //   YMapCollection,
  YMapControls,
  YMapGeolocationControl,
  YMapZoomControl,
  //   YMapHint,
  // YMapDefaultMarker,
  YMapMarker,
  YMapListener,
  //   YMapContainer,
  //   YMapControlButton,
  //   YMapHintContext,
  //   YMapMarker,
  //   YMapClusterer,
} from "ymap3-components";
import {
  getMarkers,
  openAddMarkerForm,
} from "../../services/store/slices/markersSlice";
// import { MdAddLocationAlt } from "react-icons/md";
// import { SlLocationPin } from "react-icons/sl";
import { MdLocationOn } from "react-icons/md";
// import { LuSquareDashedMousePointer } from "react-icons/lu";
import { BsFeather } from "react-icons/bs";
import { MdOutlinePhoto } from "react-icons/md";
import "./Map.css";

// import { features } from "./helpers";

function Map() {
  const { isOpenAddMarker, currentLocation } = useSelector(getMarkers);
  const [addLocation, setAddLocation] = useState<YMapLocation>(currentLocation);
  const inputRef = useRef<HTMLInputElement>(null);

  console.log("currentLocation", currentLocation);
  console.log("addLocation", addLocation);

  const dispatch = useDispatch();
  //   const [isOpenAddMarker, setIsOpenAddMarker] = useState<boolean>(false);
  //   const [defaultCoordinates, setDefaultCoordinates] = useState<LngLat>([
  //     37.95, 55.65,
  //   ]);
  const updateHandler = ({ location, mapInAction }: any) => {
    console.log("location", location);
    console.log("mapInAction", mapInAction);
    console.log("mapInAction", mapInAction);
    setAddLocation({
      center: location.center,
      zoom: location.zoom,
    });
    // setDefaultCoordinates();
  };

  function handleButtonClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    console.log("handleButtonClick");
    if (!inputRef || !inputRef.current) return;

    inputRef.current.click();
  }

  function handleFileUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const files = e.target.files;
    console.log("handleFileUpload");
    if (!files) return;

    const file = files[0];

    // use the file
    console.log(file.name);
  }

  return (
    <div className="container">
      <YMapComponentsProvider
        apiKey={"c8214d76-a83c-48a0-ac30-18f3a3f2ccb0"}
        lang={"ru_RU"}
      >
        <YMap
          location={addLocation}
          behaviors={["drag", "pinchZoom", "mouseTilt"]}
        >
          <YMapDefaultSchemeLayer />
          <YMapDefaultFeaturesLayer />
          {isOpenAddMarker && (
            <YMapMarker coordinates={addLocation.center}>
              <div className="add_point">
                <div
                  className="marker"
                  onClick={(event) => {
                    event.stopPropagation();
                    dispatch(openAddMarkerForm(true));
                    // console.log("onClick");
                  }}
                >
                  <MdLocationOn size={70} color="#ff3333" title="New" />
                </div>
                <div
                  className="comment"
                  onClick={(event) => {
                    event.stopPropagation();
                    console.log("coords onClick");
                  }}
                >
                  <BsFeather size={15} color="white" title="New" />
                </div>
                {/* <div
                  className="photo"
                  // onClick={(event) => {
                  //   event.stopPropagation();
                  //   console.log("coords onClick");
                  // }}
                > */}
                <form className="photo">
                  <button className="upload" onClick={handleButtonClick}>
                    <MdOutlinePhoto size={15} color="white" title="New" />
                  </button>
                  <input
                    ref={inputRef}
                    type="file"
                    hidden
                    onChange={handleFileUpload}
                  />
                </form>
                {/* </div> */}
              </div>
            </YMapMarker>
            // title="Hello World!"
            // subtitle="kind and bright"
            // color="blue"
          )}
          <YMapControls position="bottom">
            <YMapZoomControl />
          </YMapControls>
          <YMapControls position="bottom left">
            <YMapGeolocationControl />
          </YMapControls>
          <YMapListener
            onUpdate={updateHandler}
            onClick={(object: DomEventHandlerObject, event: DomEvent) => {
              console.log("object", object);
              console.log("event", event);
            }}
          />
        </YMap>
      </YMapComponentsProvider>
    </div>
  );
}

export default Map;
