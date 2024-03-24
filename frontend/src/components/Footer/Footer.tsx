import './Footer.css';
import footer_logo from '../assets/logo_big.png';
import instagram_icon from '../assets/instagram_icon.png';
import pintrest_icon from '../assets/pintester_icon.png';
import whatsapp_icon from '../assets/whatsapp_icon.png';

function Footer() {
    return (
        <div className='footer'>
            <div className="footer-logo">
                <img src={footer_logo} alt=""/>
                <p>SHOPPER</p>
            </div>
            <ul className='footer-links'>
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="footer-social-icons">
                <div className="footer-icons-container">
                    <img src={instagram_icon} alt="Instragram"/>
                </div>
                <div className="footer-icons-container">
                    <img src={pintrest_icon} alt="Pintrest"/>
                </div>
                <div className="footer-icons-container">
                    <img src={whatsapp_icon} alt="WhatsApp"/>
                </div>
            </div>
            <div className="footer-copyright">
                <hr/>
                <p>Copyright @ 2024 - All Rights Reserved. </p>
            </div>
        </div>
    );
}

export default Footer;