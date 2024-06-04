import { queryAPI, weakMap } from './100-weak';

let endpoint = { protocol: 'http', name: 'getUsers' };
weakMap.get(endpoint);

queryAPI(endpoint);
console.log(weakMap.get(endpoint));

queryAPI(endpoint);
console.log(weakMap.get(endpoint));

try {
  queryAPI(endpoint);
  queryAPI(endpoint);
  queryAPI(endpoint);
  queryAPI(endpoint);
} catch (err) {
  console.log('error');
}

endpoint = null;
endpoint = { protocol: 'http', name: 'getUsers' };

console.log(weakMap.get(endpoint));
queryAPI(endpoint);
console.log(weakMap.get(endpoint));
