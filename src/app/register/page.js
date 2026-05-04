"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useAuth } from "../../components/AuthProvider";

export default function RegisterPage() {
  const router = useRouter();
  const { register, loginWithGoogle, showToast } = useAuth();
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleRegister = async (event) => {
    event.preventDefault();
    setError("");
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") || "");
    const email = String(formData.get("email") || "");
    const photoUrl = String(formData.get("photoUrl") || "");
    const password = String(formData.get("password") || "");

    try {
      await register({ name, email, photoUrl, password });
      showToast("Registration successful. Please login.");
      router.push("/login");
    } catch (caughtError) {
      const message = caughtError?.message || "Registration failed. Please try again.";
      setError(message);
      showToast(message, "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleGoogleLogin = async () => {
    setError("");
    setIsSubmitting(true);

    try {
      await loginWithGoogle();
      showToast("Google login successful.");
      router.push("/");
    } catch {
      const message = "Google login failed. Please try again.";
      setError(message);
      showToast(message, "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <section className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-8">
        <h1 className="text-3xl font-black tracking-tight text-slate-900">Registration</h1>

        <form className="mt-6 grid gap-4" onSubmit={handleRegister}>
          <label className="grid gap-2 text-sm font-semibold text-slate-700">
            Name
            <input
              type="text"
              name="name"
              required
              placeholder="Enter your name"
              className="rounded-xl border border-slate-300 px-4 py-2.5 text-sm font-medium text-slate-800 outline-none ring-emerald-500 focus:ring-2"
            />
          </label>

          <label className="grid gap-2 text-sm font-semibold text-slate-700">
            Email
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              className="rounded-xl border border-slate-300 px-4 py-2.5 text-sm font-medium text-slate-800 outline-none ring-emerald-500 focus:ring-2"
            />
          </label>

          <label className="grid gap-2 text-sm font-semibold text-slate-700">
            Photo-url(link)
            <input
              type="url"
              name="photoUrl"
              placeholder="https://example.com/photo.jpg"
              className="rounded-xl border border-slate-300 px-4 py-2.5 text-sm font-medium text-slate-800 outline-none ring-emerald-500 focus:ring-2"
            />
          </label>

          <label className="grid gap-2 text-sm font-semibold text-slate-700">
            Password
            <input
              type="password"
              name="password"
              required
              placeholder="Create a password"
              className="rounded-xl border border-slate-300 px-4 py-2.5 text-sm font-medium text-slate-800 outline-none ring-emerald-500 focus:ring-2"
            />
          </label>

          {error ? <p className="text-sm font-medium text-rose-600">{error}</p> : null}

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-1 rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? "Registering..." : "Register"}
          </button>
        </form>

        <button
          type="button"
          onClick={handleGoogleLogin}
          disabled={isSubmitting}
          className="mt-4 w-full rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:border-slate-400 hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-70"
        >
          Continue with Google
        </button>

        <p className="mt-5 text-sm text-slate-600">
          Already have an account?{" "}
          <Link href="/login" className="font-semibold text-emerald-700 hover:text-emerald-800">
            Login
          </Link>
        </p>
      </section>
    </main>
  );
}
