import { Request, Response, NextFunction } from 'express'
import passport from 'passport';
import { UserDisplayName } from '../views/Utils';

//if no user, request login page
//'flash' library holds request
export async function DisplayLoginPage(req: Request, res: Response, next: NextFunction) {
    if (!req.user) {
        return res.render('index', { title: 'Login', page: 'auth/login', messages: req.flash('loginMessage'), displayName: UserDisplayName(req) })
    }

    //if user exists it redirects to contact page-- protected page
    return res.redirect('/contact/list');
}

//if user exists
export function ProcessLoginPage(req: Request, res: Response, next: NextFunction) {
    return res.redirect('/contact/list');
}

//displays register page if user does not exist
export function DisplayRegisterPage(req: Request, res: Response, next: NextFunction) {
    if (!req.user) {
        return res.render('index', { title: 'Register', page: 'auth/register', messages: req.flash('registerMessage'), displayName: UserDisplayName(req) });
    }
    return res.redirect('/contact/list');
}

//errors
export function ProcessRegisterPage(req: Request, res: Response, next: NextFunction) {
    passport.authenticate('signup', function (err, user, info) {
        //catches 'done' call back with 3 parameters in middleware
        if (err) {
            return next(err);
        }

        if (!user) {
            return res.render('index', { title: 'Register', page: 'auth/register', messages: req.flash('registerMessage', "User Already Exists"), displayName: UserDisplayName(req) })
        }

        //user exists
        return res.redirect('/auth/login');

        //executes above function
    })(req, res, next);
}

//logout function
export function ProcessLogout(req: Request, res: Response) {
    req.session.destroy((err) => {
        if (err) {
            return err;
        }

        res.redirect('/auth/login');
    })
}