/** 10. Update task_4/js/main.ts */

/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/Java.ts" />
/// <reference path="./subjects/React.ts" />

export const cpp = new Subjects.Cpp();
export const java = new Subjects.Java();
export const react = new Subjects.React();

export const cTeacher: Subjects.Teacher = {
  firstName: 'Fabrice',
  lastName: 'Eklou',
  experienceTeachingC: 10,
}

// for CPP subject
console.log('C++');
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

// for JAVA subject
console.log('Java');
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

// for REACT subject
console.log('React');
react.setTeacher(cTeacher);
console.log(react.getRequirements());;
console.log(react.getAvailableTeacher());
