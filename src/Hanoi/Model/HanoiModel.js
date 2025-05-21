const BASE_URL = 'https://mywebsitebackend-cpsk.onrender.com';

export async function fetchItemsByPlace(place) {
  const res = await fetch(`${BASE_URL}/api/destination/items-by-place/${place}`);
  if (!res.ok) throw new Error('Failed to fetch items');
  return res.json();
}

export async function fetchAddressByItem(item) {
  const res = await fetch(`${BASE_URL}/api/destination/address-by-item/${encodeURIComponent(item)}`);
  if (!res.ok) throw new Error('Failed to fetch address');
  return res.json();
}
