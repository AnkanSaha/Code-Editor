/* eslint-disable react/prop-types */
import Logo from "@public/icons/PWA Icons/icon-152x152.png"; // Main Logo

// Import Router
import { Link } from "react-router-dom"; // Navigation

// Import App Info
import { AppName } from "@app/App_Config"; // App Name

// Chakra UI Components
import { Button } from "@chakra-ui/react"; // Button

// React Icons
import { GiHamburgerMenu } from "react-icons/gi"; // Hamburger Menu Icon

// React Redux
import { useDispatch } from "react-redux"; // useSelector
import { setSideBarToggleStatus } from "@redux/Components/SideBar"; // Redux Action

import { useParams } from "react-router-dom"; // useParams Hook

export default function Navbar({NavbarTitle}) {
  // Hooks
  const Updater = useDispatch(); // Redux Updater
  const { language } = useParams(); // useParams Hook

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Button
          onClick={() => {
            Updater(setSideBarToggleStatus(true));
          }}
          leftIcon={<GiHamburgerMenu />}
          colorScheme="facebook"
          size={"md"}
          iconSpacing={"-0.5"}
        ></Button>
        <Link to="/" className="flex items-center">
          <img src={Logo} className="h-8 mr-3" alt="MainLogo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            {
              language === undefined ? `${NavbarTitle} - ${AppName}` : `${language} - Code Editor`
            }
          </span>
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                to="/"
                className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/privacy-policy"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

Navbar.defaultProps = {
  NavbarTitle: "Home"
};
