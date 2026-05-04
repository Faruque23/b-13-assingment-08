"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { getAnimals } from "../../data/animals";

const formatPrice = (amount) =>
  new Intl.NumberFormat("en-BD", {
    style: "currency",
    currency: "BDT",
    maximumFractionDigits: 0,
  }).format(amount);

export default function AllAnimalsPage() {
  const [animals, setAnimals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortBy, setSortBy] = useState("lowToHigh");

  useEffect(() => {
    let ignoreResult = false;

    const fetchAnimals = async () => {
      setIsLoading(true);
      const response = await getAnimals();

      if (!ignoreResult) {
        setAnimals(response);
        setIsLoading(false);
      }
    };

    fetchAnimals();

    return () => {
      ignoreResult = true;
    };
  }, []);

  const sortedAnimals = useMemo(() => {
    const copiedAnimals = [...animals];
    copiedAnimals.sort((a, b) => {
      if (sortBy === "highToLow") {
        return b.price - a.price;
      }
      return a.price - b.price;
    });
    return copiedAnimals;
  }, [sortBy]);

  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-10 sm:px-6 lg:px-8">
      <section className="rounded-3xl bg-linear-to-r from-slate-900 via-slate-800 to-emerald-900 px-6 py-10 text-white sm:px-10">
        <h1 className="text-3xl font-black tracking-tight sm:text-4xl">All Animals</h1>
        <p className="mt-3 max-w-2xl text-sm text-slate-200 sm:text-base">
          Explore available qurbani animals and sort by price to quickly find the
          right option for your budget.
        </p>
      </section>

      <section className="mt-8">
        <div className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm font-semibold text-slate-700">Total animals: {sortedAnimals.length}</p>

          <label className="flex items-center gap-3 text-sm font-semibold text-slate-700">
            Sort by price
            <select
              className="rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 outline-none ring-emerald-500 focus:ring-2"
              value={sortBy}
              onChange={(event) => setSortBy(event.target.value)}
            >
              <option value="lowToHigh">Low to High</option>
              <option value="highToLow">High to Low</option>
            </select>
          </label>
        </div>

        {isLoading ? (
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <article
                key={`skeleton-${index}`}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
              >
                <div className="h-28 animate-pulse bg-slate-200" />
                <div className="space-y-3 p-5">
                  <div className="h-3 w-20 animate-pulse rounded bg-slate-200" />
                  <div className="h-4 w-40 animate-pulse rounded bg-slate-200" />
                  <div className="h-3 w-full animate-pulse rounded bg-slate-200" />
                  <div className="h-3 w-5/6 animate-pulse rounded bg-slate-200" />
                  <div className="h-3 w-3/4 animate-pulse rounded bg-slate-200" />
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {sortedAnimals.map((animal) => (
              <article
                key={animal.id}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className={`h-28 bg-linear-to-r ${animal.tone}`} />
                <div className="space-y-2 p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                    {animal.breed}
                  </p>
                  <h2 className="text-lg font-extrabold text-slate-900">{animal.name}</h2>
                  <p className="text-sm text-slate-600">Age: {animal.age}</p>
                  <p className="text-sm text-slate-600">Weight: {animal.weight}</p>
                  <p className="text-sm text-slate-600">Location: {animal.location}</p>

                  <div className="mt-4 flex items-center justify-between gap-3">
                    <p className="text-base font-black text-emerald-700">
                      {formatPrice(animal.price)}
                    </p>
                    <Link
                      href={`/details-page/${animal.id}`}
                      className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition-all hover:border-emerald-500 hover:text-emerald-700"
                    >
                      Details
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
