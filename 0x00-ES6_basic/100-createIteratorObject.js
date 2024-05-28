export default function createIteratorObject(report) {
  let arr = [];
  for (const department of Object.values(report.allEmployees)) {
    arr = arr.concat(department);
  }
  return arr;
}
