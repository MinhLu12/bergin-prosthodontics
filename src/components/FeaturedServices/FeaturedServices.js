import React from 'react';
import cn from './FeaturedServices.module.scss';
import CosmeticDentistry from 'assets/services/Asset 2.png';
import ImplantRestoration from 'assets/services/Asset 1.png';
import RemovableProstho from 'assets/services/Asset 4.png';
import RestorativeDentistry from 'assets/services/Asset 3.png';

const FeaturedServices = () => {
  return (
    <>
      <div className={cn.FeaturedServices}>
        <div className={cn.Text}>
          <span className={cn.Header}>FEATURED SERVICES</span>
          <hr className={cn.Break}></hr>
          <span className={cn.Caption}>Handcrafted artistry meets cutting-edge dentistry</span>
        </div>

        <div className={cn.Images}>
          <img src={RestorativeDentistry}></img>
          <img src={RemovableProstho}></img>
          <img src={CosmeticDentistry}></img>
          <img src={ImplantRestoration}></img>
        </div>
      </div>
    </>
  )
}

export default FeaturedServices