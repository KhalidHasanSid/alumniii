import {Router} from 'express'
import { AlumniregisterController ,getAlumniDataController} from '../controllers/AlumniRegister.controller.js';


const router= Router();

router.route('/register').post(AlumniregisterController)
router.route("/getdata").get(getAlumniDataController)

export default router;
