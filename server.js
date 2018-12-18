const express = require('express');

const path = require('path');
const PORT = process.env.PORT || 3333;
const app = express();
const nba = require('nba');

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  console.log("asdsadasd");
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/find_player', function (req, res) {
  console.log("req" + req);
  // nba.findPlayer()
})

app.listen(PORT, () => {
  console.log('listening on PORT: ' + PORT);
});