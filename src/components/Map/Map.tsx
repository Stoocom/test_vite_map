// import React from "react";
import {
  DomEvent,
  DomEventHandlerObject,
  // LngLat,
  // LngLatBounds,
} from "@yandex/ymaps3-types";
import { YMapLocation } from "@yandex/ymaps3-types/imperative/YMap";
import { useCallback, useRef, useState } from "react";
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
  YMapCustomClusterer,
  //   YMapContainer,
  //   YMapControlButton,
  //   YMapHintContext,
  //   YMapMarker,
  //   YMapClusterer,
} from "ymap3-components";
import {
  getMarkers,
  openAddCommentForm,
} from "../../services/store/slices/markersSlice";
// import { MdAddLocationAlt } from "react-icons/md";
// import { SlLocationPin } from "react-icons/sl";
import { MdLocationOn } from "react-icons/md";
// import { LuSquareDashedMousePointer } from "react-icons/lu";
import { BsFeather } from "react-icons/bs";
import { MdOutlinePhoto } from "react-icons/md";
import { IoCheckmarkOutline } from "react-icons/io5";
import "./Map.css";
import { UploadService } from "../../services/uploadService/UploadService";
import { toast } from "react-toastify";
import { getProfile } from "../../services/store/slices/profileSlice";
import { points } from "./helper";

// import { UploadService } from "../../services/uploadService/UploadService";

// import { features } from "./helpers";

function Map() {
  const { isOpenAddMarker, markerComment, marketRating } =
    useSelector(getMarkers);
  const { profile } = useSelector(getProfile);
  const [addLocation, setAddLocation] = useState<YMapLocation>({
    center: [37.95, 55.65],
    zoom: 10,
  });
  const [choosedFile, setChoosedFile] = useState<File | undefined>(undefined);
  const inputRef = useRef<HTMLInputElement>(null);

  console.log("choosedFile ", choosedFile);
  console.log("addLocation ", addLocation);

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

  async function handleFileUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const files = e.target.files;
    console.log("handleFileUpload");
    if (!files) return;

    const file = files[0];

    // use the file
    console.log("file ", file);
    toast.success(file.name);
    setChoosedFile(file);

    // const data = await UploadService.upload(file);
    // console.log("data", data);
  }

  const marker = useCallback((feature: any) => {
    console.log("marker", feature);
    return (
      <YMapMarker coordinates={feature.geometry.coordinates}>
        <div className="add_point">
          <div
            className="marker"
            onClick={(event) => {
              event.stopPropagation();
              // console.log("onClick");
            }}
          >
            <MdLocationOn size={70} color="green" title="New" />
          </div>
        </div>
      </YMapMarker>
    );
  }, []);

  // const onClusterClick = useCallback(
  //   (features: any[]) => {
  //     const bounds = getBounds(
  //       features.map((feature: any) => feature.geometry.coordinates)
  //     );
  //     setAddLocation((prevLocation) => ({
  //       ...prevLocation,
  //       bounds,
  //       ...COMMON_LOCATION_PARAMS,
  //     }));
  //   },
  //   [location]
  // );

  const cluster = useCallback((coordinates: any, features: any[]) => {
    console.log("cluster", coordinates, features);
    return (
      <YMapMarker
        onClick={() => console.log(features)}
        coordinates={coordinates}
      >
        <div className="circle">
          <div className="circle-content">
            <span className="circle-text">{features.length}</span>
          </div>
        </div>
      </YMapMarker>
    );
  }, []);

  // const seed = (s: number) => () => {
  //   s = Math.sin(s) * 10000;
  //   return s - Math.floor(s);
  // };

  // const rnd = seed(10000);

  // const bounds: LngLatBounds = [
  //   [82.8291, 55.054],
  //   [82.8957, 55.1638],
  // ];

  // const getRandomPointCoordinates = (bounds: LngLatBounds): LngLat => [
  //   bounds[0][0] + (bounds[1][0] - bounds[0][0]) * rnd(),
  //   bounds[1][1] + (bounds[0][1] - bounds[1][1]) * rnd(),
  // ];

  // const getRandomPoints = (bounds: LngLatBounds): any[] => {
  //   return Array.from({ length: 40 }, (_, index) => ({
  //     type: "Feature",
  //     id: index.toString(),
  //     geometry: {
  //       type: "Point",
  //       coordinates: getRandomPointCoordinates(bounds),
  //     },
  //     properties: {
  //       name: "marker",
  //       description: "",
  //     },
  //   }));
  // };

  // const points = useMemo(() => getRandomPoints(bounds), []);

  // useEffect(() => {
  //   if (currentLocation.zoom !== addLocation.zoom) {
  //     setAddLocation({
  //       ...addLocation,
  //       zoom: currentLocation.zoom,
  //     });
  //   }
  // }, [currentLocation]);

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
          <YMapCustomClusterer
            marker={marker}
            cluster={cluster}
            gridSize={64}
            features={points}
          />
          <YMapDefaultSchemeLayer />
          <YMapDefaultFeaturesLayer />
          {isOpenAddMarker && (
            <YMapMarker coordinates={addLocation.center}>
              <div className="add_point">
                <div
                  className="marker"
                  onClick={(event) => {
                    event.stopPropagation();
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
                    dispatch(openAddCommentForm(true));
                  }}
                >
                  <BsFeather size={15} color="white" title="New" />
                </div>
                <div
                  className="send"
                  style={{ background: choosedFile ? "#60d66c" : "lightgray" }}
                  onClick={async (event) => {
                    event.stopPropagation();
                    console.log("sending");
                    if (!choosedFile) {
                      toast.error(
                        "Не заполнен комментарий или не приложен файл"
                      );
                      return;
                    }
                    try {
                      const result = await UploadService.upload(
                        choosedFile,
                        markerComment,
                        marketRating,
                        addLocation.center,
                        profile.id
                      );
                      console.log("result ", result.status);
                      if (result.status === 200 || result.status === 201) {
                        toast.success(
                          "Изображение успешно отправлено, идет проверка"
                        );
                      } else {
                        toast.error("Изображение не сохранено");
                      }
                    } catch (error) {
                      toast.error("Ошибка запроса");
                    }
                  }}
                >
                  <IoCheckmarkOutline size={25} color="white" title="New" />
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
