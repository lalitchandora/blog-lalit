const port = 8000;

const express = require('express');
const DatabaseConnection = require('./db_conn');
const app = express();
const connection = DatabaseConnection();
var cors = require('cors');
app.use(cors());
app.use(express.json());
app.get('/', async function (req, res){
    
    const query = "select * from blog order by id desc";
    connection.query(query, function (err, result) {
      if (err) {
        console.log(err);
      }
      res.send(result)
    });
})

app.post('/add', async function (req, res){
  const {userName, title, note} = req.body;
  let query = `insert into blog(title, note, userName) value ('${title}', '${note}', '${userName}')`;
  connection.query(query, function (err, result) {
    if (err) {
      console.log(err);
    }
    res.send({success: true});
  });
});

app.post('/edit', async function (req, res) {
  const {id, userName, title, note} = req.body;
  let query = 
  `update blog set title='${title}', note='${note}', userName='${userName}' where id=${id}; `;
  connection.query(query, function (err, result) {
    if (err) {
      console.log(err);
    }
    res.send({success: true});
  });
});

app.delete('/delete/:blogId', async function (req, res){
  let id = req.params.blogId;
  let query = 
  `delete from blog where id='${id}'`;

  connection.query(query, function (err, result) {
    if (err) {
      console.log(err);
    }
    res.send({success: true});
  });
})

app.listen(port, () => {
  console.log(`Server running at ${port}/`);
});


