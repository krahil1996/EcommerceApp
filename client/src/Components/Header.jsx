import { Fragment, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
 
} from "@heroicons/react/24/outline";

import {
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";

const products = [
  {
    name: "Analytics",
    description: "Get a better understanding of your traffic",
    href: "#",
    icon: ChartPieIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Security",
    description: "Your customers’ data will be safe and secure",
    href: "#",
    icon: FingerPrintIcon,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools",
    href: "#",
    icon: SquaresPlusIcon,
  },
  {
    name: "Automations",
    description: "Build strategic funnels that will convert",
    href: "#",
    icon: ArrowPathIcon,
  },
];
const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
];

export default function Header() {
  const [setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-t-2 border-r-2 border-l-2 border-transparent mr-3 ml-3 ">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between p-5 lg:px-7 "
        aria-label="Global bordered-2-gray"
      >
        <div className="flex lg:flex-1"></div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon
                          className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex-auto">
                        <a
                          href={item.href}
                          className="block font-semibold text-gray-900"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                  {callsToAction.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                    >
                      <item.icon
                        className="h-5 w-5 flex-none text-gray-400"
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <Link
            to="/book"
            className="text-sm font-semibold leading-6 text-gray-900 mt-1 w-14 h-14 text-center"
          >
            <img
              src="https://i.pinimg.com/736x/1d/7e/95/1d7e95015b550039ba6107f10176e23c.jpg?"
              alt="Books"
            />
            Books
          </Link>
         
          <Link
            to="/grocery"
            className="text-sm font-semibold leading-6 text-gray-900 text-center"
          >
            <img
              src="https://rukminim2.flixcart.com/flap/80/80/image/29327f40e9c4d26b.png?q=100"
              alt="Product"
            />
            Grocery
          </Link>
          <Link
            to="/mobile"
            className="text-sm font-semibold leading-6 text-gray-900  text-center"
          >
            <img
              src="https://rukminim1.flixcart.com/flap/80/80/image/22fddf3c7da4c4f4.png?q=100"
              alt="Mobiles"
            />
            Mobiles
          </Link>
          <Link
            to="/Fashion"
            className="text-sm font-semibold leading-6 text-gray-900 text-center"
          >
            <img
              src="https://rukminim1.flixcart.com/fk-p-flap/80/80/image/0d75b34f7d8fbcb3.png?q=100"
              alt="Fashion"
            />
            Fashion
          </Link>
          <Link
            to="/electronics"
            className="text-sm font-semibold leading-6 text-gray-900 text-center"
          >
            <img
              src="https://rukminim1.flixcart.com/flap/81/81/image/69c6589653afdb9a.png?q=100"
              alt="Electronics"
            />
            Electronics
          </Link>
          <Link
            to="/furnitures"
            className="text-sm font-semibold leading-6 text-gray-900 whitespace-nowrap text-center mt-2"
          >
            <img
              src="https://rukminim1.flixcart.com/flap/71/71/image/ab7e2b022a4587dd.jpg?q=100"
              alt="Home & Furniture"
            />
            Furniture
          </Link>
          <Link
            to="/appliances"
            className="text-sm font-semibold leading-6 text-gray-900 text-center"
          >
            <img
              src="https://rukminim1.flixcart.com/fk-p-flap/80/80/image/0139228b2f7eb413.jpg?q=100"
              alt="Appliances"
            />
            Appliances
          </Link>
          <Link
            to="/toys"
            className="text-sm font-semibold leading-6 text-gray-900 text-center"
          >
            <img
              src="https://rukminim1.flixcart.com/flap/80/80/image/dff3f7adcf3a90c6.png?q=100"
              alt="Toys"
            />
            Toys
          </Link>
          <Link
            to="/bikes"
            className="text-sm font-semibold leading-6 text-gray-900 text-center"
          >
            <img
              src="https://rukminim1.flixcart.com/fk-p-flap/80/80/image/05d708653beff580.png?q=100"
              alt="Toys"
            />
            Bikes
          </Link>
        </Popover.Group>
      </nav>

      <hr></hr>
    </header>
  );
}
