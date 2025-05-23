
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';

// Fix for default marker icon
const defaultIcon = new Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});

export default function Map() {
  // Coordinates for Bridgewater Dr, Argyle, TX 76226
  const position: [number, number] = [33.1157, -97.1777];

  return (
    <div className="h-[400px] w-full rounded-lg overflow-hidden shadow-lg">
      <MapContainer 
        center={position} 
        zoom={14} 
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position} icon={defaultIcon}>
          <Popup>
            Bridgewater Dr, Argyle, TX 76226
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
