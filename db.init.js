const utilisateur = require("./models/utilisateur.model");
const voiture = require("./models/voiture.model");
const reparation = require("./models/reparation.model");
const depense = require("./models/depense.model");

utilisateur.deleteMany({}).then(()=>{
  utilisateur.insertMany([
    {
      nom: "Andria Bryan",
      email: "mahefaran48@gmail.com",
      motDePasse: "bryan",
      role: "client",
    },
    {
      nom: "Hiaro Nathanael",
      email: "Hiaro@gmail.com",
      motDePasse: "mdp",
      role: "client",
    },
    {
      nom: "Jean Yves",
      email: "jean@mail.com",
      motDePasse: "bryan",
      role: "atelier",
    },
    {
      nom: "Rakoto Grand",
      email: "rakoto@mail.com",
      motDePasse: "bryan",
      role: "financier",
    },
  ])
  .then(function () {
    console.log("Utilisateurs inserted"); // Success
    let a,b,c;
    utilisateur.findOne({nom:"Andria Bryan"}, (err, res) => {
      if (err) console.log(err);
      a = {
        marque: "Renault",
        modele: "Clio",
        immatriculation: "3489 TAA",
        utilisateur: res._id,
        statut: 'Disponible'
      }
    });
    utilisateur.findOne({nom:"Hiaro Nathanael"}, (err, res) => {
      if (err) console.log(err);
      b = {
        marque: "Renault",
        modele: "Megane",
        immatriculation: "1111 TAA",
        utilisateur: res._id,
        statut: 'Disponible'
      };
      c = {
        marque: "Peaugeot",
        modele: "405",
        immatriculation: "2222 TAA",
        utilisateur: res._id,
        statut: 'Disponible'
      }
    });

    setTimeout(
      () => { voiture.deleteMany({}).then(function(){
        voiture.insertMany([a,b,c])
        .then(function () {
          console.log("Voitures inserted"); // Success
          test();
        })
        .catch(function (error) {
          console.log(error); // Failure
        });  
      }).catch(function(error){
        console.log(error);
      }) 
    }, 1000 );
    
  })
  .catch(function (error) {
    console.log(error); // Failure
  });
}).catch(function(error){
    console.log(error);
});

test = async function() {
  // GET parent from child
  voiture.findOne({ modele: 'Clio' }).populate('utilisateur').exec((err, user) => {
    if (err) {
        console.log(err);
    } else {
        // console.log(user);
        insertR(user._id);
    }
  });
}

insertR = async function(idV) {
  // reparation.deleteMany({})
  // .then(function(){
  //   reparation.insertMany([
  //     {
  //       voiture:idV,
  //       statuts: [{nom:"En cours de reparation", date:Date.now()}],
  //       details: [
  //         {piece:"Carroserie", montant:500 , statut: 'En cours de reparation', description: 'il ne reste plus que le pare choc avant'},
  //         {piece:"Boite de vitesse", montant:5500 , statut: 'Non reparé', description: ''},
  //       ],
  //       description:"...desc..."
  //     },
  //   ])
  //   .then(function () {
  //     console.log("Reparations inserted"); // Success
  //     reparation.find({}).populate('voiture').exec((err, user) => {
  //       if (err) {
  //           console.log(err);
  //       } else {
  //           console.log(user);
  //           console.log('en JSON = '+JSON.stringify(user));
  //       }
  //     });
  //   })
  //   .catch(function (error) {
  //     console.log(error); // Failure
  //   });  
  // }).catch(function(error){
  //   console.log(error);
  // });
}