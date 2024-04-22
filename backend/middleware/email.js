

const User = require("../Schema/user");



const checkEmailExists = async (req, res, next) => {
    try {
      const { email } = req.body;
  
      // Check if email already exists in the database
      const existingUser = await User.findOne({ email });
  
      if (existingUser) {
        // Email already exists, return an error response
        return res.status(400).json({ message: 'Email already exists' });
      }
  
      // Email does not exist, proceed to the next middleware
      next();
    } catch (error) {
      // Handle errors
      console.error('Error checking email:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = checkEmailExists;
