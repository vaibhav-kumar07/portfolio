import Link from "next/link";

const NavItem = ({ href, label }: { href: string; label: string }) => (
  <li className="w-[80px]  px-4 py-2 text-green-200 transition duration-300 ease-in-out hover:bg-green-200 hover:text-primary  rounded-3xl flex items-center justify-center">
    <Link href={href} className="">
      {label}
    </Link>
  </li>
);

export default function Navbar() {
  return (
    <nav className="flex  pt-3">
      <ul className="mx-auto flex  gap-2  rounded-3xl  ">
        <NavItem href="/" label="Home" />
        <NavItem href="/" label="About" />
        <NavItem href="/" label="Projects" />
      </ul>
    </nav>
  );
}
