// client/src/hooks/UseAuth.jsx

import { authStore } from '@/stores/auth.store';
import { useEffect, useTransition } from 'react';
import { authService } from '@/services/auth.service';

export function useAuth() {
  const isAuthenticated = authStore((state) => state.isAuthenticated);
  const setUser = authStore((state) => state.setUser);
  const token = authStore((state) => state.token);
  const logout = authStore((state) => state.logout);
  const user = authStore((state) => state.user);

  const [loading, startTransition] = useTransition();

  useEffect(() => {
    if (token && !user) {
      startTransition(async () => {
        await authService.getCurrentUser();
      });
    }
  }, [token, user, setUser]);

  return { isAuthenticated, user, logout, loading };
}
