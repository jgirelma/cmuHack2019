var express = require('express');
var router = express.Router();
var sqlite3 = require('sqlite3').verbose();
var multer = require('multer')
var upload = multer({ dest: 'public/images'});

var db = new sqlite3.Database('items', (err) => {
    if (err) {
      return console.error(err.message);
    }
});

db.all("SELECT rowid, name, description, pictureId, contact FROM itemsFinal4", function(err, rows) {
    rows.forEach(function (row) {
      console.log(row.rowid, row.name, row.description, row.pictureId, row.contact);
  });
});	
  
router.get('/', function(req, res, next) {
  res.render('add2', {});
});
// router.post('/', upload.single('file'), function(req, res) {
//     var file = __dirname + '/' + req.file.filename;
//     fs.rename(req.file.path, file, function(err) {
//       if (err) {
//         console.log(err);
//         res.send(500);
//       } else {
//         res.json({
//           message: 'File uploaded successfully',
//           filename: req.file.filename
//         });
//       }
//     });
//   });
router.post('/', function (req, res) {
    // console.log(req.files.file)
    // var file = req.files.file;
    // console.log(file);
    // file.mv('public/images/'+file.name, function(err) {
    //     console.log("afdsafa")
        
    // });
    // db.serialize(function() {
    // //     // db.run("CREATE TABLE itemsFinal4 (name TEXT, description TEXT, pictureId TEXT, contact TEXT)");
    // //     // db.run("CREATE TABLE itemsFinal2 (id INT, name TEXT, description TEXT, pictureId INT, contact TEXT)");
    // var stmt = db.prepare("INSERT INTO itemsFinal4 VALUES (?,?,?,?)");
    // stmt.run(req.body.name, req.body.description, file.name, req.body.contact);
    // stmt.finalize();
    
    // });
    // db.run("INSERT INTO itemsFinal4 (?,?,?,?)", req.body.name, req.body.description, file.name, req.body.contact)
    res.render('add2', {});
});
  

module.exports = router;