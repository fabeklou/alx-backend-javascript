/** 1. Let's build a Teacher interface */

interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
}

/** 2. Extending the Teacher class */

interface Directors extends Teacher {
  numberOfReports: number;
}

/** 3. Printing teachers */

interface printTeacherFunction {
  (lastName: string, firstName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
}

/** 4. Writing a class */

interface StudentClassInterface {
  firstName: string,
  lastName: string,
  workOnHomework: () => void,
  displayName: () => void,
}

interface StudentConstructorInterface {
  new(firstName: string, lastName: string): StudentClassInterface;
}

class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}
