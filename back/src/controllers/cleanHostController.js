const path = require('path');
const db = require(path.join(__dirname, '../../db'));

exports.getAllHosts = async (req, res) => {
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
        const [hosts] = await db.query('SELECT * FROM cleaned_olympic_hosts LIMIT ?, ?', [startIndex, limit]);

        // Obtenez le nombre total d'athlètes pour calculer le nombre de pages
        const [[{ total }]] = await db.query('SELECT COUNT(*) AS total FROM cleaned_olympic_hosts');
        const totalPages = Math.ceil(total / limit);

        const results = {
            hosts,
            currentPage: page,
            totalPages
        };

        res.json(results);
    } catch (error) {
        console.error('Error fetching hosts:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// Fonction pour obtenir un host par id
exports.getHostById = async (req, res) => {
    const hostId = req.params.id;
    try {
        const [host] = await db.query('SELECT * FROM cleaned_olympic_hosts WHERE id = ?', [hostId]);
        if (host.length > 0) {
            res.json(host[0]);
        } else {
            res.status(404).json({ message: `Host with id ${hostId} not found` });
        }
    } catch (error) {
        console.error('Error fetching host by id:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
