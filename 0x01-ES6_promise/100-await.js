import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const up = await uploadPhoto();
    const cu = await createUser();
    return { up, cu };
  } catch (err) {
    return { photo: null, user: null };
  }
}
