import Image from "next/image";
import { navLinks } from "./components/NavLinks";
import Link from "next/link";

export default function Home() {
  return (
    <main className=" container backdrop-blur h-[100vh] mx-auto">
      <div className="m-4">
        <nav className="flex flex-col justify-center items-center pt-8  mt-4 md:mt-6">
          {navLinks.map((item) => (
            <Link
              className=" mb-2 md:text-2xl p-2  text-white rounded-md w-full bg-[#713f12] md:text-center"
              href={item.href}
              key={item.label}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </main>
  );
}
