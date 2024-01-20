import Link from "next/link";

const NavItem = ({ href, label }: { href: string; label: string }) => (
  <li className=" z-40 w-full  px-4 py-2 font-semibold tracking-wider text-green-200 transition duration-300 ease-in-out hover:bg-green-200 hover:text-primary  rounded-3xl flex items-center justify-center">
    <Link href={href} className="">
      {label}
    </Link>
  </li>
);

export default function Navbar() {
  return (
    <nav className="sticky top-0  flex  pt-3 bg-primary z-20 bg-gradient-to-b from-primary  to-white ">
      <ul className="mx-auto flex  gap-2  rounded-3xl z-20 ">
        <NavItem href="/" label="Home" />
        <NavItem href="/aboutus" label="About" />
        <NavItem href="/projects" label="Projects" />
      </ul>
    </nav>
  );
}
