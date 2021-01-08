// Require in npm packages
const router = require("express").Router();
const path = require("path");

// Send user to homepage
router.get("/", (req, res) =>{
    res.sendFile(path.join(__dirname, "../public/index.html"))
});

// Send user to a new exercise web page
router.get("/exercise", (req, res) =>{
    res.sendFile(path.join(__dirname, "../public/exercise.html"))
});

// Send user to an old exercise web page
router.get("/exercise?", (req, res) =>{
    res.sendFile(path.join(__dirname, "../public/exercise?.html"))
});

// Send user to stats web page
router.get("/stats", (req, res) =>{
    res.sendFile(path.join(__dirname, "../public/stats.html"))
});

module.exports = router;


// // Require in npm packages
// const path = require("path");

// module.exports = function(app){

//     // Send user to homepage
//     app.get("/", (req, res) =>{
//         res.sendFile(path.join(__dirname, "../public/index.html"))
//     });

//     // Send user to a new exercise web page
//     app.get("/exercise", (req, res) =>{
//         res.sendFile(path.join(__dirname, "../public/exercise.html"))
//     });

//     // Send user to an old exercise web page
//     // app.get("/exercise?", (req, res) =>{
//     //     res.sendFile(path.join(__dirname, "../public/exercise?.html"))
//     // });

//     // Send user to stats web page
//     app.get("/stats", (req, res) =>{
//         res.sendFile(path.join(__dirname, "../public/stats.html"))
//     });

// }