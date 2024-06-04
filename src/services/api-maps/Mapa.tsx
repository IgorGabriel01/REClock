import { useState, useEffect } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '85vh' 
};

interface Position {
  lat: number;
  lng: number;
}

interface MapaProps {
  onAddressChange: (address: string) => void;
}

const Mapa: React.FC<MapaProps> = ({ onAddressChange }) =>  {
  const [currentPosition, setCurrentPosition] = useState<Position | null>(null);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const currentPosition = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        setCurrentPosition(currentPosition);
        getAddressFromCoordinates(currentPosition.lat, currentPosition.lng);
      });
    } else {
      console.error("Geolocalização não é suportada pelo seu navegador.");
    }
  }, []);

  async function getAddressFromCoordinates(latitude: number, longitude: number) {
    try {
      const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyBdpvtKUZsRuhSOqXHgX64BthyKMOBNjo0`);
      const data = await response.json();
      if (data.status === 'OK') {
        const address = data.results[0].formatted_address;
        onAddressChange(address);
      } else {
        console.error('Erro ao obter o endereço:', data.error_message);
      }
    } catch (error) {
      console.error('Erro ao obter o endereço:', error);
    }
  }

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyBdpvtKUZsRuhSOqXHgX64BthyKMOBNjo0",
  });

  return (
    <div className="map-container">
      {isLoaded && currentPosition ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={currentPosition}
          zoom={17}
        >
        </GoogleMap>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default Mapa;

//AIzaSyBdpvtKUZsRuhSOqXHgX64BthyKMOBNjo0