"use client";

import Link from "next/link";
import { useAuth } from "../../../components/AuthProvider";

export default function BookingPanel({ animalName }) {
  const { user, showToast } = useAuth();
  const isLoggedIn = Boolean(user);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    form.reset();
    showToast("Booking submitted successfully.");
  };

  return (
    <section className="relative rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <h2 className="text-2xl font-black tracking-tight text-slate-900">Book This Animal</h2>
      <p className="mt-2 text-sm text-slate-600">
        Complete the booking form for {animalName}. Data is not saved in database
        or local storage.
      </p>

      {!isLoggedIn ? (
        <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
          <p className="text-sm font-semibold text-amber-800">
            Login required to submit a booking request.
          </p>
          <Link
            href="/login"
            className="mt-4 rounded-full bg-amber-600 px-5 py-2 text-sm font-bold text-white transition-colors hover:bg-amber-700"
          >
            Login to Continue
          </Link>
        </div>
      ) : (
        <form className="mt-6 grid gap-4" onSubmit={handleSubmit}>
          <label className="grid gap-2 text-sm font-semibold text-slate-700">
            Name
            <input
              type="text"
              defaultValue={user?.name || ""}
              required
              placeholder="Enter your full name"
              className="rounded-xl border border-slate-300 px-4 py-2.5 text-sm font-medium text-slate-800 outline-none ring-emerald-500 focus:ring-2"
            />
          </label>

          <label className="grid gap-2 text-sm font-semibold text-slate-700">
            Email
            <input
              type="email"
              defaultValue={user?.email || ""}
              required
              placeholder="Enter your email"
              className="rounded-xl border border-slate-300 px-4 py-2.5 text-sm font-medium text-slate-800 outline-none ring-emerald-500 focus:ring-2"
            />
          </label>

          <label className="grid gap-2 text-sm font-semibold text-slate-700">
            Phone
            <input
              type="tel"
              required
              placeholder="Enter your phone number"
              className="rounded-xl border border-slate-300 px-4 py-2.5 text-sm font-medium text-slate-800 outline-none ring-emerald-500 focus:ring-2"
            />
          </label>

          <label className="grid gap-2 text-sm font-semibold text-slate-700">
            Address
            <textarea
              required
              rows={3}
              placeholder="Enter your address"
              className="resize-none rounded-xl border border-slate-300 px-4 py-2.5 text-sm font-medium text-slate-800 outline-none ring-emerald-500 focus:ring-2"
            />
          </label>

          <button
            type="submit"
            className="mt-1 inline-flex w-fit rounded-full bg-emerald-600 px-6 py-2.5 text-sm font-bold text-white transition-colors hover:bg-emerald-700"
          >
            Submit Booking
          </button>
        </form>
      )}
    </section>
  );
}
