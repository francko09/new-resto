import React from 'react';

import { SubHeading, MenuItem } from '../../components';
import { images, data } from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className='app__specialMenu flex__center section__padding app__bg' id='menu'>
    <div className="app__specialMenu-title">
      <SubHeading title="Le menu qui vous correspond " />
      <h1 className="headtext__cormorant">Menu du jour</h1>
    </div>

    <div style={{marginTop: '15px'}} className="menu_subtitle ">
            <h2 >Boissons</h2>
    </div>

    <div className='app__speciaIMenu-menu app__bg'>

      <div className="app__specialMenu-menu_wine flex__center wine_beer">
        <p className='app__specialMenu-menu_heading'>Vin & Bière</p>
        <div className='app__specialMenu_menu_items'>
          {data.wines.map((wine, index)=>(
            <MenuItem key={wine.title+index} title={wine.title} price={wine.price} tags={wine.tags} />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="menu img" />
      </div>

      <div className="app__specialMenu-menu_cocktails flex__center coktails">
        <p className='app__specialMenu-menu_heading'>Cocktails </p>
        <div className='app__specialMenu_menu_items'>
          {data.cocktails.map((cocktails, index)=>(
            <MenuItem key={cocktails.title+index} title={cocktails.title} price={cocktails.price} tags={cocktails.tags} />
          ))}
        </div>
      </div>

    </div>

    <div style={{marginTop: '15px'}} className="menu_subtitle ">
            <h2>Plats de Résistance</h2>
    </div>

    <div className='app__speciaIMenu-menu app__bg'>

<div className="app__specialMenu-menu_wine flex__center burger">
  <p className='app__specialMenu-menu_heading'>Burger </p>
  <div className='app__specialMenu_menu_items'>
    {data.wines.map((wine, index)=>(
      <MenuItem key={wine.title+index} title={wine.title} price={wine.price} tags={wine.tags} />
    ))}
  </div>
</div>

<div className="app__specialMenu-menu_img">
  <img src={images.pizza_burger} alt="menu img" />
</div>

<div className="app__specialMenu-menu_cocktails flex__center pizza">
  <p className='app__specialMenu-menu_heading'>Pizza </p>
  <div className='app__specialMenu_menu_items'>
    {data.cocktails.map((cocktails, index)=>(
      <MenuItem key={cocktails.title+index} title={cocktails.title} price={cocktails.price} tags={cocktails.tags} />
    ))}
  </div>
</div>

    </div>

    <div style={{marginTop: '15px'}} className="">
            <button type='button' className='custom__button'>
              <a href="https://wa.me/22897209728" target="blank">Commandez</a>
            </button>
    </div>
  </div>
); 

export default SpecialMenu;
