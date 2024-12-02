import { NavLink } from "react-router-dom";


const Header = () => {
  
  
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Coffee House</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>            <NavLink to='/' > Home</NavLink>
            </li>
            <li><NavLink to='/users'> User</NavLink></li>
           <li> <NavLink to='/login' >login</NavLink></li>

          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;