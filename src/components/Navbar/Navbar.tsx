import Link from "next/link";

const NavItem = ({ href, label }: { href: string; label: string }) => (
  <li className=" z-40 w-full  px-4 py-2  text-white transition duration-300 ease-in-out hover:bg-white hover:text-primary  rounded-3xl flex items-center justify-center">
    <Link href={href} className="font-semibold hover:font-bold tracking-wider ">
      {label}
    </Link>
  </li>
);

export default function Navbar() {
  return (
    <nav className="sticky top-0  flex  pt-3 bg-primary z-20 bg-gradient-to-b from-prima pb-2">
      <ul className="mx-auto flex  gap-2  rounded-3xl z-20 ">
        <NavItem href="/" label="Home" />
        <NavItem href="/aboutus" label="About" />
        <NavItem href="/projects" label="Projects" />
      </ul>
    </nav>
  );
}
