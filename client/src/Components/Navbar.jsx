import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

// import axios from 'axios';

const navigation = [
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const cartItems = useSelector((state) => state.cart.items);
  const cartCount = cartItems ? cartItems.length : 0;
  const navigate = useNavigate();
  const [username, setUsername] = useState();
  // const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    // const authtokensession=localStorage.getItem('auth-token');
    const name = localStorage.getItem("name");
    setUsername(name);
    // if(authtokensession){
    //     setIsLoggedin(true);
    // }
  });
  const handlelogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    navigate("/");
    // setIsLoggedin(false);
    window.location.reload();
  };
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== "") {
      // Check if search term matches specific keywords
      if (searchTerm.toLowerCase().includes("book")) {
        navigate("/book");
      } else if (searchTerm.toLowerCase().includes("mobile")) {
        navigate("/mobile");
      } else if (searchTerm.toLowerCase().includes("appliances")) {
        navigate("/appliances");
      } else if (searchTerm.toLowerCase().includes("electronics")) {
        navigate("/electronics");
      } else if (searchTerm.toLowerCase().includes("bikes")) {
        navigate("/bikes");
      } else if (searchTerm.toLowerCase().includes("grocery")) {
        navigate("/grocery");
      } else if (searchTerm.toLowerCase().includes("furnitures")) {
        navigate("/furnitures");
      } else if (searchTerm.toLowerCase().includes("fashion")) {
        navigate("/fashion");
      } else if (searchTerm.toLowerCase().includes("toys")) {
        navigate("/toys");
      } else {
        // If no specific keyword matches, navigate to search results page
        // navigate(`/search?query=${encodeURIComponent(searchTerm)}`);
        navigate("/error");
      }
      setSearchTerm("");
    }
  };

  return (
    <Disclosure
      as="nav"
      className="w-full border border-b-transparent fixed top-0 z-50"
      style={{ backgroundColor: "#ffffff" }}
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 mt-2 sm:px-6 lg:px-0 ">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Link to="/home">
                    {" "}
                    <img
                      className="h-[280px] w-auto mt-2"
                      src="/src/assets/abc.png"
                      alt="Your Company"
                    />
                  </Link>
                  {/* Insert search box here */}

                  <form onSubmit={handleSearch}>
                    <input
                      type="text"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      placeholder="Search for Products (eg: type book,mobile,electronics ....)"
                      className="w-[550px] bg-blue-100 px-6 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-xl::placeholder"
                    />
                  </form>
                </div>

                {/* Profile dropdown */}

                <Menu
                  as="div"
                  className="relative ml-6 flex items-center rounded-full p-1 text-black"
                >
                  <div>
                    <Menu.Button className="relative flex rounded-full ">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/profile-52e0dc.svg"
                     
                        alt=""
                      />
                      {/* <span className="mr-4 mt-1 text-black font-bold">Login</span> */}
                      <span className="mr-4 mt-1 text-black font-bold">
                        {username}
                      </span>
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-[330%] w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="/profile"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Your Profile
                          </Link>
                        )}
                      </Menu.Item>

                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="/orders"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Order History
                          </Link>
                        )}
                      </Menu.Item>

                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>

                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            <button onClick={handlelogout}>Sign Out</button>
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>

                {/* cart button */}

                <button
                  type="button"
                  className="relative flex items-center rounded-full p-1 text-black"
                >
                  <Link to="/cart" className="flex items-center">
                    <span className="inline ">
                      {" "}
                      {/* Updated class */}
                      <ShoppingCartIcon
                        className="h-6 w-6"
                        aria-hidden="true"
                      />
                    </span>
                    <span className="ml-1 text-black font-bold">Cart</span>{" "}
                    {/* Updated class */}
                    <span className="inline-flex items-center rounded-md bg-red-100 px-2 ml-1 mb-7 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                      {cartCount}
                    </span>
                  </Link>
                </button>
                {/* <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
      */}
                <img
                  src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/Store-9eeae2.svg"
                  className=""
                />
                <span className="relative  flex items-center rounded-full p-1 text-black font-bold ">
                  Become a seller
                </span>

                <Link to="/team" className="flex items-center ml-7">
                  <span className="inline -ml-1.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z"
                        clipRule="evenodd"
                      />
                      <path d="M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z" />
                    </svg>
                  </span>
                  <span className="ml-1 text-black font-bold">OurTeam</span>
                </Link>

                
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
