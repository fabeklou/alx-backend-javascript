import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const promises = Promise
    .allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)]);
  (await promises).map((res) => ({
    status: res.status,
    value: res.status === 'rejected' ? res.reason : res.value,
  }));
  return promises;
}
