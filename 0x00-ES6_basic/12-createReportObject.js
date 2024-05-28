export default function createReportObject(employeesList) {
  return {
    allEmployees: employeesList,
    getNumberOfDepartments(employees) {
      let count = 0;
      /* eslint-disable no-unused-vars */
      for (const dep of Object.keys(employees)) {
        count += 1;
      }
      /* eslint-enable no-unused-vars */
      return count;
    },
  };
}
