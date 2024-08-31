import express from 'express';
import { createContract, getContract, getContractById} from '../controllers.js/Contract.con.js';
import isauthenticate from '../middleware/isauth.js';

const contractrouter =express.Router();

contractrouter.route('/create').post(createContract);
contractrouter.route('/get').get(getContract);
contractrouter.route('/get/:id').post(getContractById)


export default contractrouter;