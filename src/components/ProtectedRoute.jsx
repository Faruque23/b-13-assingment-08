"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuth } from "./AuthProvider";

export default function ProtectedRoute({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  const { user, isBootstrapped } = useAuth();

  useEffect(() => {
    if (!isBootstrapped) {
      return;
    }

    if (!user) {
      const nextPath = encodeURIComponent(pathname || "/");
      router.replace(`/login?next=${nextPath}`);
    }
  }, [user, isBootstrapped, pathname, router]);

  if (!isBootstrapped) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-6 text-sm font-semibold text-slate-600">
        Checking authentication...
      </div>
    );
  }

  if (!user) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-6 text-sm font-semibold text-slate-600">
        Redirecting to login...
      </div>
    );
  }

  return children;
}
