import "./NavBar.css";
import { Link } from "react-router-dom";

function NavBar(cartItems) {
  return (
    <>
      <header className="ulContainer">
        <nav>
          <li>
            <Link to="/Home">
              <i className="fa-solid fa-house"></i>{" "}
            </Link>
            <h3>Classic Ethiopian Clothes</h3>
          </li>
          <li>
            <Link to="/Login">Login</Link>
          </li>
          <li>
            <Link to="/Cart">
              {cartItems.length > 0 && (
                <p className="count-items">{cartItems.length}</p>
              )}
              <i className="fa-solid fa-cart-shopping"></i>
            </Link>
          </li>
        </nav>
      </header>
    </>
  );
}
export default NavBar;
