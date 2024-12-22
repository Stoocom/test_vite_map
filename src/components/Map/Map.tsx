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
import { Button, styled } from "@mui/material";

// import { features } from "./helpers";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

function Map() {
  const [addLocation, setAddLocation] = useState<YMapLocation>({
    center: [37.95, 55.65],
    zoom: 10,
  });
  const fileInputRef = useRef(null);
  const { isOpenAddMarker } = useSelector(getMarkers);
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

  return (
    <div className="container">
      <YMapComponentsProvider
        apiKey={"c8214d76-a83c-48a0-ac30-18f3a3f2ccb0"}
        lang={"ru_RU"}
      >
        <YMap location={addLocation}>
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
                <div
                  className="photo"
                  // onClick={(event) => {
                  //   event.stopPropagation();
                  //   console.log("coords onClick");
                  // }}
                >
                  <MdOutlinePhoto size={15} color="white" title="New" />
                  <Button
                    component="label"
                    role={undefined}
                    variant="contained"
                    tabIndex={-1}
                    startIcon={
                      <MdOutlinePhoto size={15} color="white" title="New" />
                    }
                  >
                    Upload files
                    <VisuallyHiddenInput
                      type="file"
                      onChange={(event) => console.log(event.target.files)}
                    />
                  </Button>
                </div>
                <input
                  onChange={() => console.log("click!")}
                  multiple={false}
                  ref={fileInputRef}
                  type="file"
                  hidden
                />
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
