import Button from "./Button";
import { NAV_LINKS } from "./Data";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center max-container padding-container relative z-20 py-3">
      {/* Navbar section with logo */}
      <nav className="flex items-center">
        <a href="/">
          <img src="/src/assets/hilink-logo.svg" alt="Hilink Logo" />
        </a>
      </nav>

      {/* Links section */}
      <ul className="hidden lg:flex gap-7 h-full">
        {NAV_LINKS.map((link) => (
          <Link
            to={link.href}
            key={link.key}
            smooth={true}
            duration={500}
            className="hover:text-orange-400 regular-16 text-gray-900 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>

      {/* Button section */}
      <div className="hidden lg:flex justify-center items-center">
        <Button 
          type="button"
          title="Login"
          icon='src\assets\user.svg'
          variant="btn_dark_green"
        />
      </div>
    </div>
  );
};

export default Navbar;
