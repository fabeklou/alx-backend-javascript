export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  const frequency = weakMap.get(endpoint) || 0;
  weakMap.set(endpoint, frequency + 1);
  if (frequency >= 4) {
    throw new Error('Endpoint load is high');
  }
}
