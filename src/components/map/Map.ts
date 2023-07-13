import { Map, View } from "ol";
import { fromLonLat } from "ol/proj";
import OSM from "ol/source/OSM";
import { defaults as defaultControls } from "ol/control";
import "ol/ol.css";

import styles from "./Map.module.css";
import TileLayer from "ol/layer/Tile";

let map: Map | undefined;

export function createMap(): Map {
  map = new Map({
    layers: [
      new TileLayer({
        source: new OSM(),
      }),
    ],
    view: new View({
      enableRotation: false,
      multiWorld: false,
      constrainResolution: true,
      center: fromLonLat([-96, 37.8]),
      zoom: 4,
    }),
    controls: defaultControls({
      zoom: true,
      zoomOptions: {
        className: styles.customZoom,
      },
      attribution: true,
      attributionOptions: {
        collapsible: false,
      },
    }),
  });

  return map;
}

export function setMap(m: Map) {
  map = m;
}
export function getMap(): Map {
  if (!map) throw Error("Map is not yet initialized");
  return map;
}
