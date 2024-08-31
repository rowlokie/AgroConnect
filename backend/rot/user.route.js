import express from "express";
import { login,logout,register,updateProfile } from "../controllers.js/user.con.js";
import isauthenticate from "../middleware/isauth.js";


const router =express.Router();

router.route('/login').post(login);
router.route('/logout').post(logout);
router.route('/register').post(register);
router.route('/profile/update').post(isauthenticate,updateProfile);

export default router;