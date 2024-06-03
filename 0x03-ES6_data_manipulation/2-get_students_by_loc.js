export default function getStudentsByLocation(listStudent, city) {
  return listStudent.filter((student) => student.location === city);
}
