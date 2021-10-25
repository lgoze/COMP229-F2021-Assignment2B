import mongoose from 'mongoose';
import { Schema } from 'mongoose';
import bcrypt from 'bcrypt';

const UserSchema = new Schema({
    email: String,
    username: String,
    password: String,
    displayName: String
}, {
    collection: "users"
});

//'this' refers to UserSchema caller which is scrambled '10' times
UserSchema.pre('save', async function (next) {
    const hash = await bcrypt.hash(this.password, 10);
    //replacing password with new hash
    this.password = hash;
    next();
});

UserSchema.methods.isValidPassword = async function (password) {
    const compare = await bcrypt.compare(password, this.password);
    return compare;
};

declare global {
    export type UserDocument = mongoose.Document & {
        _id: String,
        email: String,
        username: String,
        password: String,
        displayName: String
    }
};

const Model = mongoose.model('User', UserSchema);
export default Model;