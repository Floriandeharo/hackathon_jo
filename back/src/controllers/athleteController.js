const path = require('path');
const db = require(path.join(__dirname, '../../db'));

exports.getAllAthletes = async (req, res) => {
    try {
      const [athletes] = await db.query('SELECT * FROM olympic_athletes');
      res.json(athletes);
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