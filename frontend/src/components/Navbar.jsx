// // import { Link, useNavigate } from "react-router-dom";
// // import { isAuthenticated } from "../utils/auth";

// // const Navbar = () => {
// //   const navigate = useNavigate();
// //   const auth = isAuthenticated();

// //   const handleLogout = () => {
// //     localStorage.removeItem("token");
// //     navigate("/login");
// //   };

// //   return (
// //     <nav className="bg-blue-600 text-white px-4 py-3 shadow-md">
// //       <div className="max-w-6xl mx-auto flex justify-between items-center">
// //         <Link to="/" className="text-xl font-bold">
// //           InfoNation 🌍
// //         </Link>

// //         <div className="space-x-4">
// //           {!auth ? (
// //             <>
// //               <Link to="/login" className="hover:underline">
// //                 Login
// //               </Link>
// //               <Link to="/register" className="hover:underline">
// //                 Register
// //               </Link>
// //             </>
// //           ) : (
// //             <button
// //               onClick={handleLogout}
// //               className="bg-white text-blue-600 px-4 py-1 rounded-lg hover:bg-gray-100 transition"
// //             >
// //               Logout
// //             </button>
// //           )}
// //         </div>
// //       </div>
// //     </nav>
// //   );
// // };

// // export default Navbar;

// import { Link, useNavigate } from "react-router-dom";
// import { isAuthenticated } from "../utils/auth";
// import { FiLogIn, FiLogOut, FiUserPlus, FiGlobe } from "react-icons/fi";

// const Navbar = () => {
//   const navigate = useNavigate();
//   const auth = isAuthenticated();

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     navigate("/login");
//   };

//   return (
//     <nav className="bg-white shadow-md px-4 py-3 sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto flex justify-between items-center">
//         {/* Logo / Title */}
//         <Link
//           to="/"
//           className="flex items-center space-x-2 text-blue-600 font-bold text-xl"
//         >
//           <FiGlobe className="text-2xl" />
//           <span>InfoNation</span>
//         </Link>

//         {/* Navigation buttons */}
//         <div className="space-x-4 flex items-center">
//           {!auth ? (
//             <>
//               <Link
//                 to="/login"
//                 className="flex items-center gap-1 text-gray-600 hover:text-blue-600 transition"
//               >
//                 <FiLogIn />
//                 <span>Login</span>
//               </Link>
//               <Link
//                 to="/register"
//                 className="flex items-center gap-1 text-gray-600 hover:text-blue-600 transition"
//               >
//                 <FiUserPlus />
//                 <span>Register</span>
//               </Link>
//             </>
//           ) : (
//             <button
//               onClick={handleLogout}
//               className="flex items-center gap-1 text-gray-600 hover:text-red-600 transition"
//             >
//               <FiLogOut />
//               <span>Logout</span>
//             </button>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import { Link, useNavigate } from "react-router-dom";
import { isAuthenticated } from "../utils/auth";
import { FiLogIn, FiLogOut, FiUserPlus, FiGlobe } from "react-icons/fi";

const Navbar = () => {
  const navigate = useNavigate();
  const auth = isAuthenticated();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="bg-gradient-to-r from-indigo-500 via-blue-500 to-purple-500 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center space-x-2 font-extrabold text-xl tracking-wide"
        >
          <FiGlobe className="text-2xl" />
          <span>InfoNation</span>
        </Link>

        {/* Nav Buttons */}
        <div className="space-x-5 text-sm font-medium">
          {!auth ? (
            <>
              <Link
                to="/login"
                className="inline-flex items-center gap-1 hover:text-white/90 transition"
              >
                <FiLogIn />
                Login
              </Link>
              <Link
                to="/register"
                className="inline-flex items-center gap-1 hover:text-white/90 transition"
              >
                <FiUserPlus />
                Register
              </Link>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-1 hover:text-white/90 transition"
            >
              <FiLogOut />
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
