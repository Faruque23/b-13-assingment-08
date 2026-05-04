export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
      <section className="w-full rounded-3xl bg-linear-to-br from-emerald-100 via-white to-cyan-100 p-10 text-center shadow-sm">
        <h1 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
          Welcome to Animal Directory
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 sm:text-lg">
          Browse interesting species, discover details, and build your own list
          of favorite animals.
        </p>
      </section>
    </main>
  );
}
