import {Navbar, Container, Nav} from "react-bootstrap";
import {Link} from "react-router-dom";
import dahlialogo from './dahlialogo.png'
import "../styling/NavBar.css";

export const NavBar = () => {
    return(
        <Navbar expand="lg" bg="dark" variant="dark">
            <Container>
                <Link to={"/"} className="navbar-brand">
                <img src={dahlialogo} alt="Logo" className="d-inline-block align-top logo-img"/>
                </Link>
                <Navbar.Collapse>
                    <Nav>
                        <Link to={"/"} className="nav-link">
                            Home
                        </Link>
                        <Link to={"/skills"} className="nav-link">
                            Skills
                        </Link>
                        <Link to={"/projects"} className="nav-link">
                            Projects
                        </Link>
                        <Link to={"/hobbies"} className="nav-link">
                            Hobbies
                        </Link>
                        <Link to={"/contact"} className="nav-link">
                            Contact
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )


}