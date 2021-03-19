import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Join newsletter
                </p>
                <p className='footer-subscrition-text'>
                    Unsub at any time
                </p>
                <div className='input-areas'>
                    <form>
                        <input 
                        type='email' 
                        name='email' 
                        placeholder='Your Email' 
                        className='footer-input' />
                        <Button buttonStyle='btn--outline'>Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to='/sign-up'>Testimonials</Link>
                        <Link to='/sign-up'>Careers</Link>
                        <Link to='/sign-up'>Investors</Link>
                        <Link to='/sign-up'>Terms of Service</Link>
                    </div>
                </div>
            </div>
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <Link to='/' className='social-logo'>
                            Coder <i className='fas fa-laptop-code'></i>
                        </Link>
                    </div>
                    <small className='website-rights'>© RichyJayCodes 2021</small>
                    <div className='social-icons'>
                        <Link className='social-icon-link facebook'
                        to="/"
                        target="_blank"
                        aria-label='Facebook'
                        >
                            <i className='fab fa-facebook-f'></i>
                        </Link>
                        <Link className='social-icon-link github'
                        to="/"
                        target="_blank"
                        aria-label='Facebook'
                        >
                            <i class="fab fa-github"></i>
                        </Link>
                        <Link className='social-icon-link instagram'
                        to="/"
                        target="_blank"
                        aria-label='Instagram'
                        >
                            <i class="fab fa-instagram"></i>
                        </Link>
                    </div>
                </div>
            </section>
        
        </div>
    )
}

export default Footer
