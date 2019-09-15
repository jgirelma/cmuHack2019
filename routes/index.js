var express = require('express');
var router = express.Router();
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('items', (err) => {
  if (err) {
    return console.error(err.message);
  }
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index2', { title: 'Express' });
});

router.post('/', async function (req, res) {
  var search = req.body.search.toLowerCase();
var searchSplit = search.split();
var items = [];


rows = await returnRows()


res.render('search', {results: rows});
});


function returnRows() {
data = [];
return new Promise(resolve => {
  db.all("SELECT rowid, name, description, pictureId, contact FROM itemsFinal4", function(err, rows) {
      if(err) {
          console.log(err)
      }
      rows.forEach(function (row) {
        data.push(row);
    });
    resolve(data);
  })
})
}

module.exports = router;
