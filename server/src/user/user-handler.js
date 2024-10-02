import { apiMethodUtils } from '../utils/index.js';
import { userService } from './index.js';
import bcrypt from 'bcryptjs';

const getAllUserHandler = async (req, res) => {
  const user = await userService.getAllUser();
  return apiMethodUtils.apiSuccess({
    req,
    res,
    data: user,
    message: 'Successfully fetched data'
  });
};

const createUserHandler = async (req, res) => {
  const { name, email, password } = req.body;

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const payload = { name, email, password: hashedPassword };

  try {
    const user = await userService.register(payload);

    return apiMethodUtils.apiSuccess({
      req,
      res,
      data: user,
      message: 'Successfully created user'
    });
  } catch (err) {
    console.log(err);
    return apiMethodUtils.apiFail({
      req,
      res,
      error: err,
      message: 'Something went wrong'
    });
  }
};

const loginHandler = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await userService.login({ email, password });

    return apiMethodUtils.apiSuccess({
      req,
      res,
      data: user,
      message: 'Successfully logged in'
    });
  } catch (err) {
    console.log(err);
    return apiMethodUtils.apiFail({
      req,
      res,
      error: err,
      message: 'Something went wrong'
    });
  }
};

export { getAllUserHandler, createUserHandler, loginHandler };
