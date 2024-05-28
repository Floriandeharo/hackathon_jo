// Exemples de données (vous pouvez remplacer ceci par une base de données)
const athletes = [
    {
      id: 1,
      athlete_url: "https://example.com/athlete1",
      athlete_full_name: "John Doe",
      games_participations: 3,
      first_game: "2008 Beijing",
      athlete_year_birth: 1985
    },
    {
      id: 2,
      athlete_url: "https://example.com/athlete2",
      athlete_full_name: "Jane Smith",
      games_participations: 2,
      first_game: "2012 London",
      athlete_year_birth: 1988
    },
    {
      id: 3,
      athlete_url: "https://example.com/athlete3",
      athlete_full_name: "Cooper WOODS-TOPALOVIC",
      games_participations: 1,
      first_game: "2016 Rio",
      athlete_year_birth: 1992
    }
  ];
  
  // Fonction pour obtenir tous les athlètes
  exports.getAllAthletes = (req, res) => {
    res.json(athletes);
  };
  
  // Fonction pour obtenir un athlète par ID
  exports.getAthleteById = (req, res) => {
    const athleteId = parseInt(req.params.id, 10);
    const athlete = athletes.find(a => a.id === athleteId);
    if (athlete) {
      res.json(athlete);
    } else {
      res.status(404).json({ message: `Athlete with ID ${athleteId} not found` });
    }
  };
  
  // Fonction pour créer un nouvel athlète
  exports.createAthlete = (req, res) => {
    const newAthlete = req.body;
    newAthlete.id = athletes.length + 1; // Assignation d'un nouvel ID
    athletes.push(newAthlete);
    res.status(201).json(newAthlete);
  };
  
  // Fonction pour mettre à jour un athlète
  exports.updateAthlete = (req, res) => {
    const athleteId = parseInt(req.params.id, 10);
    const index = athletes.findIndex(a => a.id === athleteId);
    if (index !== -1) {
      athletes[index] = { ...athletes[index], ...req.body };
      res.json(athletes[index]);
    } else {
      res.status(404).json({ message: `Athlete with ID ${athleteId} not found` });
    }
  };
  
  // Fonction pour supprimer un athlète
  exports.deleteAthlete = (req, res) => {
    const athleteId = parseInt(req.params.id, 10);
    const index = athletes.findIndex(a => a.id === athleteId);
    if (index !== -1) {
      const deletedAthlete = athletes.splice(index, 1);
      res.json(deletedAthlete[0]);
    } else {
      res.status(404).json({ message: `Athlete with ID ${athleteId} not found` });
    }
  };
  