import React from "react";
import "./Header.scss";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function Header() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <header className="bg-gray-100 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-4">
        <Link to={"/"}>
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-cyan-600">Home</span>
            <span className="text-cyan-700">Hub</span>
          </h1>
        </Link>
        <form action="" className="bg-teal-50 p-3 rounded-lg flex item-center w-24 sm:w-64">
          <input type="text" placeholder="Search..." className="bg-transparent focus:outline-none text-slate-400" />
          <FaSearch className="text-slate-400" />
        </form>

        <ul className="flex gap-4">
          <Link to={"/Home"}>
            <li className="text-slate-400 hover:scale-110">Home</li>
          </Link>
          <Link to={"/About"}>
            <li className="text-slate-400 hover:scale-110">About</li>
          </Link>

          <Link to="/profile">{currentUser ? <img className="rounded-full h-7 w-7 object-cover" src={currentUser.avatar} alt="profile" /> : <li className=" text-slate-700 hover:underline"> Sign in</li>}</Link>
        </ul>
      </div>
    </header>
  );
}

export default Header;
