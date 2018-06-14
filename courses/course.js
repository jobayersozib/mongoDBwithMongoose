const mongoose=require('mongoose');




mongoose.connect("mongodb://localhost/playground")
        .then(()=>console.log("Connecting database..."))
        .catch((err)=>{
                console.log("Something went wrong:"+err)
        })


const courseSehema=new mongoose.Schema({
        name:String,
        author:String,
        tags:[String],
        newField:String,
        date:{type:Date,default:Date.now},
        isPublished:Boolean
})


const Course=mongoose.model("Course",courseSehema)


const course=new Course({
        name:"Laravel REST API development",
        author:"jobayer mahamud",
        newField:"New field",
        tags:["Node","Backend"],
        isPublished:true
})

/*Course.findByIdAndUpdate("5b1f8ec4472dc31fc47b4ccd",{author:"Mosh hamadani"},{new:true},(err,doc)=>{
        if (err) {
                console.log("something went wrong..")
                mongoose.connection.close();
        }
        else{
                console.log(doc.author)
                mongoose.connection.close();
        }
})
*/
/* course.save().then(()=>{
        console.log("Saved again......")
        mongoose.connection.close();
}).catch(err=>{
        console.log(err)
})

*/
function findCourse(){
   
    Course.find()
      .then((courses)=>{
        console.log(courses)
        

}).catch(err=>{
        console.log(err)
})
    
}


module.exports=Course


//concole.log(courses)