// Exemples de données (vous pouvez remplacer ceci par une base de données)
const results = [
    {
      id: 1,
      discipline_title: "Freestyle Skiing",
      event_title: "Men's Moguls",
      slug_game: "beijing-2022",
      participant_type: "Athlete",
      medal_type: "",
      athletes: [
        {
          athlete_url: "https://olympics.com/en/athletes/cooper-woods-topalovic",
          athlete_full_name: "Cooper WOODS-TOPALOVIC",
        }
      ],
      rank_equal: false,
      rank_position: 6,
      country_name: "Australia",
      country_code: "AU",
      country_3_letter_code: "AUS",
      value_unit: "76.74",
      value_type: "POINTS"
    }
  ];
  
  // Fonction pour obtenir tous les résultats
  exports.getAllResults = (req, res) => {
    res.json(results);
  };
  
  // Fonction pour obtenir un résultat par ID
  exports.getResultById = (req, res) => {
    const resultId = parseInt(req.params.id, 10);
    const result = results.find(r => r.id === resultId);
    if (result) {
      res.json(result);
    } else {
      res.status(404).json({ message: `Result with ID ${resultId} not found` });
    }
  };
  
  // Fonction pour créer un nouveau résultat
  exports.createResult = (req, res) => {
    const newResult = req.body;
    newResult.id = results.length + 1; // Assignation d'un nouvel ID
    results.push(newResult);
    res.status(201).json(newResult);
  };
  
  // Fonction pour mettre à jour un résultat
  exports.updateResult = (req, res) => {
    const resultId = parseInt(req.params.id, 10);
    const index = results.findIndex(r => r.id === resultId);
    if (index !== -1) {
      results[index] = { ...results[index], ...req.body };
      res.json(results[index]);
    } else {
      res.status(404).json({ message: `Result with ID ${resultId} not found` });
    }
  };
  
  // Fonction pour supprimer un résultat
  exports.deleteResult = (req, res) => {
    const resultId = parseInt(req.params.id, 10);
    const index = results.findIndex(r => r.id === resultId);
    if (index !== -1) {
      const deletedResult = results.splice(index, 1);
      res.json(deletedResult[0]);
    } else {
      res.status(404).json({ message: `Result with ID ${resultId} not found` });
    }
  };
  