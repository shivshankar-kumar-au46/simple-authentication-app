import Link from "next/link";

export default function Header(props) {
  const {count} = props;
  return (
    <header className="flex fixed top-0 items-center  justify-between w-full px-8 text-sm font-bold bg-black h-16 border z-40 mb-20">
      <ul className="flex gap-8 text-center">
        <li>
          <Link href="/" className="text-4xl font-extrabold text-rose-600 ">LOGO</Link>
        </li>
      </ul>
      <ul className="flex gap-8">
        <li>
          <Link href="/profile" className="text-white">Profile ({count})</Link>
        </li>
        <li>
          <Link href="/login" className="text-white">Logout</Link>
        </li>
        </ul>
    </header>
  );
}
