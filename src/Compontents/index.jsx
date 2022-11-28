import React from "react";
import { Nav, NavLink, NavMenu }
	from "./NavbarElements";

const Navbar = () => {
return (
	<>
	<Nav>
		<NavMenu>
		<NavLink to="/signup" activeStyle>
			Sign Up
		</NavLink>
		<NavLink to="/login" activeStyle>
			Log In
		</NavLink>
		<NavLink to="/todo" activeStyle>
			TODO
		</NavLink>
		<NavLink to="/todo2" activeStyle>
			TODO
		</NavLink>
		</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;
