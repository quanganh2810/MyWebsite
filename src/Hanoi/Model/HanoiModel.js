const BASE_URL = 'https://mywebsitebackend-cpsk.onrender.com';

export async function fetchItemsByPlace(place) {
  console.log(`📡 Fetching items for place: ${place}`);
  console.log(`➡️ GET ${BASE_URL}/api/destination/items-by-place/${place}`);
  const res = await fetch(`${BASE_URL}/api/destination/items-by-place/${place}`);
  console.log(`⬅️ Response status: ${res.status}`);
  if (!res.ok) throw new Error('Failed to fetch items');
  return res.json();
}

export async function fetchAddressByItem(item) {
  console.log(`📡 Fetching address for item: ${item}`);
  console.log(`➡️ GET ${BASE_URL}/api/destination/address-by-item/${encodeURIComponent(item)}`);
  const res = await fetch(`${BASE_URL}/api/destination/address-by-item/${encodeURIComponent(item)}`);
  if (!res.ok) throw new Error('Failed to fetch address');
  console.log(`⬅️ Response status: ${res.status}`);
  return res.json();
}
