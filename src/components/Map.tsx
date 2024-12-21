// import React from "react";
import { DomEvent, DomEventHandlerObject } from "@yandex/ymaps3-types";
import { YMapLocation } from "@yandex/ymaps3-types/imperative/YMap";
import { useState } from "react";
import { useSelector } from "react-redux";
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
  YMapDefaultMarker,
  YMapListener,
  //   YMapContainer,
  //   YMapControlButton,
  //   YMapHintContext,
  //   YMapMarker,
  //   YMapClusterer,
} from "ymap3-components";
import { getIsOpenAddMarker } from "../services/store/slices/markersSlice";
// import { features } from "./helpers";

function Map() {
  const [addLocation, setAddLocation] = useState<YMapLocation>({
    center: [37.95, 55.65],
    zoom: 10,
  });

  const { isOpenAddMarker } = useSelector(getIsOpenAddMarker);
  console.log("isOpenAddMarker", isOpenAddMarker);
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
      <YMapComponentsProvider apiKey={"c8214d76-a83c-48a0-ac30-18f3a3f2ccb0"}>
        <YMap location={addLocation}>
          <YMapDefaultSchemeLayer />
          <YMapDefaultFeaturesLayer />
          {isOpenAddMarker && (
            <YMapDefaultMarker
              coordinates={addLocation.center}
              title="Hello World!"
              subtitle="kind and bright"
              color="blue"
            />
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
