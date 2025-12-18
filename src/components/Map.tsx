'use client';

import { APIProvider, Map as GoogleMap, AdvancedMarker, Pin } from '@vis.gl/react-google-maps';

const Map = () => {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const position = { lat: 5.6037, lng: -0.1870 }; // Accra, Ghana

  if (!apiKey) {
    return (
      <div className="w-full h-full bg-muted flex items-center justify-center rounded-lg">
        <p className="text-muted-foreground text-center p-4">
          Google Maps API Key not found. <br />
          Please add NEXT_PUBLIC_GOOGLE_MAPS_API_KEY to your environment variables.
        </p>
      </div>
    );
  }

  return (
    <APIProvider apiKey={apiKey}>
      <div className="w-full h-full">
        <GoogleMap
          defaultCenter={position}
          defaultZoom={15}
          mapId="tranvital-map"
          className="w-full h-full"
          gestureHandling={'greedy'}
          disableDefaultUI={false}
          streetViewControl={true}
          mapTypeControl={true}
          zoomControl={true}
        >
          <AdvancedMarker position={position}>
            <Pin 
                background={'hsl(var(--primary))'} 
                borderColor={'hsl(var(--accent))'} 
                glyphColor={'hsl(var(--primary-foreground))'} 
            />
          </AdvancedMarker>
        </GoogleMap>
      </div>
    </APIProvider>
  );
};

export default Map;
