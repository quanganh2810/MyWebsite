// Hanoi.js
import React, { useState } from 'react';
import { getItems, getAddress } from '../Controller/HanoiController';
import './Hanoi.css';

function Hanoi() {
  const [places] = useState(['Hanoi', 'Singapore']);
  const [selectedPlace, setSelectedPlace] = useState('');
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState('');
  const [address, setAddress] = useState('');
  const [map, setMap] = useState('');

  const handlePlaceChange = (e) => {
    const place = e.target.value;
    setSelectedPlace(place);
    setSelectedItem('');
    setAddress('');
    if (place) {
      getItems(place, setItems);
    }
  };

  const handleItemChange = (e) => {
    const item = e.target.value;
    setSelectedItem(item);
    if (item) {
      getAddress(item, setAddress, setMap);
    }
  };

  return (
    <div className="container">
      <header>
        <h1>🍜 Food Spotter: Hanoi & Singapore</h1>
        <p>Find delicious recommendations and see them on the map!</p>
      </header>

      <label>Select a place:</label>
      <select value={selectedPlace} onChange={handlePlaceChange}>
        <option value="">-- Select Place --</option>
        {places.map(place => (
          <option key={place} value={place}>{place}</option>
        ))}
      </select>

      {items.length > 0 && (
        <>
          <label>Select an item:</label>
          <select value={selectedItem} onChange={handleItemChange}>
            <option value="">-- Select Item --</option>
            {items.map(item => (
              <option key={item} value={item}>{item}</option>
            ))}
          </select>
        </>
      )}

      {address && (
        <>
          <div className="address">
            <h3>📍 Address:</h3>
            <p>{address}</p>
          </div>
          <iframe src={map} className="map" title="Map View"></iframe>
        </>
      )}
    </div>
  );
}

export default Hanoi;
