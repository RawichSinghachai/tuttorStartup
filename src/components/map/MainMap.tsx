import React, { useEffect } from 'react'
import BaseMap from './BaseMap'
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
let address: [number, number] = [14.07173633978989, 100.60302089871212]


export default function MainMap() {
    

    return (
        <>
            <MapContainer style={{ width: '100%', height: '100vh', position: 'fixed' }} center={address} zoom={13} scrollWheelZoom={true} >
                <Marker position={address}>
                    <Popup>
                        ที่นี้ ศกร
                    </Popup>
                </Marker>
                <BaseMap />
            </MapContainer>
        </>
    )
}

