import React from 'react';
import{FiFacebook, FiTwitter, FiInstagram} from 'react-icons/fi'

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding'>

    <div className="app__footer-links">

      <div className="app__footer-links_contact">
       <h1 className="app__footer-headtext">Nous contacter</h1> 
        <p className="p__opensans">
            161 E rue des Echis B.P. 14053. Lomé-Adapkamé
        </p>
        <p className="p__opensans">
            +228 97-20-97-28
        </p>
        <p className="p__opensans">
            +228 97-20-97-28
        </p> 
      </div>

      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="footer_logo" />
        <p className="p__opensans">"Chez nous c'est chez vous"</p>
        <img src={images.spoon} alt="Spoon" className='spoon__img' style={{marginTop: 15}} />
        <div className="app__footer-links__icons">
          <a href="https://www.facebook.com/francko.musk" target="blank">
            <FiFacebook className='svg'/></a> 
          <a href="https://www.instagram.com/____19mai/" target="blank">
            <FiInstagram className='svg'/></a> 
           <a href="https://twitter.com/home" target="blank">
            <FiTwitter className='svg'/></a>
        </div>
      </div>

      <div className="app__footer-links_work">
      <h1 className="app__footer-headtext">Heures d'ouverture</h1> 
        <p className="p__opensans">
            Lundi-Vendredi:
        </p>
        <p className="p__opensans">
            08h00 - 00h00 
        </p>
        <p className="p__opensans">
            Samedi-Dimanche:
        </p> 
        <p className="p__opensans">
            07h00 - 00h00
        </p> 
      </div>

    </div>
    <div className="footer__copyright">
      <p className="p__opensans">
        2022 Francko Resto. All Rights reserved.
      </p>
    </div>
  </div>
);

export default Footer;
