<<<<<<< HEAD
const User = require('../models/master/MasterInfo');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Controller function to handle user registration
exports.registerUser = async (req, res) => {
    try {
        const { firstname, lastname, username, email, password, profileImage} = req.body;
=======
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const MasterInfo = require('../../models/master/MasterInfo');
const SellerInfo = require('../../models/seller/SellerInfo');
const SellerData = require('../../models/master/SellerData');

// Controller function to handle user registration
exports.registerMaster = async (req, res) => {
    try {
        const { firstname, lastname, username, email, password, profileImage } = req.body;
>>>>>>> 956c3257d325775ffae1a7add461a5ae00d5d4b1
        // console.log(username,email,password,confirmPassword);

        // Check if the required fields are provided
        if (!firstname || !lastname || !username || !email || !password) {
            return res.status(400).json({ error: 'Please provide all the information' });
        }

<<<<<<< HEAD
        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'User already exists' });
=======
        // Check if the master already exists
        const existingMaster = await MasterInfo.findOne({ email });
        if (existingMaster) {
            return res.status(400).json({ error: 'Admin already exists' });
>>>>>>> 956c3257d325775ffae1a7add461a5ae00d5d4b1
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password.toString(), 10);

<<<<<<< HEAD
        // Create a new user instance
        const newUser = new User({ firstname, lastname, username, email, password: hashedPassword, profileImage });
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Error registering user: ', error);
        res.status(500).json({ error: error.message || 'An error occurred while registering user' });
    }
};

// Controller function to handle user login 
exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find the user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Compare passwords
        const isPasswordValid = await bcrypt.compare(password, user.password);
=======
        // Create a new master instance
        const newMaster = new MasterInfo({ firstname, lastname, username, email, password: hashedPassword, profileImage});
        await newMaster.save();
        res.status(201).json({ message: 'Admin  registered successfully' });
    } catch (error) {
        console.error('Error registering master: ', error);
        res.status(500).json({ error: error.message || 'An error occurred while registering master' });
    }
};

// Controller function to handle master login 
exports.loginMaster = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find the master by email
        const master = await MasterInfo.findOne({ email });
        if (!master) {
            return res.status(404).json({ error: 'Admin not found' });
        }

        // Compare passwords
        const isPasswordValid = await bcrypt.compare(password, master.password);
>>>>>>> 956c3257d325775ffae1a7add461a5ae00d5d4b1
        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }

        // Ensure that the JWT_SECRET is provided and valid
        if (!process.env.JWT_SECRET) {
            return res.status(500).json({ error: 'JWT secret is missing or invalid' });
        }

        // Generate JWT token
<<<<<<< HEAD
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '10h' });
        res.status(200).json({ token });
    } catch (error) {
        console.error('Error logging in user: ', error);
        res.status(500).json({ error: 'An error occurred while logging in user' });
    }
};

// Controller function to get user details
exports.getUserDetails = async (req, res) => {
    try {
        const userId = req.userId;
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        console.error('Error fetching user details:', error);
        res.status(500).json({ error: 'An error occurred while fetching user details' });
    }
};

// Controller function to update user details
exports.updateUserDetails = async (req, res) => {
    try {
        const userId = req.userId;
        const { username, email } = req.body;
        const updatedUser = await User.findByIdAndUpdate(userId, { username, email }, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json(updatedUser);
    } catch (error) {
        console.error('Error updating user details: ', error);
        res.status(500).json({ error: 'An error occurred while updating user details ' });
    }
};

// Controller function to delete user account
exports.deleteUserAccount = async (req, res) => {
    try {
        const userId = req.userId;
        const deletedUser = await User.findByIdAndDelete(userId);
        if (!deletedUser) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json({ message: 'User account deleted successfully' });
    } catch (error) {
        console.error('Error deleting user account:', error);
        res.status(500).json({ error: 'An error occurred while deleting user account' });
    }
};

exports.logoutUser = async (req, res) => {
    try {
        //clear the JWT token on the client-side
        res.clearCookie('token');
        res.status(200).json({ message: 'User logged out successfully' });
    } catch (error) {
        console.error('Error logging out user: ', error);
        res.status(500).json({ error: 'An error occurred while logging out user' });
    }
};

// Other controller functions for user-related operations
=======
        const token = jwt.sign({ masterId: master._id }, process.env.JWT_SECRET, { expiresIn: '10h' });
        res.status(200).json({ token });
    } catch (error) {
        console.error('Error logging in master: ', error);
        res.status(500).json({ error: error.message || 'An error occurred while logging in master' });
    }
};

// Controller function to get master details
exports.getMasterDetails = async (req, res) => {
    try {
        const masterId = req.masterId;
        const master = await MasterInfo.findById(masterId);
        if (!master) {
            return res.status(404).json({ error: 'Master not found' });
        }
        res.status(200).json(master);
    } catch (error) {
        console.error('Error fetching master details:', error);
        res.status(500).json({ error: error.message || 'An error occurred while fetching master details' });
    }
};

exports.getSellerDetails = async (req, res) => {
    try {
        // Fetch all seller information
        const sellers = await SellerInfo.find();
        console.log(sellers);

        if (!sellers || sellers.length === 0) {
            return res.status(400).json({ error: 'No sellers found' });
        }

        // Create an array to hold seller IDs
        const sellerIds = sellers.map(seller => seller._id);
        console.log(sellerIds);

        // Find existing SellerData document
        let sellerData = await SellerData.findOne();

        // If SellerData document doesn't exist, create a new one
        if (!sellerData) {
            sellerData = new SellerData({ sellerIds });
        } else {
            // If SellerData document exists, update the sellerIds array
            sellerData.sellerIds = sellerIds;
        }

        // Save the seller data instance
        await sellerData.save();

        res.status(200).json({ message: 'Seller data fetched successfully', data: sellers });
    } catch (error) {
        console.error('Error fetching seller details: ', error);
        res.status(500).json({ error: error.message || "An error occurred while fetching seller details"});
    }
};

// Controller function to update master details
exports.updateMasterDetails = async (req, res) => {
    try {
        const masterId = req.masterId;
        const { username, email } = req.body;
        const updatedMaster = await MasterInfo.findByIdAndUpdate(masterId, { username, email }, { new: true });
        if (!updatedMaster) {
            return res.status(404).json({ error: 'Master not found' });
        }
        res.status(200).json(updatedMaster);
    } catch (error) {
        console.error('Error updating master details: ', error);
        res.status(500).json({ error: error.message || 'An error occurred while updating master details ' });
    }
};

// Controller function to delete master account
exports.deleteMasterAccount = async (req, res) => {
    try {
        const masterId = req.masterId;
        const deletedMaster = await MasterInfo.findByIdAndDelete(masterId);
        if (!deletedMaster) {
            return res.status(404).json({ error: 'Master not found' });
        }
        res.status(200).json({ message: 'master account deleted successfully' });
    } catch (error) {
        console.error('Error deleting Master account:', error);
        res.status(500).json({ error: error.message || 'An error occurred while deleting master account' });
    }
};

exports.logoutMaster = async (req, res) => {
    try {
        //clear the JWT token on the client-side
        res.clearCookie('token');
        res.status(200).json({ message: 'Master logged out successfully' });
    } catch (error) {
        console.error('Error logging out master: ', error);
        res.status(500).json({ error: error.message || 'An error occurred while logging out master' });
    }
};

// Other controller functions for master-related operations
>>>>>>> 956c3257d325775ffae1a7add461a5ae00d5d4b1
