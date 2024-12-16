import React from "react";
import {
  YMap,
  YMapComponentsProvider,
  YMapDefaultSchemeLayer,
  YMapDefaultFeaturesLayer,
  //   YMapListener,
  //   YMapFeature,
  //   YMapCollection,
  //   YMapControls,
  //   YMapGeolocationControl,
  //   YMapZoomControl,
  //   YMapHint,
  YMapDefaultMarker,
  //   YMapContainer,
  //   YMapControlButton,
  //   YMapHintContext,
  //   YMapMarker,
  //   YMapClusterer,
} from "ymap3-components";
// import { features } from "./helpers";

function Map() {
  return (
    <YMapComponentsProvider apiKey={"c8214d76-a83c-48a0-ac30-18f3a3f2ccb0"}>
      <YMap location={{ center: [37.95, 55.65], zoom: 10 }}>
        <YMapDefaultSchemeLayer />
        <YMapDefaultFeaturesLayer />
        <YMapDefaultMarker coordinates={[37.95, 55.65]} />
      </YMap>
    </YMapComponentsProvider>
  );
}

export default Map;
