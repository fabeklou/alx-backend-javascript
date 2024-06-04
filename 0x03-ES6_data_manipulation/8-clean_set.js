export default function cleanSet(hashSet, prefixStr) {
  if (prefixStr === '' || hashSet.size === 0) return '';
  const postfixStrs = [];
  for (const str of hashSet) {
    if (str.startsWith(prefixStr)) {
      postfixStrs.push(str.slice(prefixStr.length));
    }
  }
  return postfixStrs.join('-');
}
