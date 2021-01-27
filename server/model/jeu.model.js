const mongoose = require ("mongoose");

var jeuSchema = mongoose.Schema ( {
    title: String,
    affiche: String,
    onAir: String,
    synopsis: String,
    date: String
});


var Jeu = mongoose.model ("Jeu", jeuSchema);
module.exports = Jeu;