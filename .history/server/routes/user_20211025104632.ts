import passport from '../middleware/index';
import { Router } from 'express';
import { DisplayLoginPage, DisplayRegisterPage, ProcessLoginPage, ProcessLogout, ProcessRegisterPage } from '../controllers/user';

const router = Router();

router.get('/login', DisplayLoginPage);
//post-- checks form that exists in login page
//calls 'authentication' method
router.post('/login', passport.authenticate('login'), ProcessLoginPage);
router.get('/register', DisplayRegisterPage);
//function already exists because already created to check errors and avoid increasing route traffic 
router.post('/register', ProcessRegisterPage);
router.get('/logout', ProcessLogout);

export default router;