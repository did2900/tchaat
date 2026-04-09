<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>Inscription utilisateur</title>
  <style>
    body {
      font-family: Arial;
      background: #1e293b;
      color: white;
      text-align: center;
      padding: 40px;
    }
    input, select, button {
      padding: 10px;
      margin: 10px;
      font-size: 16px;
      border-radius: 5px;
      border: none;
    }
    button {
      background: #22c55e;
      color: white;
      cursor: pointer;
    }
    .card {
      background: #334155;
      margin: 10px auto;
      padding: 15px;
      border-radius: 10px;
      width: 300px;
    }
  </style>
</head>
<body>

  <h1>👤 Inscription</h1>

  <input type="text" id="pseudo" placeholder="Pseudo"><br>
  <input type="number" id="age" placeholder="Âge"><br>

  <select id="sexe">
    <option value="">Choisir le sexe</option>
    <option value="Homme">Homme</option>
    <option value="Femme">Femme</option>
  </select><br>

  <input type="text" id="ville" placeholder="Ville"><br>

  <button onclick="ajouterUtilisateur()">Ajouter</button>

  <h2>📋 Liste des utilisateurs</h2>
  <div id="liste"></div>

  <script>
    let utilisateurs = [];

    function ajouterUtilisateur() {
      const pseudo = document.getElementById('pseudo').value;
      const age = document.getElementById('age').value;
      const sexe = document.getElementById('sexe').value;
      const ville = document.getElementById('ville').value;

      if (!pseudo || !age || !sexe || !ville) {
        alert("Merci de remplir tous les champs !");
        return;
      }

      const user = { pseudo, age, sexe, ville };
      utilisateurs.push(user);

      afficherUtilisateurs();

      // reset champs
      document.getElementById('pseudo').value = "";
      document.getElementById('age').value = "";
      document.getElementById('sexe').value = "";
      document.getElementById('ville').value = "";
    }

    function afficherUtilisateurs() {
      const liste = document.getElementById('liste');
      liste.innerHTML = "";

      utilisateurs.forEach(u => {
        liste.innerHTML += `
          <div class="card">
            <strong>${u.pseudo}</strong><br>
            Âge : ${u.age}<br>
            Sexe : ${u.sexe}<br>
            Ville : ${u.ville}
          </div>
        `;
      });
    }
  </script>

</body>
</html>
