const router = require("express").Router();
const User = require("../Schema/user");
const List = require("../Schema/listt");

//Addtodo

router.post("/addtodo", async (req, res) => {
    try {
        const { title, body, id } = req.body;
        const existingUser = await User.findById(id);
        
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
        const { title, body } = req.body;

        // Update the list item
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

router.delete("/deleteTask/:id", async (req, res) => {
    try {
      const { id } = req.body;
      const existingUser = await User.findByIdAndUpdate(id, {
        $pull: { list: req.params.id },
      });
      if (existingUser) {
        await List.findByIdAndDelete(req.params.id).then(() =>
          res.status(200).json({ message: "Task Deleted" })
        );
      }
    } catch (error) {
      console.log(error);
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

