import Link from "next/link";

const featuredAnimals = [
  {
    name: "Sahiwal Bull",
    age: "3 years",
    weight: "520 kg",
    location: "Rajshahi",
    price: "BDT 1,25,000",
    imageUrl:
      "https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=1000&q=80",
  },
  {
    name: "Friesian Cow",
    age: "2.5 years",
    weight: "470 kg",
    location: "Sirajganj",
    price: "BDT 1,10,000",
    imageUrl: "/friesian-cow.jpg",
  },
  {
    name: "Deshi Black",
    age: "2 years",
    weight: "390 kg",
    location: "Bogura",
    price: "BDT 95,000",
    imageUrl:
      "https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?auto=format&fit=crop&w=1000&q=80",
  },
  {
    name: "Red Chittagong",
    age: "3.2 years",
    weight: "540 kg",
    location: "Chattogram",
    price: "BDT 1,35,000",
    imageUrl:
      "https://images.unsplash.com/photo-1545468800-85cc9bc6ecf7?auto=format&fit=crop&w=1000&q=80",
  },
];

const qurbaniTips = [
  "Choose healthy animals with bright eyes, active movement, and good appetite.",
  "Confirm age and weight records before booking to avoid mismatch.",
  "Check transport and delivery timing early to reduce last-minute issues.",
  "Keep clean water and shade available after purchase and before qurbani.",
];

const topBreeds = ["Sahiwal", "Friesian", "Deshi", "Red Chittagong", "Brahman"];

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-10 sm:px-6 lg:px-8">
      <section className="relative overflow-hidden rounded-3xl bg-linear-to-br from-emerald-600 via-teal-600 to-cyan-700 px-6 py-14 text-white shadow-xl sm:px-10 lg:px-12">
        <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/20 blur-2xl" />
        <div className="pointer-events-none absolute -bottom-20 left-10 h-56 w-56 rounded-full bg-emerald-300/20 blur-2xl" />

        <div className="relative z-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-100">
            Eid-ul-Adha Special
          </p>
          <h1 className="mt-3 text-3xl font-black leading-tight tracking-tight sm:text-5xl">
            Find trusted qurbani animals from verified farms.
          </h1>
          <p className="mt-4 text-base text-cyan-50 sm:text-lg">
            Explore quality cattle listings with transparent details, fair pricing,
            and doorstep support across Bangladesh.
          </p>
          <Link
            href="/animals"
            className="mt-7 inline-flex rounded-full bg-white px-6 py-3 text-sm font-bold text-emerald-700 transition-all hover:bg-emerald-50"
          >
            Browse Animals
          </Link>
        </div>
      </section>

      <section className="mt-12">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-black tracking-tight text-white hover:text-slate-300">
            Featured Animals
          </h2>
          <Link
            href="/animals"
            className="text-sm font-semibold text-white hover:text-slate-300"
          >
            View all
          </Link>
        </div>

        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featuredAnimals.map((animal) => (
            <article
              key={animal.name}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <img
                src={animal.imageUrl}
                alt={animal.name}
                className="h-36 w-full object-cover"
                loading="lazy"
              />
              <div className="space-y-2 p-4">
                <h3 className="text-base font-extrabold text-slate-900">{animal.name}</h3>
                <p className="text-sm text-slate-600">Age: {animal.age}</p>
                <p className="text-sm text-slate-600">Weight: {animal.weight}</p>
                <p className="text-sm text-slate-600">Location: {animal.location}</p>
                <p className="pt-1 text-sm font-bold text-emerald-700">{animal.price}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-12 grid gap-6 lg:grid-cols-2">
        <article className="rounded-2xl border border-amber-200 bg-linear-to-br from-amber-50 to-orange-50 p-6">
          <h2 className="text-2xl font-black tracking-tight text-slate-900">Qurbani Tips</h2>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
            {qurbaniTips.map((tip) => (
              <li key={tip} className="rounded-xl bg-white/70 px-4 py-3">
                {tip}
              </li>
            ))}
          </ul>
        </article>

        <article className="rounded-2xl border border-cyan-200 bg-linear-to-br from-cyan-50 to-sky-50 p-6">
          <h2 className="text-2xl font-black tracking-tight text-slate-900">Top Breeds</h2>
          <p className="mt-4 text-sm text-slate-700">
            Popular breeds buyers trust for quality health, size, and reliable
            farm sourcing.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {topBreeds.map((breed) => (
              <span
                key={breed}
                className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700"
              >
                {breed}
              </span>
            ))}
          </div>
        </article>
      </section>

      <section className="mt-12 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-black tracking-tight text-slate-900">How Booking Works</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-3">
          <article className="rounded-2xl bg-slate-50 p-4">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">Step 1</p>
            <h3 className="mt-2 text-base font-extrabold text-slate-900">Pick an Animal</h3>
            <p className="mt-2 text-sm text-slate-600">
              Browse listings and open the details page to review full cattle information.
            </p>
          </article>
          <article className="rounded-2xl bg-slate-50 p-4">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">Step 2</p>
            <h3 className="mt-2 text-base font-extrabold text-slate-900">Complete Booking</h3>
            <p className="mt-2 text-sm text-slate-600">
              Login and submit your booking form with contact details for confirmation.
            </p>
          </article>
          <article className="rounded-2xl bg-slate-50 p-4">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">Step 3</p>
            <h3 className="mt-2 text-base font-extrabold text-slate-900">Get Delivery</h3>
            <p className="mt-2 text-sm text-slate-600">
              Our team coordinates delivery schedule and support before qurbani day.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
