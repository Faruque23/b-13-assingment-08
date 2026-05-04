import Link from "next/link";

const socialLinks = [
  { name: "Facebook", href: "https://facebook.com" },
  { name: "Instagram", href: "https://instagram.com" },
  { name: "YouTube", href: "https://youtube.com" },
];

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-200 bg-slate-950 text-slate-200">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-3 lg:px-8">
        <section>
          <h2 className="text-lg font-extrabold tracking-tight text-white">Contact Info</h2>
          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            <li>Email: support@qurbanihat.com</li>
            <li>Phone: +880 1700-000000</li>
            <li>Address: Farmgate, Dhaka, Bangladesh</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-extrabold tracking-tight text-white">Social Links</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {socialLinks.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 transition-colors hover:text-emerald-400"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-extrabold tracking-tight text-white">About</h2>
          <p className="mt-4 text-sm leading-6 text-slate-300">
            QurbaniHat is a trusted platform for discovering healthy animals for
            qurbani with transparent details, fair prices, and farmer-first
            service.
          </p>
        </section>
      </div>

      <div className="border-t border-slate-800">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 text-xs text-slate-400 sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} QurbaniHat. All rights reserved.</p>
          <p>Built for ethical livestock marketplace.</p>
        </div>
      </div>
    </footer>
  );
}
