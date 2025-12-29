'use client';

import { useEffect } from 'react';
import { useUser } from '@/app/hooks/useUser';
import { useUserStore } from '@/app/store/userStore';
import { useDocumentStore } from '../store/documentStore';
import { useSummarizeDocument } from '../hooks/useDocuments';

export function UserZustandSync() {
    const { data: user } = useUser();
    const setUser = useUserStore(state => state.setUser);
    console.log("user data:", user)

    useEffect(() => {
        if (user) setUser(user);
    }, [user, setUser,]);

    return null;
}
