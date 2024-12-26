

// pages/api/register.js
export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { name, email, password } = req.body;
  
      // Effectuer la logique d'inscription (ex. validation et stockage dans la base de données)
      if (!name || !email || !password) {
        return res.status(400).json({ message: 'Tous les champs sont requis' });
      }
  
      // Simuler une inscription réussie
      res.status(200).json({ name, email });
    } else {
      res.status(405).json({ message: 'Méthode non autorisée' });
    }
  }
  