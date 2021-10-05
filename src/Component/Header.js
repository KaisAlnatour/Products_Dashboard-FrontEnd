import { Nav, Navbar, Container, NavDropdown, Figure } from 'react-bootstrap'
import { useHistory } from "react-router-dom"
import { Link } from 'react-router-dom'

function Header() {
    let user
    const history = useHistory()
    if (localStorage.getItem('user-info'))
        user = JSON.parse(localStorage.getItem('user-info'))
    // console.warn('user-test:', user.data)

    function logoOut() {
        localStorage.clear();
        history.push('/register')
    }

    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto navbar_warapper">
                        {
                            localStorage.getItem('user-info') ?
                                <>
                                    <Link to="/"> Product list </Link>
                                    <Link to="/add"> Add product </Link>                                    
                                    <Link to="/update"> Update product </Link>
                                </>
                                :
                                <>
                                    <Link to="/login"> Login </Link>
                                    <Link to="/register"> Register </Link>
                                </>
                        }

                    </Nav>

                    {localStorage.getItem('user-info') ?
                        <Nav>
                            <NavDropdown title={user.data.name}>
                                <NavDropdown.Item onClick={logoOut}> Logo Out </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        : null
                    }
                </Container>
            </Navbar>
        </div>
    );

}
export default Header;