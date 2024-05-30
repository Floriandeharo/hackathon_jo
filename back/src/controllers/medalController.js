const path = require('path');
const db = require(path.join(__dirname, '../../db'));

exports.getAllMedals = async (req, res) => {
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
      const [medals] = await db.query('SELECT * FROM olympic_medals LIMIT ?, ?', [startIndex, limit]);

      // Obtenez le nombre total d'athlètes pour calculer le nombre de pages
      const [[{ total }]] = await db.query('SELECT COUNT(*) AS total FROM olympic_medals');
      const totalPages = Math.ceil(total / limit);

      const results = {
          medals,
          currentPage: page,
          totalPages
      };

      res.json(results);
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

exports.GoldMedalByCountry = async (req, res) => {
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
    const [medals] = await db.query(`
      SELECT country_name, country_code, country_3_letter_code, COUNT(*) AS gold_medals
      FROM olympic_medals
      WHERE medal_type = 'GOLD'
      GROUP BY country_name, country_code, country_3_letter_code
      ORDER BY gold_medals DESC
      LIMIT ?, ?
    `, [startIndex, limit]);

    const [[{ total }]] = await db.query(`
      SELECT COUNT(*) AS total
      FROM olympic_medals
      WHERE medal_type = 'GOLD'
      GROUP BY country_name, country_code, country_3_letter_code
    `);
    const totalPages = Math.ceil(total / limit);

    const results = {
      medals,
      currentPage: page,
      totalPages
    };

    res.json(results);
  } catch (error) {
    console.error('Error fetching medals:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};



exports.MedalByCountry = async (req, res) => {
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
    const [medals] = await db.query(`
    SELECT country_name, COUNT(*) AS total_medals FROM olympic_medals GROUP BY country_name ORDER BY total_medals DESC LIMIT ?, ?`, [startIndex, limit]);

    const [[{ total }]] = await db.query(`
      SELECT COUNT(*) AS total
      FROM olympic_medals
      GROUP BY country_name, country_code, country_3_letter_code
    `);
    const totalPages = Math.ceil(total / limit);

    const results = {
      medals,
      currentPage: page,
      totalPages
    };

    res.json(results);
  } catch (error) {
    console.error('Error fetching medals:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};



exports.MedalByDiscipline = async (req, res) => {
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
    const [medals] = await db.query(`
    SELECT discipline_title, COUNT(*) AS total_medals FROM olympic_medals GROUP BY discipline_title ORDER BY total_medals DESC LIMIT ?, ?`, [startIndex, limit]);

    const [[{ total }]] = await db.query(`
      SELECT COUNT(*) AS total
      FROM olympic_medals
      GROUP BY discipline_title
    `);
    const totalPages = Math.ceil(total / limit);

    const results = {
      medals,
      currentPage: page,
      totalPages
    };

    res.json(results);
  } catch (error) {
    console.error('Error fetching medals:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

exports.MedalByAthlete = async (req, res) => {
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
    const [medals] = await db.query(`
    SELECT athlete_full_name, COUNT(*) AS total_medals FROM olympic_medals GROUP BY athlete_full_name ORDER BY total_medals DESC LIMIT ?, ?`, [startIndex, limit]);

    const [[{ total }]] = await db.query(`
      SELECT COUNT(*) AS total
      FROM olympic_medals
      GROUP BY athlete_full_name
    `);
    const totalPages = Math.ceil(total / limit);

    const results = {
      medals,
      currentPage: page,
      totalPages
    };

    res.json(results);
  } catch (error) {
    console.error('Error fetching medals:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};


exports.getMedalsByYear = async (req, res) => {
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
    const [medals] = await db.query(`
      SELECT h.game_year, COUNT(*) AS total_medals
      FROM olympic_medals m
      JOIN olympic_hosts h ON m.slug_game = h.game_slug
      GROUP BY h.game_year
      ORDER BY h.game_year
      LIMIT ?, ?
    `, [startIndex, limit]);

    const [[{ total }]] = await db.query(`
      SELECT COUNT(*) AS total
      FROM olympic_medals m
      JOIN olympic_hosts h ON m.slug_game = h.game_slug
      GROUP BY h.game_year
    `);
    const totalPages = Math.ceil(total / limit);

    const results = {
      medals,
      currentPage: page,
      totalPages
    };

    res.json(results);
  } catch (error) {
    console.error('Error fetching medals by year:', error);
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

