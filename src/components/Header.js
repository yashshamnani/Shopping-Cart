import React from 'react'
import {Navbar,Container, FormControl,Nav,Dropdown, Badge} from "react-bootstrap"
import {FaShoppingCart} from "react-icons/fa"
const Header = () => {
  return (
    <div> 
        <Navbar bg="dark" variant="dark" style={{height:80}}>
            <Container>
                <Navbar.Brand>
                    <a href='/'>Shopping Cart</a>
                </Navbar.Brand>
                <Navbar.Text className='search'>
                    <FormControl style={{width:500}} placeholder="Search for product" className='m-auto'>

                    </FormControl>
                </Navbar.Text>
                <Nav>
                <Dropdown alignRight>
                      <Dropdown.Toggle variant="success" id="dropdown-basic">
                      <FaShoppingCart color="white" fontSize="25px" />
                           <Badge>{10}</Badge>
                        </Dropdown.Toggle>

                        <Dropdown.Menu style={{minWidth:370}}>
                          <span style={{padding:10}}>Cart is Empty!</span>
                      </Dropdown.Menu>
                </Dropdown>
                </Nav>
            </Container>

        </Navbar>
    </div>
  )
}

export default Header