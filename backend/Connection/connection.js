const mongoo = require('mongoose')


const conn = async (req , res) => {
    try{
        await mongoo.connect("mongodb+srv://udit12456:6ayu1AmMCCBFHwC2@todo.wtwef9p.mongodb.net/").then(() =>{
            console.log("CONNECTED");
        })

    }
    catch (error){
        res.send("AN ERROR OCCURED");
    }

}       

conn();
