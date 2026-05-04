import Link from "next/link";

export default function NotFoundPage() {
  return (
    <main className="mx-auto flex w-full max-w-4xl flex-1 items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
      <section className="w-full rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm sm:p-12">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500">Error 404</p>
        <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-900">Page Not Found</h1>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
          The page you are looking for does not exist or may have been moved.
          Please return to the homepage and continue browsing.
        </p>
        <Link
          href="/"
          className="mt-7 inline-flex rounded-full bg-emerald-600 px-6 py-2.5 text-sm font-bold text-white transition-colors hover:bg-emerald-700"
        >
          Back to Home
        </Link>
      </section>
    </main>
  );
}
