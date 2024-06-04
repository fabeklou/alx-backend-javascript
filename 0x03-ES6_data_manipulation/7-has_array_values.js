export default function hasValuesFromArray(hashSet, dynamicArray) {
  for (const value of dynamicArray) {
    if (!hashSet.has(value)) return false;
  }
  return true;
}
