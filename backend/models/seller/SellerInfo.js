const mongoose = require('mongoose');

// Define the schema for the main model
const sellerSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true // Remove leading and trailing whitespace
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true, // Convert email to lowercase
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password: {
        type: String,
        required: true,
        // minlength: 6, // Minimum length of the password
        // maxlength: 10, // Maximum length of the password
    },
    profileImage: {
        type: String,
        required:true,
    },
    phoneNumber: {
        type: String,
        match: [/^\d{10}$/, 'Please fill a valid phone number'] // Match 10-digit phone number format
    },
    address: {
        type: String
    },
    city: {
        type: String
    },
    pincode: {
        type: String,
        match: [/^\d{6}$/, 'Please fill a valid pincode'] // Match 6-digit pincode format
    },
    state: {
        type: String
    },
    shopName: {
        type: String
    },
    gstinNumber: {
        type: String,
        match: [/^\d{15}$/, 'Please fill a valid GSTIN number'] // Match 15-digit GSTIN format
    },
    govIdCard: {
        type: String
    }
});

// Create the model
const SellerInfo = mongoose.model('SellerInfo', sellerSchema);

module.exports = SellerInfo;
