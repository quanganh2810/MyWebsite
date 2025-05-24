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
        <p>Note: The backend is being hosted on Render which needs to be activated upon request. Please allow for a 30s wait after selection.</p>
        <p>Bug fixing: If the information is still not loaded after a while, most likely the Render server expires since I am using the free tier. Drop me an email to let me know!</p>
        <p>Updates: If you have any good spot for food in any country, drop me an email and Ill add it in!</p>
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
