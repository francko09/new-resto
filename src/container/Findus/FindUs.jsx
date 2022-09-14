import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className='app__bg app__wrapper section__padding' id='contact'>
    
    <div className="app__wrapper_info">
      <SubHeading title='contact'/>
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>
        Nous trouver
      </h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptatum praesentium error magnam
        </p>
        <p className="p__cormorant" style={{color: '#dcca87' , margin: '2rem 0'}}>
          Heures d'ouverture</p>
        <p className="p__opensans">Lun - Ven: 10h00  - 02h00  </p>
        <p className="p__opensans">Lun - Ven: 10h00  - 02h00  </p>
      </div>
      <button className='custom__button' style={{marginTop: '2rem'}}>
        <a href="https://goo.gl/maps/bHdcFEYYD3YRPP1h7" target="blank"> Nous Localiser </a> 
        </button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="Findus" />
    </div>
  </div>
);

export default FindUs;
