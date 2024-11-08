import "./NavBar.css";
import { Link } from "react-router-dom";

function NavBar(cartItems, isAuthenticated, onClick) {
  return (
    <>
      <header className="ulContainer">
        <nav>
          <li>
            <Link to="/">
              <i className="fa-solid fa-house"></i>{" "}
            </Link>
            <h3>Ethio-Shopping</h3>
          </li>
          <div className="left">
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>

            <li>
              <Link to="/Login" onClick={onClick}>
                {isAuthenticated ? "User" : "User"}{" "}
              </Link>
            </li>

            <li style={{ display: "flex", flexDirection: "row" }}>
              <Link to="/Cart">
                {cartItems.length > 0 && (
                  <p className="count-items">{cartItems.length}</p>
                )}
                <i className="fa-solid fa-cart-shopping"></i>
              </Link>
            </li>
          </div>
        </nav>
      </header>
    </>
  );
}
export default NavBar;
