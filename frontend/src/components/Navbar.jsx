import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../app/features/authSlice";

function Navbar() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const logoutUser = () => {
    navigate("/");
    dispatch(logout());
  };
  return (
    <div className="bg-white p-2">
      <div className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 rounded-xl px-6 py-5 mx-3">
        <nav className="flex items-center justify-between">
          <img src="/logo.svg" alt="logo"/>
          <button
            onClick={logoutUser}
            className="bg-white text-black px-5 py-2 rounded-full hover:bg-gray-100 transition"
          >
            Logout
          </button>
        </nav>
        <div>
          <span className="text-white font-medium py-2 text-lg">
            Hello ,{user?.name}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
