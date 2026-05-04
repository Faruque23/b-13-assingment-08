export default function AnimalsLoading() {
  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-10 sm:px-6 lg:px-8">
      <section className="rounded-3xl bg-linear-to-r from-slate-900 via-slate-800 to-emerald-900 px-6 py-10 text-white sm:px-10">
        <div className="h-8 w-44 animate-pulse rounded bg-white/20" />
        <div className="mt-3 h-4 w-full max-w-xl animate-pulse rounded bg-white/20" />
      </section>

      <section className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <article
            key={`page-loading-${index}`}
            className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
          >
            <div className="h-28 animate-pulse bg-slate-200" />
            <div className="space-y-3 p-5">
              <div className="h-3 w-20 animate-pulse rounded bg-slate-200" />
              <div className="h-4 w-40 animate-pulse rounded bg-slate-200" />
              <div className="h-3 w-full animate-pulse rounded bg-slate-200" />
              <div className="h-3 w-5/6 animate-pulse rounded bg-slate-200" />
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
