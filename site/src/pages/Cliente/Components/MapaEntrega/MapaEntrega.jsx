import React from "react";
import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet";

const MapaEntrega = ({ origem, destino }) => {
    const origemPos = [origem.latitude, origem.longitude];
    const destinoPos = [destino.latitude, destino.longitude];
    const caminho = [origemPos, destinoPos];

    console.log("origem ", origem);
    console.log("destino ", destino);

    return (
        <MapContainer
            center={origemPos}
            zoom={8}
            style={{ height: "300px", width: "100%" }}
            scrollWheelZoom={false}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={origemPos}>
                <Popup>Origem</Popup>
            </Marker>
            <Marker position={destinoPos}>
                <Popup>Destino</Popup>
            </Marker>
            <Polyline positions={caminho} color="purple" />
        </MapContainer>
    );
}

export default MapaEntrega;