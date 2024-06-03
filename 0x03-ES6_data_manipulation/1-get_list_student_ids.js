export default function getListStudentIds(listStudent) {
  if (!Array.isArray(listStudent)) return [];
  return listStudent.map((student) => student.id);
}
