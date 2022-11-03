import { Router } from 'express';

import userController from '../../controllers/user.controller';
import { tryCatchWrapperUser } from '../../helpers/trycatchWrapperUser';
import { validateUser } from '../../middlewares/validateUser';
import { isExistNewUser } from '../../middlewares/isExistNewUser';
import { isExistUser } from '../../middlewares/isExistUser';
import { login } from '../../middlewares/login';

const userRouter: Router = Router();

// @route   POST api/user
// @desc    Register user given their email and password, returns the token upon successful registration
// @access  Public
userRouter.post(
  '/register',
  validateUser,
  isExistNewUser,
  tryCatchWrapperUser(userController.register.bind(userController))
);

userRouter.post(
  '/login',
  validateUser,
  isExistUser,
  tryCatchWrapperUser(userController.login.bind(userController))
);

userRouter.post(
  '/change-password',
  validateUser,
  isExistUser,
  tryCatchWrapperUser(userController.changePassword.bind(userController))
);

userRouter.get(
  '/current',
  login,
  tryCatchWrapperUser(userController.getCurrent.bind(userController))
);

userRouter.get('/logout', login, tryCatchWrapperUser(userController.logout.bind(userController)));

export default userRouter;
