const express = require('express');

const path = require('path');
const PORT = process.env.PORT || 4000;
const app = express();
const nba = require('nba');

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/search_players', function (req, res) {
  const searchTerm = req.query.searchTerm;

  let playersSearch = nba.searchPlayers(searchTerm);
  console.log('found:', playersSearch);
  
  if(searchTerm === null || playersSearch.length === 0){    
    return res.status(200).send("No player found");
  }
  
  nba.stats.playerInfo({PlayerID: playersSearch[0].playerId})
    .then(info => {      
      res.status(200).json(info);
    })
    .catch(err => {
      res.status(500).json(err);
    });
  
})

app.listen(PORT, () => {
  console.log('listening on PORT: ' + PORT);
});