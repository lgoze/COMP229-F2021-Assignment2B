import mongoose from 'mongoose';

const Schema = mongoose.Schema;

//initialize schema with new object connected to mongoose
const ContactSchema = new Schema({
    contactName: String,
    contactNumber: String,
    emailAddress: String
}, {
    collection: "contacts"
});

//attaching model name "Contact" to schema
const Model = mongoose.model("Contact", ContactSchema);

export default Model;