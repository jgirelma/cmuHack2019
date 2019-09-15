var express = require('express');
var router = express.Router();
var sqlite3 = require('sqlite3').verbose();
var items=[{name: 'jacket', contact:'412-123-5489', description:'A medium sized blue jacket.', pictureId:'1'},
{name: 'shirt', contact:'580-352-3428', description:'Large shirt with black stripes.', pictureId:'2'},
{name: 'jeans', contact:'734-123-3218', description:'Small black jeans.', pictureId: '3'},
{name: 'shoes', contact:'532-123-3874', description:'Size 13 nike sneakers.', pictureId:'4'},
{name: 'scarf', contact:'432-041-1234', description:'A very long red scarf.', pictureId:'5'}];

var db = new sqlite3.Database('items', (err) => {
    if (err) {
      return console.error(err.message);
    }
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('search', {results: []
    });
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