import { fetchItemsByPlace, fetchAddressByItem } from '../Model/HanoiModel';

export async function getItems(place, setItems) {
  try {
    const items = await fetchItemsByPlace(place);
    setItems(items);
  } catch (error) {
    console.error(error);
  }
}

export async function getAddress(item, setAddress, setMap) {
  try {
    const data = await fetchAddressByItem(item);
    setAddress(data.address);
    setMap(data.map);
  } catch (error) {
    console.error(error);
  }
}