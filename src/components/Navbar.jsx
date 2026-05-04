import Link from "next/link";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "All Animals", href: "/animals" },
];

export default function Navbar({ isLoggedIn = false, user = { name: "User" } }) {
  const initials = user.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/90 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-xl font-black tracking-tight text-slate-900">
          QurbaniHat
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="text-sm font-semibold text-slate-700 transition-colors hover:text-emerald-600"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          {isLoggedIn ? (
            <>
              <button
                type="button"
                aria-label="User avatar"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600 text-sm font-bold text-white"
              >
                {initials}
              </button>
              <button
                type="button"
                className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition-all hover:border-slate-400 hover:bg-slate-100"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <button
                type="button"
                className="rounded-full px-4 py-2 text-sm font-semibold text-slate-700 transition-colors hover:text-emerald-700"
              >
                Login
              </button>
              <button
                type="button"
                className="rounded-full bg-emerald-600 px-5 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:bg-emerald-700"
              >
                Register
              </button>
            </>
          )}
        </div>
      </nav>

      <div className="border-t border-slate-200/60 md:hidden">
        <ul className="mx-auto flex max-w-6xl items-center gap-5 px-4 py-3 sm:px-6 lg:px-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="text-sm font-semibold text-slate-700 transition-colors hover:text-emerald-600"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
