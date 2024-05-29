const path = require('path');
const db = require(path.join(__dirname, '../../db'));

exports.getAllMedals = async (req, res) => {
  try {
    const medals = await db.query('SELECT * FROM olympic_medals');
    res.json(medals);
  } catch (error) {
    console.error('Error fetching medals:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

exports.getMedalById = async (req, res) => {
  try {
    const medalId = req.params.id;
    const medal = await db.query('SELECT * FROM olympic_medals WHERE id = ?', [medalId]);
    if (medal.length === 0) {
      return res.status(404).json({ message: 'Medal not found' });
    }
    res.json(medal[0]);
  } catch (error) {
    console.error('Error fetching medal:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// exports.createMedal = async (req, res) => {
//   try {
//     const newMedal = req.body;
//     const result = await db.query('INSERT INTO olympic_medals SET ?', [newMedal]);
//     res.json({ message: 'Medal created', medalId: result.insertId });
//   } catch (error) {
//     console.error('Error creating medal:', error);
//     res.status(500).json({ message: 'Internal Server Error' });
//   }
// };

// exports.updateMedal = async (req, res) => {
//   try {
//     const medalId = req.params.id;
//     const updatedMedal = req.body;
//     const result = await db.query('UPDATE olympic_medals SET ? WHERE id = ?', [updatedMedal, medalId]);
//     if (result.affectedRows === 0) {
//       return res.status(404).json({ message: 'Medal not found' });
//     }
//     res.json({ message: `Medal with ID ${medalId} updated` });
//   } catch (error) {
//     console.error('Error updating medal:', error);
//     res.status(500).json({ message: 'Internal Server Error' });
//   }
// };

// exports.deleteMedal = async (req, res) => {
//   try {
//     const medalId = req.params.id;
//     const result = await db.query('DELETE FROM olympic_medals WHERE id = ?', [medalId]);
//     if (result.affectedRows === 0) {
//       return res.status(404).json({ message: 'Medal not found' });
//     }
//     res.json({ message: `Medal with ID ${medalId} deleted` });
//   } catch (error) {
//     console.error('Error deleting medal:', error);
//     res.status(500).json({ message: 'Internal Server Error' });
//   }
// };

