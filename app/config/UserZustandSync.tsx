'use client';

import { useEffect } from 'react';
import { useUser } from '@/app/hooks/useUser';
import { useUserStore } from '@/app/store/userStore';

export function UserZustandSync() {
  const { data: user } = useUser();
  console.log("user data:" ,user)
  const setUser = useUserStore(state => state.setUser);

  useEffect(() => {
    if (user) setUser(user);
  }, [user, setUser]);

  return null;
}
