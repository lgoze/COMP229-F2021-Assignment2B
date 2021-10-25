//authentication for 'passport'
import passport from "passport";
import passportLocal, { IVerifyOptions } from 'passport-local';
import UserModel from '../models/user';

import { Request, Response } from 'express';

const LocalStrategy = passportLocal.Strategy;

//Custom object - defining username as Login through passport
const strategyOptions: any = {
    usernameField: "username",
    passwordField: "password",
    passReqToCallback: true
}

//Asynchronous function that receives
//Visit passportjs.org docs - JS based not TS
const loginFunction: any = async (
    req: Request,
    username: string,
    password: string,
    //'?:' may not find user, will return 'void'
    done: (error: any, user?: any, option?: IVerifyOptions) => void) => {

    //'UserModel' from mongoose calling to find user
    const user: any = await UserModel.findOne({ username });

    //Validation - if no user returns 'done' callback from 'loginFunction'
    if (!user) {
        return done(null, false, { message: "User not found!" })
    }

    //finds user but password invalid
    if (!(await user.isValidPassword)) {
        return done(null, false, { message: "Password is incorrect!" });
    }

    //User exists none above true
    console.log("User successfully authenticated!");
    return done(null, user);
}

//Login and Register
const signupFunction = async (
    req: Request,
    username: string,
    password: string,
    done: (error: any, user?: any, option?: IVerifyOptions) => void) => {
        //Saving by gathering from 'Request'
    try {
        //deconstructing
        const { username, password, email, FirstName, LastName } = req.body;
        console.log(req.body);

        //if any does not exist... returns error
        if (!username || !password || !email || !FirstName || !LastName) {
            console.log("Invalid body fields");
            return done(null, false);
        }

        //'query' to check, '$or' using mongoose
        const query = {
            $or: [{ username: username }, { email: email }]
        }

        console.log(query);

        //if registering user and information already exists
        const user = await UserModel.findOne(query);

        if (user) {
            console.log("user already exists");
            console.log(user);
            return done(null, false);
            //if user does not exist
        } else {
            const userData = {
                username,
                password,
                email,
                displayName: FirstName + " " + LastName
            }

            //creates new user by using 'UserData'
            const newUser = new UserModel(userData);
            await newUser.save();

            return done(null, newUser);
        }
    } catch (error) {
        //if any error
        done(error);
    }
}

//attaching 'login' and 'signup' methods to passport
passport.use('login', new LocalStrategy(strategyOptions, loginFunction));
passport.use('signup', new LocalStrategy(strategyOptions, signupFunction));

//creating and export method if they're logged in or logged out
//will show contact list if logged in, hidden if logged out
export const isLoggedIn = (req: Request, res: Response, done: (error: any, user?: any, options?: IVerifyOptions) => void) => {
    //user not found returns error
    if (!req.user) {
        return res.status(401).json({ msg: "Unauthorized User" });
    }

    //request user exists
    done(null, req.user);
}

interface User {
    _id?: String;
}

//serialize - convert obj to storage(in bytes) to memory
//passport saving user info on session and request
//Only serialize user
passport.serializeUser((user: User, done) => {
    done(null, user._id);
});

//deserialize each time checked
//find 'userId' through 'user'
passport.deserializeUser((userId, done) => {
    UserModel.findById(userId, function (err: any, user: any) {
        //returns error if user not found, or the user if found 
        done(err, user);
    })
});

export default passport;

