// models/destinationModel.js
export async function fetchItemsByPlace(place) {
  const res = await fetch(`http://localhost:5059/api/destination/items-by-place/${place}`);
  if (!res.ok) throw new Error('Failed to fetch items');
  return res.json();
}

export async function fetchAddressByItem(item) {
  const res = await fetch(`http://localhost:5059/api/destination/address-by-item/${encodeURIComponent(item)}`);
  if (!res.ok) throw new Error('Failed to fetch address');
  return res.json();
}
