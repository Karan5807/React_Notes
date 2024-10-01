import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import {Loader, Notfound} from "../Service";

const Header = () => {
  const {
    loginWithPopup,
    loginWithRedirect,
    logout,
    isLoading,
    user,
    isAuthenticated,
  } = useAuth0();

  const Login = () => {
    console.log("Current User", user);
    return (
      <React.Fragment>
        <button
          className="bg-green-200 m-2 p-2 font-medium text-xl"
          onClick={() => loginWithRedirect()}
        >
          Log In
        </button>
      </React.Fragment>
    );
  };
  const Logout = () => {
    return (
      <React.Fragment>
        <button
          className="bg-red-700 m-2 p-2 font-medium text-xl"
          onClick={() =>
            logout({ logoutParams: { returnTo: window.location.origin } })
          }
        >
          Logout
        </button>
      </React.Fragment>
    );
  };
  
  const LoginWithPop = () =>{
    alert(loginWithPopup());
  };

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="flex justify-between items-center p-2 text-amber-600">
      <div className="flex justify-start">
        <Link className="Link" to={"/"}>
          {isAuthenticated ? user.name : <h6>Hello Guest</h6>}
        </Link>
      </div>

      <div className="grid grid-flow-col grid-col-3 gap-10">
        {/* Section for About */}

        <Link className="Link" to={"/About"}>
          About
        </Link>

        {/* Section for Login/Signup */}

        <Link className="Link">
          {isAuthenticated ? <Logout /> : <Login />}
        </Link>
      </div>
    </div>
  );
};

export default Header;