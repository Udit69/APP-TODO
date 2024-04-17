const bcrypt = require("bcrypt");
const router = require("express").Router();
const User = require("../Schema/user");

//signup

router.post("/signin", async (req, res) => {
    try {
        const { email, username, password } = req.body;
        
        // Hash the password using bcrypt
        const hashpass = bcrypt.hashSync(password, 10); // 10 is the saltRounds

        // Create a new User object with hashed password
        const user = new User({ email, username, password: hashpass });

        // Save the user to the database
        await user.save();

        // Respond with the created user
        res.json({ user });
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
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

