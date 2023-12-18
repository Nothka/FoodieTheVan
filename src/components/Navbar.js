import React, {useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button';
import './Navbar.css';
import logo from '../foodie-logo.png';

function Navbar() {
    const [click,setClick] = useState(false);
    const [button,setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);


    const showButton = () =>{
        if(window.innerWidth <= 991){
            setButton(false);
        } else {
            setButton(true);
        }
    };


    useEffect(()=>{
        showButton();
    },[]);

    window.addEventListener('resize',showButton);


  return (
    <>
    <nav className='navbar'>
        <div className='navbar-container'>
          <Link to="/FoodieTheVan/" className='navbar-logo'>
          <img className='logo' src={logo} alt="Logo" />
            <p className='a'> Foodie </p>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/FoodieTheVan/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/FoodieTheVan/menu'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Menu
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/FoodieTheVan/contact'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>

            <li>
              <Link
                to='https://tazz.ro/arad/foodie-the-van/16673/restaurant'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Order Now
              </Link>
            </li>
          </ul>
          {button && <Button to='https://tazz.ro/arad/foodie-the-van/16673/restaurant' buttonStyle={'btn--outline'}>Order Now</Button>}
        </div>
    </nav>
    
    </>
  );
}

export default Navbar;