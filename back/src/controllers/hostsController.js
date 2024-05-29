const path = require('path');
const db = require(path.join(__dirname, '../../db'));

// Fonction pour obtenir tous les hosts
exports.getAllHosts = async (req, res) => {
  try {
    console.log('Fetching hosts')
    const [hosts] = await db.query('SELECT * FROM olympic_hosts');
    res.json(hosts);
  } catch (error) {
    console.error('Error fetching hosts:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Fonction pour obtenir un host par id
exports.getHostById = async (req, res) => {
    const hostId = req.params.id;
    try {
        const [host] = await db.query('SELECT * FROM olympic_hosts WHERE id = ?', [hostId]);
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
