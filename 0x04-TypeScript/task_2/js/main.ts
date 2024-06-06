/** 5. Advanced types Part 1 */

interface DirectorInterface {
  workFromHome: () => string;
  getCoffeeBreak: () => string;
  workDirectorTasks: () => string;
}

interface TeacherInterface {
  workFromHome: () => string;
  getCoffeeBreak: () => string;
  workTeacherTasks: () => string;
}

class Director implements DirectorInterface {
  constructor() {

  }

  workFromHome(): string {
    return 'Working from home';
  }

  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }

  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

class Teacher implements TeacherInterface {
  constructor() {

  }

  workFromHome(): string {
    return 'Cannot work from home';
  }

  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }

  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

interface createEmployeeInterface {
  (salary: number | string): DirectorInterface | TeacherInterface;
}

const createEmployee: createEmployeeInterface = (salary) => {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  }
  return new Director();
}

/** 6. Creating functions specific to employees */

type Employee = DirectorInterface | TeacherInterface;

function isDirector(employee: Employee): boolean {
  return (employee as DirectorInterface).workDirectorTasks !== undefined;
}

function executeWork(employee: Employee): void {
  if (isDirector(employee)) {
    console.log((employee as DirectorInterface).workDirectorTasks())
  } else {
    console.log((employee as TeacherInterface).workTeacherTasks())
  }
}

/** 7. String literal types */

type Subjects = 'Math' | 'History';

function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  }
  return 'Teaching History';
}
