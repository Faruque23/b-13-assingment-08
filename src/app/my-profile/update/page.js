"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useAuth } from "../../../components/AuthProvider";
import ProtectedRoute from "../../../components/ProtectedRoute";

export default function UpdateProfilePage() {
  const router = useRouter();
  const { user, updateUserProfile, showToast } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") || "").trim();
    const image = String(formData.get("image") || "").trim();

    try {
      await updateUserProfile({ name, photoUrl: image });
      showToast("Profile updated successfully.");
      router.push("/my-profile");
    } catch (caughtError) {
      const message = caughtError?.message || "Could not update profile.";
      setError(message);
      showToast(message, "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-10 sm:px-6 lg:px-8">
      <ProtectedRoute>
        <section className="animate__animated animate__fadeIn rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h1 className="text-3xl font-black tracking-tight text-slate-900">Update Information</h1>
          <p className="mt-2 text-sm text-slate-600">
            Update your name and profile image. This uses a user-update flow similar
            to update-user concepts.
          </p>

          <form className="mt-6 grid gap-4" onSubmit={handleSubmit}>
            <label className="grid gap-2 text-sm font-semibold text-slate-700">
              Name
              <input
                type="text"
                name="name"
                defaultValue={user?.name || ""}
                required
                className="rounded-xl border border-slate-300 px-4 py-2.5 text-sm font-medium text-slate-800 outline-none ring-emerald-500 focus:ring-2"
              />
            </label>

            <label className="grid gap-2 text-sm font-semibold text-slate-700">
              Image
              <input
                type="url"
                name="image"
                defaultValue={user?.photoUrl || ""}
                required
                className="rounded-xl border border-slate-300 px-4 py-2.5 text-sm font-medium text-slate-800 outline-none ring-emerald-500 focus:ring-2"
              />
            </label>

            {error ? <p className="text-sm font-medium text-rose-600">{error}</p> : null}

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-1 w-fit rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting ? "Updating..." : "Update Information"}
            </button>
          </form>
        </section>
      </ProtectedRoute>
    </main>
  );
}
