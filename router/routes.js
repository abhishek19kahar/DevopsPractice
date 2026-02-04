import express from 'express'
import { Adduser } from "../controller/adduser.js";

const router = express.Router();

router.post('/adduser',Adduser);

export default router;