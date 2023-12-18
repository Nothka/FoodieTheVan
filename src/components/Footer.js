import React from 'react'
import { Button } from './Button';
import './Footer.css';
import Maps from './Maps';
import { Link } from 'react-router-dom';

function Footer() {
    const currentYear = new Date().getFullYear();
  return (
    
    <div className='footer-container'>
    <section className='footer-subscription'>
      <p className='footer-subscription-heading'>
        Join the Foodie's newsletter to receive our best food deals
      </p>
      <p className='footer-subscription-text'>
        You can unsubscribe at any time.
      </p>
      <div className='input-areas'>
        <form>
          <input
            className='footer-input'
            name='email'
            type='email'
            placeholder='Your Email'
          />
          <Button buttonStyle='btn--outline'>Subscribe</Button>
        </form>
      </div>
      <div className='maps'>
      <Maps></Maps>
      </div>
    </section>
    <small className='website-rights'>FoodieTheVan © {currentYear} </small>
    <div className='social-icons'>
            <Link
              className='social-icon-link facebook'
              to='https://www.facebook.com/p/Foodie-The-Van-100075875232574/'
              target='_blank'
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </Link>
            <Link
              className='social-icon-link instagram'
              to='https://www.instagram.com/foodie.the.van/'
              target='_blank'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </Link>
            <Link
              className='social-icon-link tiktok'
              to='https://www.tiktok.com/@foodiethevan.ro'
              target='_blank'
              aria-label='Tiktok'
            >
              <i className='fab fa-tiktok' />
            </Link>
          </div>

          <div className='contact-us'>
            <p>Call us at: 0753 035 555</p>
            </div>
  </div>
);
}


export default Footer;




