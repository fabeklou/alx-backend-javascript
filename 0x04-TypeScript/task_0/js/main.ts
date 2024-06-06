/** 0. Creating an interface for a student */

interface Student {
  age: number;
  firstName: string;
  lastName: string;
  location: string;
}

const studentMarc: Student = {
  age: 21,
  firstName: 'Marc',
  lastName: 'Ruby',
  location: 'Lomé',
};

const studentBernadette: Student = {
  age: 19,
  firstName: 'Bernadette',
  lastName: 'Cobol',
  location: 'Kara',
};

const studentsList = [studentMarc, studentBernadette];

/** Rendering a table */

const header = `
<tr>
  <th style='padding-right: 2rem'>First_Name</th>
  <th>Location</th>
</tr>
`;

const rows = studentsList.map((student) => {
  return `
  <tr>
    <td> ${student.firstName} </td>
    <td> ${student.location} </td>
  </tr>
  `;
});

const table = `
<table>
  <tbody>
    ${header}
    ${rows.join('')}
  </tbody>
</table>
`;

const mainTag = document.createElement('main');
mainTag.id = 'main';

document.body.prepend(mainTag);
document.getElementById('main').innerHTML = table;
