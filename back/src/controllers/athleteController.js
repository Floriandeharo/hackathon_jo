const path = require('path');
const db = require(path.join(__dirname, '../../db'));

exports.getAllAthletes = async (req, res) => {
    try {
        let { page = 1, limit = 10 } = req.query; // Définir des valeurs par défaut
        page = parseInt(page, 10);
        limit = parseInt(limit, 10);

        if (isNaN(page) || page <= 0) {
            page = 1;
        }

        if (isNaN(limit) || limit <= 0) {
            limit = 10;
        }

        const startIndex = (page - 1) * limit;

        // Sélectionner les athlètes avec pagination
        const [athletes] = await db.query('SELECT * FROM olympic_athletes LIMIT ?, ?', [startIndex, limit]);

        // Obtenez le nombre total d'athlètes pour calculer le nombre de pages
        const [[{ total }]] = await db.query('SELECT COUNT(*) AS total FROM olympic_athletes');
        const totalPages = Math.ceil(total / limit);

        const results = {
            athletes,
            currentPage: page,
            totalPages
        };

        res.json(results);
    } catch (error) {
        console.error('Error fetching athletes:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};


exports.getAthleteById = async (req, res) => {
    try {
      const { id } = req.params;
      const [athlete] = await db.query('SELECT * FROM olympic_athletes WHERE id = ?', [id]);
      if (athlete) {
        res.json(athlete);
      } else {
        res.status(404).json({ message: 'Athlete not found' });
      }
    } catch (error) {
      console.error('Error fetching athlete:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
};

exports.getAthleteParticipation = async (req, res) => {
    try {
        let { page = 1, limit = 20 } = req.query; // Définir des valeurs par défaut
        page = parseInt(page, 10);
        limit = parseInt(limit, 10);

        if (isNaN(page) || page <= 0) {
            page = 1;
        }

        if (isNaN(limit) || limit <= 0) {
            limit = 20;
        }

        const startIndex = (page - 1) * limit;

        const query = 'SELECT athlete_full_name, games_participations, athlete_medals, COUNT(*) AS total_participants FROM olympic_athletes GROUP BY athlete_full_name, games_participations, athlete_medals ORDER BY athlete_full_name, games_participations LIMIT ?, ?';
        const [stats] = await db.query(query, [startIndex, limit]);
        res.json(stats);
    } catch (error) {
        console.error('Error fetching athlete stats:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};