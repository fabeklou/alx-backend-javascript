export default function cleanSet(hashSet, prefixStr) {
  if (!prefixStr
    || !hashSet
    || !(hashSet instanceof Set)
    || typeof prefixStr !== 'string'
  ) {
    return '';
  }
  const postfixStrs = [];
  for (const str of hashSet) {
    if (typeof str === 'string' && str.startsWith(prefixStr)) {
      postfixStrs.push(str.slice(prefixStr.length));
    }
  }
  return postfixStrs.join('-');
}
