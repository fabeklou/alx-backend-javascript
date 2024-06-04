export default function updateUniqueItems(hashMap) {
  if (!(hashMap instanceof Map)) throw new Error('Cannot process');
  for (const [key, value] of hashMap) {
    /* eslint-disable-next-line no-param-reassign */
    if (value === 1) hashMap.set(key, 100);
  }
  return hashMap;
}
