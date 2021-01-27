const express = require ("express");
const path = require ("path");
const mongoose = require ('mongoose');
const bodyParser = require ('body-parser');

const distDir = "../dist/";
const uri = "mongodb+srv://OneLife:Crazouli971@onelife.caw0b.mongodb.net/CrazyRasta?retryWrites=true&w=majority";
const Jeu = require('./model/jeu.model');

// Déclaration d'instance et connexion BdD

const app = express();
var promise = mongoose.connect(uri, {useNewUriParser: true});

promise.then( () => {
    console.log('DB Connected');
    app.listen ("3000", () => {
        console.log("Listening on port 3000 !");
    });
});

app.use (express.static (path.join (__dirname, distDir)));
app.use (/^((?!(api)).)*/, (req, res) => {
    res.sendFile (path.join (__dirname, distDir + "/index.html"));
});


app.use (bodyParser.urlencoded (
    {extended: true}));

app.use (bodyParser.json ());





// ROUTES


app.post('/api/movies', (req, res) => {
    var newJeu = new Jeu(req.body);
  
    newJeu.save((err, obj) => {
      if(err) {
        console.log(err);
        return res.send(500);
      }
  
      res.send (obj);
    });
  });
  
  app.get('/api/movies', (req, res) => {
    Jeu.find({}, (err, obj) => {
      if(err) {
        console.log(err);
        return res.send(500);
      }
      return res.send(obj);
    });
  });
  
  // Le :id sera autimatiquement transofrmé par l'identifiant envoyé apr la requête xhttp
  app.get('/api/movies/:id', (req, res) => {
    // Pour effectuer une recherche on va utiliser le modèle
    // BodyParser permet de conserver l'id dans req.params.id
    Jeu.findOne({_id: req.params.id}, (err, obj) => {
      if(err) {
        console.log(err);
        return res.send(500);
      }
  
      return res.send(obj);
    })
  });
  
  app.put('/api/movies/:id', (req, res) => {
    Jeu.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, upsert: true, setDefaultsOnInsert: true, runValidators: true}, (err, obj) => {
      if(err) {
        console.log(err);
        return res.send(500);
      }
  
      return res.send(obj);
    });
  });
  
  app.delete('/api/movies/:id', (req, res) => {
    Jeu.deleteOne({_id: req.params.id}, (err, obj) => {
      if(err) {
        console.log(err);
        return res.send(500);
      }
      res.status(204).end();
    });
  });
  