// client/src/stores/auth.store.js

import { env } from '@/configs/env.config';
import { create } from 'zustand';
import { persist, devtools } from 'zustand/middleware';

const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
};

const createAuthStore = (set) => ({
  ...initialState,
  setUser: (user) => set({ user, isAuthenticated: !!user }),
  setToken: (token) => set({ token, isAuthenticated: !!token }),
  logout: () => set(initialState),
});

const persistConfig = {
  name: 'auth-token',
  partialize: (state) => ({
    token: state.token,
  }),
};

const devtoolsConfig = {
  name: 'auth-store',
  disable: env.VITE_NODE_ENV === 'production',
};

export const authStore = create(
  devtools(persist(createAuthStore, persistConfig), devtoolsConfig)
);
