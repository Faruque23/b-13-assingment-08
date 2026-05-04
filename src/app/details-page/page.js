"use client";

import Link from "next/link";
import ProtectedRoute from "../../components/ProtectedRoute";

export default function DetailsLandingPage() {
  return (
    <main className="mx-auto w-full max-w-4xl flex-1 px-4 py-10 sm:px-6 lg:px-8">
      <ProtectedRoute>
        <section className="animate__animated animate__fadeIn rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm">
          <h1 className="text-3xl font-black tracking-tight text-slate-900">Details Page</h1>
          <p className="mt-3 text-sm text-slate-600 sm:text-base">
            Please choose an animal from the All Animals page to view complete
            private details and booking options.
          </p>
          <Link
            href="/animals"
            className="mt-6 inline-flex rounded-full bg-emerald-600 px-6 py-2.5 text-sm font-bold text-white transition-colors hover:bg-emerald-700"
          >
            Go to All Animals
          </Link>
        </section>
      </ProtectedRoute>
    </main>
  );
}
