import { appleImg, bagImg, searchImg } from "../utils.js";

const Navbar = () => {
  return (
    <header>
      <nav>
        hello
        <img src={appleImg} alt="Apple" width={14} height={18} />
        <div>
          {["Phones", "Macbooks", "Tablets"].map((nav) => (
            <div key={nav}>{nav}</div>
          ))}
        </div>
        <div>
          <img src={searchImg} alt="search" width={18} height={18} />
          <img src={bagImg} alt="search" width={18} height={18} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
