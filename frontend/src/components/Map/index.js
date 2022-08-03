import {Feature, Map, View} from 'ol/index';
import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer';
import { OSM, Vector as VectorSource } from 'ol/source';
import './Map.css';
import { useEffect } from 'react';
import { Circle, Fill, Style } from 'ol/style';
import { Point } from 'ol/geom';
import { useGeographic } from 'ol/proj';

function SipMap({ lat, lng }) {
    useGeographic();

    useEffect(() => {

        if (lat && lng) {
            const place = [lng, lat];

            const point = new Point(place);

            const map = new Map({
                target: 'map',
                view: new View({
                    center: place,
                    zoom: 16
                }),
                layers: [
                    new TileLayer({
                        source: new OSM()
                    }),
                    new VectorLayer({
                        source: new VectorSource({
                            features: [new Feature(point)],
                        }),
                        style: new Style({
                            image: new Circle({
                                radius: 9,
                                fill: new Fill({ color: 'green' }),
                            }),
                        }),
                    }),
                ],
            })
        }


    }, [lat, lng])


    return (
        <>
            <h2>Map</h2>
            <div id="map" className="map"></div>
        </>

    )
}

export default SipMap;
