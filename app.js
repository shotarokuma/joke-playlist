const express = require("express");
const app = express();
const server = app.listen(process.env.PORT || 8080, () => console.log("Listening on 8080"));

app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.locals = [];

const jokes = [
  {
    "id": 1,
    "type": "general",
    "setup": "What do you call a laughing motorcycle?",
    "punchline": "A Yamahahahaha."
  },
  {
    "id": 2,
    "type": "general",
    "setup": "What lies atthe bottom of the ocean and twitches?", "punchline": "A nervous wreck."
  },
  {
    "id": 3,
    "type": "general",
    "setup": "Have you heard of the band 1023MB?",
    "punchline": "They haven't got a gig yet."
  },
  {
    "id": 4,
    "type": "general",
    "setup": "What kind of music do planets listen to?", "punchline": "Nep-tunes."
  },
  {
    "id": 5,
    "type": "general",
    "setup": "How do you find Will Smith in the snow?", "punchline": " Look for fresh prints."
  },
  {
    "id": 6,
    "type": "anime",
    "setup": "What do Light and a lift have in common?", "punchline": "They are both L-EVADERS!."
  }
]

app.get('/api/v1/joke', (req, res) => {
  const joke = jokes[Math.floor(Math.random() * 6)];
  res.json(joke);
});
app.get('/api/v1/jokes', (req, res) => {
  res.json(jokes)
})

app.post('/playlists', (req, res) => {
  const playlist = {
    name: req.body.name,
    lists: []
  };
  app.locals.push(playlist);
  res.send("success");
});

app.get('/playlists', (req, res) => {
  res.json(app.locals);
})

app.patch('/playlists/:listName', (req, res) => {
  const listName = req.params.listName;
  app.locals.forEach(playlist => {
    if (playlist.name === listName) playlist.lists.push(req.body.joke);
  });
  res.send("success");
})