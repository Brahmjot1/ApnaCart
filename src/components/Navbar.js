import React from "react";
class Navbar extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Apna Cart
            </a>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
