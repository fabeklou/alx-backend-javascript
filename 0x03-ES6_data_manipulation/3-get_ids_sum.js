export default function getStudentIdsSum(listStudent) {
  return listStudent.reduce((acc, { id }) => id + acc, 0);
}
