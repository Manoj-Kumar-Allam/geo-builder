import { Map } from "ol";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import GeoJSON from "ol/format/GeoJSON";
import { useEffect } from "react";

import statesData from "../../data/us-states.json";
import Fill from "ol/style/Fill";
import Style from "ol/style/Style";
import Stroke from "ol/style/Stroke";

const layerKey = 'states';

const useStatesLayer = (map: Map) => {
  useEffect(() => {
    removeCurrentLayer(map)

    addLayer(map)
  }, [map]);
};

function addLayer(map: Map) {
  const vectorSource = new VectorSource({
    features: new GeoJSON().readFeatures(statesData, {
      dataProjection: "EPSG:4326",
      featureProjection: "EPSG:3857",
    }),
  });

  const vectorLayer = new VectorLayer({
    source: vectorSource,
    opacity: 0.8,
  });

  vectorLayer.set(layerKey, true);

  vectorLayer.setZIndex(0.1);

  map.addLayer(vectorLayer);

  vectorSource.forEachFeature((feature) => {
    feature.setStyle(getStyle());
  });
}

function getStyle() {
  const color = ["red", "green", "blue", "orange"];
  const randomColor = color[Math.floor(Math.random() * color.length)];

  return new Style({
    fill: new Fill({
      color: randomColor,
    }),
    stroke: new Stroke({
      color: "black",
      width: 2,
    }),
  });
}

function removeCurrentLayer(map: Map) {
  map.getLayers().forEach((layer) => {
    if (layer instanceof VectorLayer) {
      map.removeLayer(layer);
    }
  });
}

export default useStatesLayer;
