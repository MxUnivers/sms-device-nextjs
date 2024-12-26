// src/features/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  email: '',
  isAuthenticated: false,
  loading: false, // Ajoutons un état de chargement pour gérer les actions asynchrones
  error: null, // Gérer les erreurs
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // Action pour enregistrer un utilisateur
    setUser: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.isAuthenticated = true;
    },
    // Action pour mettre à jour l'utilisateur
    updateUser: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
    // Action pour la déconnexion
    logout: (state) => {
      state.name = '';
      state.email = '';
      state.isAuthenticated = false;
    },
    // Action pour gérer le statut de chargement
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    // Action pour gérer les erreurs
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

// Export des actions
export const { setUser, updateUser, logout, setLoading, setError } = userSlice.actions;

export default userSlice.reducer;
