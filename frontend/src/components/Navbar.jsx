// import {
//   Avatar,
//   Dropdown,
//   DropdownDivider,
//   DropdownHeader,
//   DropdownItem,
//   Navbar,
//   NavbarBrand,
//   NavbarCollapse,
//   NavbarLink,
//   NavbarToggle,
// } from "flowbite-react";

// export function Component() {
//   return (
//     <Navbar fluid rounded>
//       <NavbarBrand href="https://flowbite-react.com">
//         <img
//           src="/favicon.svg"
//           className="mr-3 h-6 sm:h-9"
//           alt="Flowbite React Logo"
//         />
//         <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
//           Flowbite React
//         </span>
//       </NavbarBrand>
//       <div className="flex md:order-2">
//         <Dropdown
//           arrowIcon={false}
//           inline
//           label={
//             <Avatar
//               alt="User settings"
//               img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
//               rounded
//             />
//           }
//         >
//           <DropdownHeader>
//             <span className="block text-sm">Bonnie Green</span>
//             <span className="block truncate text-sm font-medium">
//               name@flowbite.com
//             </span>
//           </DropdownHeader>
//           <DropdownItem>Dashboard</DropdownItem>
//           <DropdownItem>Settings</DropdownItem>
//           <DropdownItem>Earnings</DropdownItem>
//           <DropdownDivider />
//           <DropdownItem>Sign out</DropdownItem>
//         </Dropdown>
//         <NavbarToggle />
//       </div>
//       <NavbarCollapse>
//         <NavbarLink href="#" active>
//           Home
//         </NavbarLink>
//         <NavbarLink href="#">About</NavbarLink>
//         <NavbarLink href="#">Services</NavbarLink>
//         <NavbarLink href="#">Pricing</NavbarLink>
//         <NavbarLink href="#">Contact</NavbarLink>
//       </NavbarCollapse>
//     </Navbar>
//   );
// }

import { Link, useNavigate } from "react-router-dom";
import { isAuthenticated } from "../utils/auth";

const Navbar = () => {
  const navigate = useNavigate();
  const auth = isAuthenticated();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="bg-blue-600 text-white px-4 py-3 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          InfoNation 🌍
        </Link>

        <div className="space-x-4">
          {!auth ? (
            <>
              <Link to="/login" className="hover:underline">
                Login
              </Link>
              <Link to="/register" className="hover:underline">
                Register
              </Link>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="bg-white text-blue-600 px-4 py-1 rounded-lg hover:bg-gray-100 transition"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
