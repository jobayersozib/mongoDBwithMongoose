const findCourse=require('./courses/course.js')
const express=require('express')
const app=express()
//console.log(findCourse())
var tags=["rest","node","API","javascript"]
app.get('/',(req,res)=>{
        findCourse.findByIdAndUpdate("5b1f8ec4472dc31fc47b4ccd",{tags:tags},{new:true},(err,doc)=>{
                if (err) {
                        console.log("something went wrong..")
                        //mongoose.connection.close();
                }
                else{
                        res.send(doc);
                       // mongoose.connection.close();
                }
        })
})


app.post('/',(req,res)=>{
        new findCourse(
                {
                        name:"Laravel REST API development",
                        author:"jobayer mahamud",
                        newField:"New field updated one...",
                        tags:["Node","Backend"],
                        isPublished:true
                }
        ).save().then(()=>{
        console.log("Saved again......")
        res.status(200).send("Saved....");
}).catch(err=>{
        console.log(err)
})


})

app.listen(3000,()=>{
        console.log("Started.......")
})