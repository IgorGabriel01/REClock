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

const Mapa = () =>  {
  const [position, setPosition] = useState<Position | null>(null);

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyBdpvtKUZsRuhSOqXHgX64BthyKMOBNjo0" 
  });



  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude, longitude } = pos.coords;
          setPosition({ lat: latitude, lng: longitude });
        },
        (error) => {
          console.error('Error getting location:', error);
        },
        {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0
        }
      );
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  }, []);

  return (
    
      <div className="map-container">
        {isLoaded && position ? (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={position}
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