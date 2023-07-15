import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  
  // change state acording time
  const [hour, setHour] = useState(0);
  useEffect(() => {
    const date = new Date();
    setHour(date.getHours());
  }, []);

  return (
    <div className="Navbar mb-4 ">
      <nav
        className="navbar  navbar-dark justify-content-between "
        style={{ backgroundColor: "#212529" }}
      >
            <h2  className="text-black text-center">Habit Trckr</h2>
            
        <Link to="/" className="navbar-brand m-2 ms-5">
          <h1  className="text-warning text-center font-monospace text-decoration-underline">Daily Habit Tracker</h1>
        </Link>
        <form action="" className="form-inline">
          <Link
            to="/add"
            className="btn btn-success  me-5 my-sm-0 m-2 font-monospace "
            type="submit"
          >
            Add New Habits
          </Link>
        </form>
      </nav>
      <h4 className="text-info text-center mt-2 font-monospace">
        Good &nbsp;
        {hour <= 12
          ? "Morning"
          : hour <= 17
          ? "Afternoon"
          : hour <= 21
          ? "Evening"
          : "Night"}
      </h4>
      <p className="text-success mx-5 text-center font-monospace">Come On Ninja Add Some New Habits !</p>
    </div>
  );
};

export default Navbar;
