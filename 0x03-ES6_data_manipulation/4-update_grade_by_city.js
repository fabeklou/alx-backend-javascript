export default function updateStudentGradeByCity(listStudent, city, newGrades) {
  return listStudent.filter((student) => student.location === city)
    .map((student) => {
      const grades = newGrades.filter((std) => std.studentId === student.id);
      const grade = (grades.length === 1) ? grades[0].grade : 'N/A';
      return { ...student, grade };
    });
}
