const express = require("express");
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(express.static(__dirname + '/static'));
const port = 4000;
const socket_io = require("socket.io");
const io  = socket_io();
const db = require('./models')    
app.io    = io;
let sock = require('./socket.js');
sock.init(io);

app.get('/api/teams', (req, res) => {
    return db.ConstructedTeam.findAll()
            .then((constructedTeams) => res.send(constructedTeams))
            .catch((err) => {
                console.log('There was an error querying contacts', JSON.stringify(err))
                return res.send(err)
            })
  });
  
  app.post('/api/teams', (req, res) => {
    const { name, tag } = req.body
    return db.ConstructedTeam.create({ name, tag })
      .then((construcedTeam) => res.send(construcedTeam))
      .catch((err) => {
        console.log('***There was an error creating a contact', JSON.stringify(contact))
        return res.status(400).send(err)
      })
  });
  
  app.delete('/api/teams/:id', (req, res) => {
    const id = parseInt(req.params.id)
    return db.ConstructedTeam.findById(id)
      .then((construcedTeam) => construcedTeam.destroy({ force: true }))
      .then(() => res.send({ id }))
      .catch((err) => {
        console.log('***Error deleting contact', JSON.stringify(err))
        res.status(400).send(err)
      })
  });
  
  app.put('/api/contacts/:id', (req, res) => {
    const id = parseInt(req.params.id)
    return db.ConstructedTeam.findById(id)
    .then((construcedTeam) => {
      const { name, tag } = req.body
      return construcedTeam.update({ name, tag })
        .then(() => res.send(construcedTeam))
        .catch((err) => {
          console.log('***Error updating contact', JSON.stringify(err))
          res.status(400).send(err)
        })
    })
  });

  app.get('/api/teams/:id/players', (req, res) => {
    const teamId = parseInt(req.params.id)
    return db.ConstructedTeamPlayer.findAll({
        where: {
            constructedTeamId: teamId
        }
    })
            .then((constructedTeamPlayers) => res.send(constructedTeamPlayers))
            .catch((err) => {
                console.log('There was an error querying contacts', JSON.stringify(err))
                return res.send(err)
            })
  });

  app.post('/api/teams/:id/players', (req, res) => {
    const teamId = parseInt(req.params.id)
    const { characterId, factionId, alias } = req.body
    return db.ConstructedTeamPlayer.create({ teamId,characterId, factionId, alias })
      .then((ConstructedTeamPlayer) => res.send(ConstructedTeamPlayer))
      .catch((err) => {
        console.log('***There was an error creating a contact', JSON.stringify(contact))
        return res.status(400).send(err)
      })
  });

  app.put('api/teams/:id/players/:pid', (req, res) => {
    const teamId = parseInt(req.params.id)
    const pid = parseInt(req.params.pid)
    return db.ConstructedTeamPlayer.findById(pid)
    .then((construcedTeamPlayer) => {
      const { characterId, factionId, alias } = req.body
      return construcedTeamPlayer.update({ teamId ,characterId, factionId, alias })
        .then(() => res.send(construcedTeamPlayer))
        .catch((err) => {
          console.log('***Error updating contact', JSON.stringify(err))
          res.status(400).send(err)
        })
    })
  });

app.listen(`${port}`, function() {
  console.log(`Server started on port ${port}`);
});
