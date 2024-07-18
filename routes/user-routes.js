// // // import { Router } from "express";
// // // import { getAllUsers } from "../controllers/user.controllers.js";
// // // const userRoutes = Router();
// // // userRoutes.get("/",getAllUsers)
// // // export default userRoutes;
// // import { Router } from "express";
// // import {getAllUsers,userSignup,userLogin } from "../controllers/user-controllers.js";
// // import {
// //   loginValidator,
// //   signupValidator,
// //   validate
// // } from "../utils/validators.js";
// // import { verifyToken } from "../utils/token-manager.js";
// // const userRoutes = Router();
// // userRoutes.get("/", getAllUsers);
// // userRoutes.post("/signup", validate(signupValidator), userSignup);
// // userRoutes.post("/login", validate(loginValidator), userLogin);
// // userRoutes.get("/auth-status",verifyToken, userLogin);
// // export default userRoutes;
// import { Router } from "express";
// import {
//   getAllUsers,
//   userLogin,
//   verifyUser,
//   userSignup,
// } from "../controllers/user-controllers.js";
// import {
//   loginValidator,
//   signupValidator,
//   validate,
// } from "../utils/validators.js";
// import { verifyToken } from "../utils/token-manager.js";
// const userRoutes = Router();
// userRoutes.get("/", getAllUsers);
// userRoutes.post("/signup", validate(signupValidator), userSignup);
// userRoutes.post("/login", validate(loginValidator), userLogin);
// userRoutes.get("/auth-status", verifyToken,verifyUser);
// export default userRoutes;
import { Router } from "express";
import { getAllUsers, userLogin, userLogout, userSignup, verifyUser, } from "../controllers/user-controllers.js";
import { loginValidator, signupValidator, validate, } from "../utils/validators.js";
import { verifyToken } from "../utils/token-manager.js";
const userRoutes = Router();
userRoutes.get("/", getAllUsers);
userRoutes.post("/signup", validate(signupValidator), userSignup);
userRoutes.post("/login", validate(loginValidator), userLogin);
userRoutes.get("/auth-status", verifyToken, verifyUser);
userRoutes.get("/logout", verifyToken, userLogout);
export default userRoutes;
//# sourceMappingURL=user-routes.js.map