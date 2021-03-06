import React from "react";

const Header = ({ isAuth, signOut }) => {
  return (
    <header className="header">
      <div className="logo">
        <span>Bridge</span>
      </div>

      {
        isAuth && <div className="signout">
          <button onClick={signOut}>Sign out</button>
        </div>
      }
    </header>
  );
};

export default Header;
