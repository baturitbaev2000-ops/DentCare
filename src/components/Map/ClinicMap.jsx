import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import L from 'leaflet';
import { Button } from 'react-bootstrap';
import 'leaflet/dist/leaflet.css';
import './ClinicMap.css';

// Fix leaflet icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
});

const clinicPos = [43.2370, 76.9127]; // Almaty, Abay
const busStop = [43.2355, 76.9085];
const parking = [43.2382, 76.9150];

const route = [busStop, [43.2360, 76.9100], [43.2365, 76.9120], clinicPos];

const openGoogleMaps = () => {
  window.open(`https://www.google.com/maps/dir/?api=1&destination=${clinicPos[0]},${clinicPos[1]}`, '_blank');
};

export default function ClinicMap() {
  return (
    <div className="map-section">
      <MapContainer center={clinicPos} zoom={16} style={{ height: '400px', borderRadius: '12px' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://openstreetmap.org">OpenStreetMap</a>'
        />
        <Marker position={clinicPos}>
          <Popup>
            <strong>DentCare</strong><br />
            г. Алматы, ул. Абая, 50<br />
            📞 +7 (700) 123-45-67<br />
            🕐 Пн–Пт 9:00–20:00
          </Popup>
        </Marker>
        <Marker position={busStop}>
          <Popup>🚌 Остановка «Абая»</Popup>
        </Marker>
        <Marker position={parking}>
          <Popup>🅿️ Парковка</Popup>
        </Marker>
        <Polyline positions={route} color="#1A6FAF" weight={4} dashArray="8 4" />
      </MapContainer>
      <div className="map-action">
        <Button variant="primary" onClick={openGoogleMaps}>
          🗺️ Проложить маршрут в Google Maps
        </Button>
      </div>
    </div>
  );
}
