"use client";

import Link from "next/link";
import ProtectedRoute from "../../components/ProtectedRoute";
import { useAuth } from "../../components/AuthProvider";

export default function MyProfilePage() {
  const { user } = useAuth();

  return (
    <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-10 sm:px-6 lg:px-8">
      <ProtectedRoute>
        <section className="animate__animated animate__fadeInUp rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h1 className="text-3xl font-black tracking-tight text-slate-900">My Profile</h1>

          <div className="mt-6 grid gap-6 sm:grid-cols-[120px_1fr] sm:items-center">
            <img
              src={user?.photoUrl || "https://i.ibb.co/G0B9vfk/default-avatar.png"}
              alt="Profile"
              className="h-28 w-28 rounded-full border border-slate-200 object-cover"
            />

            <dl className="grid gap-2 text-sm text-slate-700">
              <div>
                <dt className="font-semibold">Name</dt>
                <dd>{user?.name || "N/A"}</dd>
              </div>
              <div>
                <dt className="font-semibold">Email</dt>
                <dd>{user?.email || "N/A"}</dd>
              </div>
            </dl>
          </div>

          <Link
            href="/my-profile/update"
            className="mt-6 inline-flex rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-emerald-700"
          >
            Update Information
          </Link>
        </section>
      </ProtectedRoute>
    </main>
  );
}
