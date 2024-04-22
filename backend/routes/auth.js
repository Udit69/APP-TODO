const bcrypt = require("bcrypt");
const router = require("express").Router();
const User = require("../Schema/user");
const checkEmailExists = require("../middleware/email");


//signup

router.post("/signin", checkEmailExists, async (req, res) => {
    try {
        const { email, username, password } = req.body;

        if (!email || !username || !password) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const hashpass = bcrypt.hashSync(password, 10);

        const user = new User({ email, username, password: hashpass });

        await user.save();

        res.json({ message: "Signed up successfully" });
    } catch (error) {
        console.error(error);

        if (error.code === 11000) {
            res.status(400).json({ message: 'Email already exists' });
        } else {
            res.status(500).json({ message: 'Internal server error' });
        }
    }
});




//login

router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password);
        if (!isPasswordCorrect) {
            return res.status(401).json({ message: "Incorrect password" });
        }

        // You can return the user data or a token for authentication here
        const { password, ...others } = user._doc;
        res.status(200).json({ message: "Login successful", user: others });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});


module.exports = router;

