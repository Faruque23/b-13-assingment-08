"use client";

import { useMemo, useState } from "react";

const animals = [
  {
    id: "sahiwal-bull",
    name: "Sahiwal Bull",
    breed: "Sahiwal",
    age: "3 years",
    weight: "520 kg",
    location: "Rajshahi",
    price: 125000,
    tone: "from-amber-100 to-orange-100",
  },
  {
    id: "friesian-cow",
    name: "Friesian Cow",
    breed: "Friesian",
    age: "2.5 years",
    weight: "470 kg",
    location: "Sirajganj",
    price: 110000,
    tone: "from-cyan-100 to-sky-100",
  },
  {
    id: "deshi-black",
    name: "Deshi Black",
    breed: "Deshi",
    age: "2 years",
    weight: "390 kg",
    location: "Bogura",
    price: 95000,
    tone: "from-emerald-100 to-green-100",
  },
  {
    id: "red-chittagong",
    name: "Red Chittagong",
    breed: "Red Chittagong",
    age: "3.2 years",
    weight: "540 kg",
    location: "Chattogram",
    price: 135000,
    tone: "from-rose-100 to-pink-100",
  },
  {
    id: "brahman-prime",
    name: "Brahman Prime",
    breed: "Brahman",
    age: "3.5 years",
    weight: "580 kg",
    location: "Pabna",
    price: 145000,
    tone: "from-indigo-100 to-blue-100",
  },
  {
    id: "local-white",
    name: "Local White",
    breed: "Deshi",
    age: "2.1 years",
    weight: "420 kg",
    location: "Mymensingh",
    price: 98000,
    tone: "from-lime-100 to-emerald-100",
  },
];

const formatPrice = (amount) =>
  new Intl.NumberFormat("en-BD", {
    style: "currency",
    currency: "BDT",
    maximumFractionDigits: 0,
  }).format(amount);

export default function AllAnimalsPage() {
  const [sortBy, setSortBy] = useState("lowToHigh");

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
          <p className="text-sm font-semibold text-slate-700">
            Total animals: {sortedAnimals.length}
          </p>

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
                  <button
                    type="button"
                    className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition-all hover:border-emerald-500 hover:text-emerald-700"
                  >
                    Details
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
