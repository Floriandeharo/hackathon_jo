const path = require('path');
const db = require(path.join(__dirname, '../../db'));

exports.getAllResults = async (req, res) => {
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
        const [result] = await db.query('SELECT * FROM olympic_results LIMIT ?, ?', [startIndex, limit]);

        // Obtenez le nombre total d'athlètes pour calculer le nombre de pages
        const [[{ total }]] = await db.query('SELECT COUNT(*) AS total FROM olympic_results');
        const totalPages = Math.ceil(total / limit);

        const results = {
            result,
            currentPage: page,
            totalPages
        };

        res.json(results);
    } catch (error) {
        console.error('Error fetching results:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

exports.getResultById = async (req, res) => {
    try {
        const { id } = req.params;
        const medal = await db.query('SELECT * FROM olympic_results WHERE id = ?', [id]);
        res.json(medal);
    } catch (error) {
        console.error('Error fetching medal:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// exports.createResult = async (req, res) => {
//     try {
//         const { name, country, medal } = req.body;
//         const result = await db.query('INSERT INTO olympic_results (name, country, medal) VALUES (?, ?, ?)', [name, country, medal]);
//         res.json(result);
//     } catch (error) {
//         console.error('Error creating medal:', error);
//         res.status(500).json({ message: 'Internal Server Error' });
//     }
// };

// exports.updateResult = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const { name, country, medal } = req.body;
//         const result = await db.query('UPDATE olympic_results SET name = ?, country = ?, medal = ? WHERE id = ?', [name, country, medal, id]);
//         res.json(result);
//     } catch (error) {
//         console.error('Error updating medal:', error);
//         res.status(500).json({ message: 'Internal Server Error' });
//     }
// };

// exports.deleteResult = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const result = await db.query('DELETE FROM olympic_results WHERE id = ?', [id]);
//         res.json(result);
//     } catch (error) {
//         console.error('Error deleting medal:', error);
//         res.status(500).json({ message: 'Internal Server Error' });
//     }
// };