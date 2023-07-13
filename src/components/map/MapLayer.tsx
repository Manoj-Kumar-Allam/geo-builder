import { useEffect, useRef } from "react";
import { getMap } from "./Map";

import styles from './Map.module.css'
import useStatesLayer from "./useStatesLayer";

const MapLayer: React.FC = () => {
    
    const mapElement = useRef<HTMLDivElement | null>(null);
    
    const map = getMap();

    useStatesLayer(map)
    
    useEffect(() => {
        map.setTarget(mapElement.current!)
        
    }, [])

    return (
        
        <div ref={mapElement} className={styles.mapContainer} />
    );
}

export default MapLayer;