const utilisateur = require("./models/utilisateur.model");
const voiture = require("./models/voiture.model");
const reparation = require("./models/reparation.model");
const depense = require("./models/depense.model");
const paiement = require("./models/paiement.model");

async function init() {
  await utilisateur
    .deleteMany({})
    .then(() => console.log("users deleted"))
    .catch((error) => console.log(error));
  await utilisateur
    .insertMany([
      {
        nom: "Andria Bryan",
        email: "mahefaran48@gmail.com",
        motDePasse: "bryan",
        role: "client",
      },
      {
        nom: "Hiaro Nathanael",
        email: "b.andriamahefa@etechconsulting-mg.com",
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
      console.log("users inserted"); // Success
    })
    .catch(function (error) {
      console.log(error); // Failure
    });
  const idBray = await utilisateur.findOne({ nom: "Andria Bryan" }).exec();
  const idHiaro = await utilisateur.findOne({ nom: "Hiaro Nathanael" }).exec();
  await voiture
    .deleteMany({})
    .then(() => console.log("cars deleted"))
    .catch((error) => console.log(error));
  await voiture
    .insertMany([
      {
        marque: "Renault",
        modele: "Clio",
        immatriculation: "3489 TAA",
        utilisateur: idHiaro._id,
        statut: "Disponible",
      },
      {
        marque: "Renault",
        modele: "Duster",
        immatriculation: "2222 TAA",
        utilisateur: idHiaro._id,
        statut: "Déposé",
      },
      {
        marque: "Peaugeot",
        modele: "405",
        immatriculation: "3333 TAA",
        utilisateur: idHiaro._id,
        statut: "Disponible",
      },
      {
        marque: "Renault",
        modele: "Megane",
        immatriculation: "1291 TAA",
        utilisateur: idBray,
        statut: "Disponible",
      },
      {
        marque: "Peaugeot",
        modele: "205",
        immatriculation: "1212 TAA",
        utilisateur: idBray,
        statut: "En réparation",
      },
    ])
    .then(function () {
      console.log("cars inserted"); // Success
    })
    .catch(function (error) {
      console.log(error); // Failure
    });
  const idV = await voiture.findOne({ immatriculation: "2222 TAA" }).exec();
  const idV2 = await voiture.findOne({ immatriculation: "1212 TAA" }).exec();
  const idV3 = await voiture.findOne({ immatriculation: "1291 TAA" }).exec();
  await reparation
    .deleteMany({})
    .then(() => console.log("repairs deleted"))
    .catch((error) => console.log(error));
  await reparation
    .insertMany([
      {
        voiture: idV2._id,
        details: [
          {
            description: "Changement de courroie de distribution",
            montant: 250,
            statut: "Fini",
          },
          {
            description: "Vidange d'huile",
            montant: 80,
            statut: "Fini",
          },
        ],
        description: "Voiture qui fait un bruit bizarre",
        dateDebut: "2023-05-15T12:00:00.000Z",
        dateFin: "2023-05-20T17:00:00.000Z",
        paye: true,
      },
      {
        voiture: idV._id,
        details: [
          {
            description: "Remplacement des freins arrière",
            montant: 300,
            statut: "En attente",
          },
          {
            description: "Remplacement des pneus",
            montant: 500,
            statut: "Fini",
          },
          {
            description: "Changement des plaquettes de freins",
            montant: 120,
            statut: "Fini",
          },
          {
            description: "Remplacement des amortisseurs avant",
            montant: 300,
            statut: "En cours",
          },
        ],
        description: "Voiture qui a des problèmes de freins",
        dateDebut: "2023-05-20T12:00:00.000Z",
        dateFin: null,
        paye: false,
      },
      {
        voiture: idV3._id,
        details: [
          {
            description: "Remplacement de la boîte de vitesse",
            montant: 1500,
            statut: "En attente",
          },
          {
            description: "Révision générale",
            montant: 800,
            statut: "En attente",
          },
        ],
        description: "Voiture qui a des problèmes de boîte de vitesse",
        dateDebut: "2023-05-25T12:00:00.000Z",
        dateFin: null,
        paye: false,
      },
    ])
    .then(function () {
      console.log("repairs inserted"); // Success
    })
    .catch(function (error) {
      console.log(error); // Failure
    });
  await paiement
    .deleteMany({})
    .then(() => console.log("paiements deleted"))
    .catch((error) => console.log(error));
  await depense
    .deleteMany({})
    .then(() => console.log("depenses deleted"))
    .catch((error) => console.log(error));
  const idR = await reparation
    .findOne({ description: "Voiture qui fait un bruit bizarre" })
    .exec();
  const idR2 = await reparation
    .findOne({ description: "Voiture qui a des problèmes de freins" })
    .exec();
  await paiement
    .insertMany([
      {
        reparation: idR._id,
        montant: 500,
        date: "2023-01-01",
      },
      {
        reparation: idR2._id,
        montant: 1000,
        date: "2021-01-15",
      },
    ])
    .then(function () {
      console.log("paiemenmts inserted"); // Success
    })
    .catch(function (error) {
      console.log(error); // Failure
    });
  await depense
    .insertMany([
      {
        motif: "Salaire",
        date: "2021-06-01",
        montant: 3000,
      },
      {
        motif: "Loyer",
        date: "2021-06-15",
        montant: 2000,
      },
      {
        motif: "Achat de pièce",
        date: "2021-06-20",
        montant: 1000,
      },
      {
        motif: "Autres dépenses",
        date: "2021-06-25",
        montant: 500,
      },
    ])
    .then(function () {
      console.log("depenses inserted"); // Success
    })
    .catch(function (error) {
      console.log(error); // Failure
    });
}

init();
