const router = require("express").Router();
const User = require("../Schema/user");
const List = require("../Schema/listt");

//Addtodo

router.post("/addtodo", async (req, res) => {
    try {
        const { title, body, email } = req.body;
        const existingUser = await User.findOne({ email });
        
        if (existingUser) {
            const list = new List({ title, body, user: existingUser });
            await list.save();

            existingUser.list.push(list);
            await existingUser.save();

            res.status(202).json({ list });
        } else {
            res.status(404).json({ message: "User not found" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
});

//updateTODO

router.put("/updatetask/:id", async (req, res) => {
    try {
        const { title, body, email } = req.body;

        // Find the user by email
        const existingUser = await User.findOne({ email });

        // Check if user exists
        if (!existingUser) {
            return res.status(404).json({ message: "User not found" });
        }

        // Update the list item associated with the user
        const updatedList = await List.findByIdAndUpdate(req.params.id, { title, body }, { new: true });

        // Check if list item exists
        if (!updatedList) {
            return res.status(404).json({ message: "List item not found" });
        }

        res.status(200).json({ message: "List item updated successfully", updatedList });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
});

//deleteTODO

router.delete("/deletetask/:id", async (req, res) => {
    try {
        const { email } = req.body;
        const existingUser = await User.findOne({ email });
        if (!existingUser) {
            return res.status(404).json({ message: "User not found" });
        }
        const DeleteList = await List.findByIdAndDelete(req.params.id);
        if (!DeleteList) {
            return res.status(404).json({ message: "List item not found" });
        }
        res.status(200).json({ message: "List item Deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
});

//Getlist

router.get("/findtask/:id", async (req, res) => {
    try {
        const foundList = await List.find({ user: req.params.id }).sort({createdAt : -1});

        if (foundList.length === 0) {
            return res.status(404).json({ message: "List item not found" });
        }

        res.status(200).json({ foundList });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
});




module.exports = router;

