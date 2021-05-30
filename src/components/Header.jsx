import logo from "../assets/logo.svg"

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
				<img src="./img/cart.svg" alt="cart" />
			</div>
		</header>

	)
}

export default Header