import React, { useRef, useState, useEffect } from 'react';

export default function Map({
  mapCenter,
  center,
  zoom,
}: {
  mapCenter: google.maps.LatLngLiteral,
  center: google.maps.LatLngLiteral,
  zoom: number,
}) {
  const coordsMap: google.maps.LatLngLiteral[] = [
    { lat: 40.698368338470225, lng: -73.98564910894787 },
    { lat: 40.69866554506028, lng: -73.9568281173706 },
    { lat: 40.70428236757431, lng: -73.9481162817999 },
    { lat: 40.71193901146775, lng: -73.94047737121582 },
    { lat: 40.7304783951045, lng: -73.95150661468506 },
    { lat: 40.73586254432281, lng: -73.95508495006308 },
    { lat: 40.72955373901099, lng: -73.95920482310996 },
  ];

  const ref = useRef();

  useEffect(() => {
    const map = new window.google.maps.Map(ref.current, {
      center: mapCenter,
      zoom,
    });

    const marker = new google.maps.Marker({
      position: center,
      map: map,
      title: "Sassy's Specialty Sandwiches",
    });

    const deliveryRadius = new google.maps.Polygon({
      paths: coordsMap,
      strokeColor: '#3ad42c',
      strokeOpacity: 0.8,
      strokeWeight: 3,
      fillColor: '#4f535c',
      fillOpacity: 0.35,
    });

    deliveryRadius.setMap(map);
  });

  return (
    <>
      <div ref={ref} id="map" className="mappy" />;
    </>
  );
}
