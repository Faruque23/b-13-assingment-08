"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

const AuthContext = createContext(null);

const USERS_STORAGE_KEY = "qurbanihat_users";
const AUTH_STORAGE_KEY = "qurbanihat_auth_user";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const defaultUsers = [
  {
    name: "Demo User",
    email: "demo@qurbanihat.com",
    password: "123456",
    photoUrl: "",
  },
];

function parseStorageValue(value, fallbackValue) {
  try {
    const parsed = JSON.parse(value);
    return parsed ?? fallbackValue;
  } catch {
    return fallbackValue;
  }
}

export default function AuthProvider({ children }) {
  const [users, setUsers] = useState(defaultUsers);
  const [user, setUser] = useState(null);
  const [isBootstrapped, setIsBootstrapped] = useState(false);
  const [toast, setToast] = useState(null);
  const toastTimerRef = useRef(null);

  useEffect(() => {
    const storedUsers = localStorage.getItem(USERS_STORAGE_KEY);
    const storedUser = localStorage.getItem(AUTH_STORAGE_KEY);

    if (storedUsers) {
      setUsers(parseStorageValue(storedUsers, defaultUsers));
    }
    if (storedUser) {
      setUser(parseStorageValue(storedUser, null));
    }

    setIsBootstrapped(true);
  }, []);

  useEffect(() => {
    return () => {
      if (toastTimerRef.current) {
        clearTimeout(toastTimerRef.current);
      }
    };
  }, []);

  const showToast = useCallback((message, type = "success") => {
    if (toastTimerRef.current) {
      clearTimeout(toastTimerRef.current);
    }

    setToast({ message, type });
    toastTimerRef.current = setTimeout(() => {
      setToast(null);
    }, 2500);
  }, []);

  const register = useCallback(
    async ({ name, email, photoUrl, password }) => {
      await delay(700);

      const normalizedEmail = email.trim().toLowerCase();
      const alreadyExists = users.some(
        (existingUser) => existingUser.email.toLowerCase() === normalizedEmail
      );

      if (alreadyExists) {
        throw new Error("This email is already registered.");
      }

      const nextUser = {
        name: name.trim(),
        email: normalizedEmail,
        password,
        photoUrl: photoUrl.trim(),
      };

      const nextUsers = [...users, nextUser];
      setUsers(nextUsers);
      localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(nextUsers));
    },
    [users]
  );

  const login = useCallback(
    async ({ email, password }) => {
      await delay(700);

      const normalizedEmail = email.trim().toLowerCase();
      const existingUser = users.find(
        (item) => item.email.toLowerCase() === normalizedEmail && item.password === password
      );

      if (!existingUser) {
        throw new Error("Invalid email or password.");
      }

      const sessionUser = {
        name: existingUser.name,
        email: existingUser.email,
        photoUrl: existingUser.photoUrl,
      };

      setUser(sessionUser);
      localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(sessionUser));
      return sessionUser;
    },
    [users]
  );

  const loginWithGoogle = useCallback(async () => {
    await delay(600);

    const googleUser = {
      name: "Google User",
      email: "google-user@qurbanihat.com",
      photoUrl: "",
    };

    setUser(googleUser);
    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(googleUser));
    return googleUser;
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    localStorage.removeItem(AUTH_STORAGE_KEY);
  }, []);

  const value = useMemo(
    () => ({
      user,
      isBootstrapped,
      register,
      login,
      loginWithGoogle,
      logout,
      showToast,
    }),
    [user, isBootstrapped, register, login, loginWithGoogle, logout, showToast]
  );

  return (
    <AuthContext.Provider value={value}>
      {children}
      {toast ? (
        <div
          className={`fixed bottom-5 right-5 z-999 rounded-xl px-4 py-3 text-sm font-semibold text-white shadow-lg ${
            toast.type === "error" ? "bg-rose-600" : "bg-emerald-600"
          }`}
        >
          {toast.message}
        </div>
      ) : null}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within AuthProvider.");
  }

  return context;
}
