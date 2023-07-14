import Link from "next/link";
import { Menu } from "./ui/menu";
import { SearchIcon } from "lucide-react";

const Navbar = () => {
  return (
    <header>
      <nav className="flex justify-between items-center px-10 h-20 w-full bg-yellow-300">
        <div className="bg-red-300">image</div>
        <div className="flex gap-5">
          {Menu.map((link, index) => (
            <Link key={index} href={link.path} className="hover:bg-green-200">
              {link.name}
            </Link>
          ))}
        </div>
        <div className="flex bg-white border gap-1 border-black rounded-sm items-center px-2">
          <SearchIcon size={15} />
          <input
            type="text"
            placeholder={"What are you looking for"}
            className="outline-none"
          />
        </div>
        <div>cart</div>
      </nav>
    </header>
  );
};
export default Navbar;
