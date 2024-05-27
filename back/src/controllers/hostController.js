// Exemples de données (vous pouvez remplacer ceci par une base de données)
const hosts = [
    {
      id: 1,
      game_slug: "beijing-2022",
      game_end_date: "2022-02-20T12:00:00Z",
      game_start_date: "2022-02-04T15:00:00Z",
      game_location: "China",
      game_name: "Beijing 2022",
      game_season: "Winter",
      game_year: 2022
    },
    {
      id: 2,
      game_slug: "tokyo-2020",
      game_end_date: "2021-08-08T14:00:00Z",
      game_start_date: "2021-07-23T11:00:00Z",
      game_location: "Japan",
      game_name: "Tokyo 2020",
      game_season: "Summer",
      game_year: 2020
    }
  ];
  
  // Fonction pour obtenir tous les hôtes
  exports.getAllHosts = (req, res) => {
    res.json(hosts);
  };
  
  // Fonction pour obtenir un hôte par ID
  exports.getHostById = (req, res) => {
    const hostId = parseInt(req.params.id, 10);
    const host = hosts.find(h => h.id === hostId);
    if (host) {
      res.json(host);
    } else {
      res.status(404).json({ message: `Host with ID ${hostId} not found` });
    }
  };
  
  // Fonction pour créer un nouvel hôte
  exports.createHost = (req, res) => {
    const newHost = req.body;
    newHost.id = hosts.length + 1; // Assignation d'un nouvel ID
    hosts.push(newHost);
    res.status(201).json(newHost);
  };
  
  // Fonction pour mettre à jour un hôte
  exports.updateHost = (req, res) => {
    const hostId = parseInt(req.params.id, 10);
    const index = hosts.findIndex(h => h.id === hostId);
    if (index !== -1) {
      hosts[index] = { ...hosts[index], ...req.body };
      res.json(hosts[index]);
    } else {
      res.status(404).json({ message: `Host with ID ${hostId} not found` });
    }
  };
  
  // Fonction pour supprimer un hôte
  exports.deleteHost = (req, res) => {
    const hostId = parseInt(req.params.id, 10);
    const index = hosts.findIndex(h => h.id === hostId);
    if (index !== -1) {
      const deletedHost = hosts.splice(index, 1);
      res.json(deletedHost[0]);
    } else {
      res.status(404).json({ message: `Host with ID ${hostId} not found` });
    }
  };
  