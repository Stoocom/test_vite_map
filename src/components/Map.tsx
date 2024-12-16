// import React from "react";
import { DomEvent, DomEventHandlerObject, LngLat } from "@yandex/ymaps3-types";
import { useState } from "react";
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
// import { features } from "./helpers";

function Map() {
  const [addLocation, setAddLocation] = useState<LngLat>([37.95, 55.65]);
  const updateHandler = ({ location, mapInAction }: any) => {
    console.log("location", location);
    console.log("mapInAction", mapInAction);
    console.log("mapInAction", mapInAction);
    setAddLocation(location.center);
  };

  return (
    <div className="container">
      <YMapComponentsProvider apiKey={"c8214d76-a83c-48a0-ac30-18f3a3f2ccb0"}>
        <YMap location={{ center: addLocation, zoom: 10 }}>
          <YMapDefaultSchemeLayer />
          <YMapDefaultFeaturesLayer />
          <YMapDefaultMarker coordinates={addLocation} />
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
