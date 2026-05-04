import Link from "next/link";
import { notFound } from "next/navigation";
import BookingPanel from "../../../components/BookingPanel";
import ProtectedRoute from "../../../components/ProtectedRoute";
import { getAnimalById } from "../../../data/animals";

const formatPrice = (amount) =>
  new Intl.NumberFormat("en-BD", {
    style: "currency",
    currency: "BDT",
    maximumFractionDigits: 0,
  }).format(amount);

export default async function DetailsPage({ params }) {
  const { id } = await params;
  const animal = await getAnimalById(id);

  if (!animal) {
    notFound();
  }

  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-10 sm:px-6 lg:px-8">
      <ProtectedRoute>
        <div className="animate__animated animate__fadeIn">
          <Link
            href="/animals"
            className="inline-flex text-sm font-semibold text-emerald-700 hover:text-emerald-800"
          >
            ← Back to All Animals
          </Link>

          <section className="mt-4 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <img
              src={animal.imageUrl}
              alt={animal.name}
              className="h-56 w-full object-cover"
            />
            <div className="grid gap-8 p-6 lg:grid-cols-2 lg:p-8">
              <article>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                  {animal.breed}
                </p>
                <h1 className="mt-2 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
                  {animal.name}
                </h1>
                <p className="mt-4 text-sm leading-6 text-slate-700">{animal.description}</p>

                <p className="mt-6 text-2xl font-black text-emerald-700">
                  {formatPrice(animal.price)}
                </p>
              </article>

              <article className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <h2 className="text-lg font-extrabold text-slate-900">Full Details</h2>
                <dl className="mt-4 grid grid-cols-2 gap-3 text-sm text-slate-700">
                  <dt className="font-semibold">Age</dt>
                  <dd>{animal.age}</dd>
                  <dt className="font-semibold">Weight</dt>
                  <dd>{animal.weight}</dd>
                  <dt className="font-semibold">Location</dt>
                  <dd>{animal.location}</dd>
                  <dt className="font-semibold">Color</dt>
                  <dd>{animal.color}</dd>
                  <dt className="font-semibold">Gender</dt>
                  <dd>{animal.gender}</dd>
                  <dt className="font-semibold">Farm</dt>
                  <dd>{animal.farm}</dd>
                  <dt className="font-semibold">Vaccination</dt>
                  <dd>{animal.vaccination}</dd>
                  <dt className="font-semibold">Health Status</dt>
                  <dd>{animal.healthStatus}</dd>
                </dl>
              </article>
            </div>
          </section>

          <section className="mt-8">
            <BookingPanel animalName={animal.name} />
          </section>
        </div>
      </ProtectedRoute>
    </main>
  );
}
