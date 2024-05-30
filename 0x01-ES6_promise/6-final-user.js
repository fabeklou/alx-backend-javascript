import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const su = signUpUser(firstName, lastName);
  const up = uploadPhoto(fileName);
  const responses = await Promise.allSettled(su, up);

  return responses.map((res) => ({
    status: res.status,
    value: res.status === 'rejected' ? res.reason : res.value,
  }));
}
