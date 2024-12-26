// src/features/userActions.js
import { setUser, setLoading, setError } from './userSlice';
import axios from 'axios';

export const registerUser = (userData) => async (dispatch) => {
  dispatch(setLoading(true)); // Début du chargement
  try {
    const response = await axios.post('/api/register', userData); // Assurez-vous que l'API d'inscription existe
    dispatch(setUser({ name: response.data.name, email: response.data.email }));
  } catch (error) {
    dispatch(setError('Une erreur est survenue. Veuillez réessayer.'));
  } finally {
    dispatch(setLoading(false)); // Fin du chargement
  }
};
