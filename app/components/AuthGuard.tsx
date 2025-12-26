'use client'

import { useAuth } from "../hooks/useAuth"

const AuthGuard = ({ children }: { children: React.ReactNode }) => {
    useAuth()
    return (
        <div>
            {children}
        </div>
    )
}

export default AuthGuard
