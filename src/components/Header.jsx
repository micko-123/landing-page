import logo from "../assets/logo.svg"
import cart from "../assets/cart.svg"

function Header () {
	return(
		<header>
			<div className="logo-container">
				<img src={logo} alt="logo" />
				<h4 className="logo">Three Dots</h4>
			</div>
			<nav>
				<ul className="nav-links">
					<li><a className="nav-link" href="#">Specs</a></li>
					<li><a className="nav-link" href="#">Products</a></li>
					<li><a className="nav-link" href="#">Contact</a></li>
				</ul>
			</nav>
			<div className="cart">
				<img src={cart} alt="cart" />
			</div>
		</header>

	)
}

export default Header