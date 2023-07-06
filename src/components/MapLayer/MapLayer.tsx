import { useEffect, useRef, useState } from "react";

export const MapLayer = () => {
  const [selectedLayer, setSelectedLayer] = useState("");
  const mapRef = useRef(null);

  const handleLayerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedLayer(event.target.value as string);
  };

//   useEffect(() => {
//     const map = new Map({
//       layers: [
//         new TileLayer({
//           source: new OSM(),
//         }),
//       ],
//       view: new View({
//         enableRotation: false,
//         multiWorld: false,
//         constrainResolution: true,
//         center: fromLonLat([-96, 37.8]),
//         zoom: 4,
//       }),
//       controls: defaultControls({
//         zoom: true,
//         attribution: true,
//       }),
//     });

//     mapRef.current = map;
//     map.setTarget("map");

//     return () => {
//       map.setTarget(null);
//     };
//   }, []);
};
