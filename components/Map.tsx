import { useRef, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import { LatLngTuple } from "leaflet";

export default function Map() {
    const mapRef = useRef(null);
    const [position, setPosition] = useState<LatLngTuple>([21.028511, 105.804817])

    return (
        <MapContainer
            center={position}
            zoom={13}
            scrollWheelZoom={false}
            ref={mapRef}
            style={{height: "100vh"}}
            className="relative z-0">
        
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
    
            <Marker position={position}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    )
}