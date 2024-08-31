import express from "express";
import isauthenticate from '../middleware/isauth.js'
import { getShop, getShopById, registerShop, updateShop} from "../controllers.js/Shop.con.js";


const shoprouter = express.Router();

shoprouter.route("/register").post( registerShop);
shoprouter.route("/get").get( getShop);
shoprouter.route("/get/:id").get(getShopById);
shoprouter.route("/update/:id").put( updateShop);

export default shoprouter;
