import Link from "next/link";
type Props = { href: string; children: React.ReactNode };
export default function Button({ href, children }: Props) {
  return (
    <Link
      href={href}
      className="inline-block rounded-2xl bg-brand-blue px-6 py-3 text-white font-semibold shadow-soft hover:bg-blue-700 transition"
    >
      {children}
    </Link>
  );
}
