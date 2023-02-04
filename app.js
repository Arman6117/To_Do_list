const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let userTasks = [];
let work = []
app.get("/", function (req, res) {
  let today = new Date(); // Gets the current date

  let options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  let day = today.toLocaleDateString("en-us", options); // For Note
  // console.log(day)

  res.render("list", { listTitle: day, new_task: userTasks });
});

app.post("/", function (req, res) {
// console.log(req.body)
let userTask = req.body.new_task;
let workTask = req.body.new_task
if (req.body.list == "Work") {

  work.push(workTask)

  res.redirect("/work")

}else {
  userTasks.push(userTask);

  res.redirect("/");
}
   

 
});

// Creating another list


app.get("/work", function(req,res){
   
  res.render("list", {listTitle : "Work List", new_task: work } )

})


app.get("/about", function(req,res){
  res.render("about")
})


app.listen(process.env.PORT || 3000, function () {
  console.log("Server is running");
});

// let currentDay = today.getDay()
// let day = ""  // An empty string we are going to change it respective to condition

// switch (currentDay) {
//   case 1: day ="Monday"
//   break;
//   case 2: day ="Tueday"
//   break;
//   case 3: day ="Wensday"
//   break;
//   case 4: day ="Thursday"
//   break;
//   case 5: day ="Friday"
//   break;
//   case 6: day ="satday"
//   break;
//   case 0: day ="Sunday"
//   break;

//   default:
//     console.log("Error")
//     break;
// }

// res.render("list", {a_week_day:day})
