import { useState, useEffect } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px' 
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
            <Marker position={position} />
          </GoogleMap>
        ) : (
          <div>Loading...</div>
        )}
      </div>
  );
}

export default Mapa;

/*<div className={styles.divMap}>
    <h1>Meus pontos</h1>
    <Mapa />
  </div> 
            .divMap {
    position: absolute;
    top: 10%;
    left: 20%;
    background-color: red;
    width: 80%;
  }*/