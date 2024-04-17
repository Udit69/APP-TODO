const mongoo = require('mongoose')


const conn = async (req , res) => {
    try{
        await mongoo.connect("mongodb+srv://udit12456:zKSHdsn8XN9JMBvi@todo.wtwef9p.mongodb.net/todo").then(() =>{
            console.log("CONNECTED");
        })

    }
    catch (error){
        res.send("AN ERROR OCCURED");
    }

}       

conn();
