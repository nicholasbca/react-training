import React from "react";
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
// import { Landing } from "./Landing";
import CounterHooks from "../day1-practice/Hooks/CounterHooks";
import TransferApp from "../day2-practice/components";
import { PrivateRoute } from "./PrivateRouter";
import SignUpPage from "./SignUpPage";




export default function RouterAppWithPrivate() {
  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap bg-blue-500 p-6">
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <Link to="/" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Home
            </Link>
            <Link to="/about" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              About
            </Link>
            <Link to="/users" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Users
            </Link>
            <Link to="/app" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              App
            </Link>
            <Link to="/signup" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
              Sign up
            </Link>
          </div>
        </div>
      </nav>
      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        {/* <Route path="/app">
          <TransferApp />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/">
          <Landing /> 
        </Route> */}
        <Route path='/signup' component={SignUpPage}/>
        <PrivateRoute path='/app'>
          <TransferApp/>
        </PrivateRoute>
        <PrivateRoute path="/users" component={Users}/>
        <Route path='/' component={Home}/>
        {/* <Route path='/' component={Landing}/> */}
      </Switch>
    </div>
  );
}

function Home() {
  return(
    <CounterHooks />
  )
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h3>Users</h3>;
}