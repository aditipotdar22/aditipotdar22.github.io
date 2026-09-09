import "./Navbar.css";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-8 py-5">
  <div className="flex justify-center">
    <div className="hidden md:flex gap-6 px-3 py-2 bg-white/80 backdrop-blur-md border border-gray-200 rounded-full shadow-sm text-sm">
      
      <a href="#home" className="nav-link">
        Home
      </a>
      
      <a href="#about" className="nav-link">
        About
      </a>

      <a href="#skills" className="nav-link">
        Skills
      </a>

      <a href="#education" className="nav-link">
        Education
      </a>


      <a href="#contact" className="nav-link">
        Contact
      </a>
    </div>
  </div>
</nav>
  );
}

export default Navbar;