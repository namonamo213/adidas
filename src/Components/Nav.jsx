import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { useState } from "react";
import { Link } from "react-router-dom";

const classNames =
  "font-montserrat cursor-pointer leading-normal text-lg text-slate-gray border-b-2 border-transparent hover:border-coral-red";

const Nav = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isDropdownInvisible, setIsDropdownInvisible] = useState(false);

  return (
    <header className="z-10 w-full padding-x py-9  fixed top-0">
      <nav className="flex items-center justify-between">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul className="flex flex-1 justify-center items-center gap-16">
          <li className={classNames}>Home</li>
          <li className={classNames}>
            <a href="#About">About</a>
          </li>
          <li
            className={classNames}
            onMouseEnter={() => setIsDropdownInvisible(true)}
            onMouseLeave={() => setIsDropdownInvisible(false)}
          >
            <a href="#contact">Contact Us</a>

            {isDropdownInvisible && (
              <div className="absolute left-0 top-full w-screen border-t-2 shadow-lg bg-white border-gray-200">
                <div className="flex max-container justify-center gap-16 px-12 py-8">
                  <div>
                    <h4 className="mb-4 font-bold">Phone No</h4>
                    <ul>
                      <li>+91 9323434456</li>
                      <li>+91 9323434456</li>
                      <li>+91 9323434456</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="mb-4 font-bold">Email</h4>
                    <ul>
                      <li>flkdjldvjbd@gmail.com</li>
                      <li>flkdjldvjbd@gmail.com</li>
                      <li>flkdjldvjbd@gmail.com</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </li>

          <li
            className={classNames}
            onMouseEnter={() => setIsDropdownVisible(true)}
            onMouseLeave={() => setIsDropdownVisible(false)}
          >
            <a href="#PP">Products</a>
            {isDropdownVisible && (
              <div className="absolute left-0 top-full w-screen bg-white shadow-lg border-t-2 border-gray-200">
                <div className="max-container flex justify-center py-8 px-12 gap-16">
                  <div>
                    <h4 className="font-bold text-lg mb-4">Featured</h4>
                    <ul>
                      <li className="text-slate-gray hover:text-coral-red cursor-pointer">
                        New Arrivals
                      </li>
                      <li className="text-slate-gray hover:text-coral-red cursor-pointer">
                        Best Sellers
                      </li>
                      <li className="text-slate-gray hover:text-coral-red cursor-pointer">
                        Limited Editions
                      </li>
                      <li className="text-slate-gray hover:text-coral-red cursor-pointer">
                        Top Rated
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-lg mb-4">Shoes</h4>
                    <ul>
                      <li className="text-slate-gray hover:text-coral-red cursor-pointer">
                        Running Shoes
                      </li>
                      <li className="text-slate-gray hover:text-coral-red cursor-pointer">
                        Basketball Shoes
                      </li>
                      <li className="text-slate-gray hover:text-coral-red cursor-pointer">
                        Football Shoes
                      </li>
                      <li className="text-slate-gray hover:text-coral-red cursor-pointer">
                        Sandals and Slides
                      </li>
                      <li className="text-slate-gray hover:text-coral-red cursor-pointer">
                        Lifestyle Shoes
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </li>

          <li className={classNames}>
            <Link to="/logs">Sign/Login</Link>
          </li>
        </ul>
        <div className="flex flex-col">
          <img src={hamburger} alt="" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
