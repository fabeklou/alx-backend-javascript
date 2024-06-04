export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const typedArrayView = new Int8Array(buffer);
  if (position < length) {
    typedArrayView[position] = value;
    return new DataView(buffer);
  }
  throw new Error('Position outside range');
}
