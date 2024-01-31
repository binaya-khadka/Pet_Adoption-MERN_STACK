import * as userRepository from './user-repository.js'
import bcrypt from 'bcryptjs'

export async function getAllUser() {
  return await userRepository.fetchAllUser({});
}

export async function register(payload) {
  return await userRepository.createUser(payload);
}

export async function login({ email, password }) {
  const user = await userRepository.fetchUserByEmail(email);

  if (!user) {
    throw { message: 'User not found' }
  }

  if (!bcrypt.compareSync(password, user.password)) {
    throw {
      message: "Invalid Credentials",
    }
  }

  return user;
}

// export async function register(name, email, password) {
//   const payload = { name, email, password }
//   return await userRepository.createUser(payload);
// }