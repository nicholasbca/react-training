import { Link } from "react-router-dom";
import { Fragment } from "react/cjs/react.production.min";

const Nav = {} = (
  <Fragment>
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <Link to="/" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            Home
          </Link>
          <Link to="/about" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            About
          </Link>
          <Link to="/users" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
            Users
          </Link>
        </div>
      </div>
    </nav>
  </Fragment>
)

export default Nav