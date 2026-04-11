"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"

export interface FiredclayUser {
  name: string
  phone: string
  email?: string
  dob?: string
  gender?: string
}

interface AuthContextValue {
  user: FiredclayUser | null
  login: (user: FiredclayUser) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextValue>({
  user: null,
  login: () => {},
  logout: () => {},
})

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<FiredclayUser | null>(null)

  useEffect(() => {
    try {
      const stored = localStorage.getItem("firedclay_user")
      if (stored) setUser(JSON.parse(stored))
    } catch {}
  }, [])

  const login = (userData: FiredclayUser) => {
    setUser(userData)
    localStorage.setItem("firedclay_user", JSON.stringify(userData))
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("firedclay_user")
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
