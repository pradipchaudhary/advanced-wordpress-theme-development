import { useState } from "react";

export function useAuth() {
    const [auth, setAuth] = useState(false);

    const login = () => setAuth(true);
    const logout = () => setAuth(false);

    return { auth, login, logout };
}
