import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken =
  "pk.eyJ1Ijoicm9sYW5kby1tdXJpbGxvYWd1aXJyZSIsImEiOiJjbHh4YTR6cDQyYWVjMm1wdHZraG5paGVrIn0.Y3vxm9aIAjJ5PEXz6tkacg";

export default function SubComponenteMap() {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);
  const markerCoordinates = [-82.942369, 8.747008];

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: markerCoordinates, // posición inicial [longitud, latitud]
      zoom: 15, // nivel de zoom inicial
    });

    // Guardar la referencia del mapa en el ref
    mapRef.current = map;

    map.addControl(new mapboxgl.NavigationControl(), "top-right");

    new mapboxgl.Marker().setLngLat(markerCoordinates).addTo(map);

    // Función para manejar el cambio de tamaño de la ventana
    const handleResize = () => {
      map.resize();
    };

    // Añadir el evento de cambio de tamaño de la ventana
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      map.remove();
    };
  }, []);

  return (
    <div
      ref={mapContainerRef}
      style={{
        width: "95%",
        height: "95%",
        display: "flex",
      }}
    />
  );
}
