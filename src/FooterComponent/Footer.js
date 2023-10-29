import React from 'react'
import "./Footer.css";
// import N from "../N letter.png"
import N2 from "../N2 letter.jpeg"
import { FaFacebookSquare, FaYoutube, FaLinkedin, FaInstagram, FaLocationArrow } from "react-icons/fa";
import { MdSmartphone } from "react-icons/md"

function Footer() {
    return (
        <div className='footer'>
            <div className='sb__footer section__padding'>
                <div className='sb__footer-link'>
                    <div className='sb__footer-link_div'>
                        {/* <h4>for Business</h4>
                    <a href='/niyaz'>
                        <p>Employee1</p>
                    </a>
                    <a href='/niyaz'>
                        <p>Employee2</p>
                    </a>
                    <a href='/niyaz'>
                        <p>Employee3</p>
                    </a> */}
                        <div className="fotterSiren">
                            {/* <img src={N} alt='logoN' /> */}
                            <img src={N2} alt='logoN' className='Nlogo' />
                            <h1 className='allSiren'><span className='the'>The</span> Siren</h1>
                        </div>
                        <div className='phone'>
                            <MdSmartphone className='phoneSize' />
                            <p>+91 1234576500</p>
                        </div>
                        <div className='phone'>
                            <FaLocationArrow className='phoneSize' />
                            <p>easupport@pre.com</p>
                        </div>
                    </div>
                    <div className='sb__footer-link_div'>
                        <h2>Services</h2>
                        <a href='/niyaz'>
                            <p>Identity Verification</p>
                        </a>
                        <a href='/niyaz'>
                            <p>Criminal Check</p>
                        </a>
                        <a href='/niyaz'>
                            <p>Address Verification</p>
                        </a>
                        <a href='/niyaz'>
                            <p>Employee Verification</p>
                        </a>
                        <a href='/niyaz'>
                            <p>Education Verification</p>
                        </a>
                        <a href='/niyaz'>
                            <p>Credit Check</p>
                        </a>
                    </div>
                    <div className='sb__footer-link_div'>
                        <h2>Resources</h2>
                        <a href='/niyaz'>
                            <p>Blog</p>
                        </a>
                        <a href='/niyaz'>
                            <p>Help Center</p>
                        </a>
                        <a href='/niyaz'>
                            <p>Careers</p>
                        </a>
                        <a href='/niyaz'>
                            <p>Contact Us</p>
                        </a>
                    </div>
                    <div className='sb__footer-link_div'>
                        <h2>Project</h2>
                        <a href='/niyaz'>
                            <p>Bollywood</p>
                        </a>
                        <a href='/niyaz'>
                            <p>Hollywood</p>
                        </a>
                        <a href='/niyaz'>
                            <p>Technology</p>
                        </a>
                        <a href='/niyaz'>
                            <p>Fitness</p>
                        </a>
                        <a href='/niyaz'>
                            <p>Food</p>
                        </a>
                    </div>
                    <div className='sb__footer-link_div'>
                        <h2>Social Media</h2>
                        <div className='socialmedia'>
                            <FaFacebookSquare className='phoneSize' />
                            <FaYoutube className='phoneSize' />
                            <FaLinkedin className='phoneSize' />
                            <FaInstagram className='phoneSize' />
                            {/* <p><img src={fb} alt="logo"/></p> */}
                            {/* <p><img src={twitter} alt="logo"/></p> */}
                            {/* <p><img src={linkendin} alt="logo"/></p> */}
                            {/* <p><img src={insta} alt="logo"/></p> */}
                        </div>
                    </div>
                </div>
                <hr />

                <div className='sb_footer-below'>
                    <div className='sb_footer-copyright'>
                        <p>
                            @{new Date().getFullYear()} BlogPage.All right reversed.
                        </p>
                    </div>
                    <div className='sb__footer-below-links'>
                        <a href='/niyaz'><div><p>Term & condition</p></div></a>
                        <a href='/niyaz'><div><p>Privacy</p></div></a>
                        <a href='/niyaz'><div><p>Security</p></div></a>
                        <a href='/niyaz'><div><p>Cookies Declaration</p></div></a>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Footer
