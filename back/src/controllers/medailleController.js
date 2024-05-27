exports.getAllMedals = (req, res) => {
    // Logique pour récupérer toutes les médailles
    res.json({ message: 'List of all medals' });
  };
  
  exports.getMedalById = (req, res) => {
    const medalId = req.params.id;
    // Logique pour récupérer une médaille par ID
    res.json({ message: `Medal with ID ${medalId}` });
  };
  
  exports.createMedal = (req, res) => {
    const newMedal = req.body;
    // Logique pour créer une nouvelle médaille
    res.json({ message: 'Medal created', medal: newMedal });
  };
  
  exports.updateMedal = (req, res) => {
    const medalId = req.params.id;
    const updatedMedal = req.body;
    // Logique pour mettre à jour une médaille existante
    res.json({ message: `Medal with ID ${medalId} updated`, medal: updatedMedal });
  };
  
  exports.deleteMedal = (req, res) => {
    const medalId = req.params.id;
    // Logique pour supprimer une médaille
    res.json({ message: `Medal with ID ${medalId} deleted` });
  };
  