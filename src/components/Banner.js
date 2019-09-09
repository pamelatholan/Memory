import React from 'react';

const style = {
  logoIcon: {
    width: 300,
  },
  bgDark: {
    backgroundColor: `rgb(1,0,1)`
  }
}

const Banner = props => (
  <article style={style.bgDark} className="mw7 center ph ph5-ns tc br2 pv3 bg-black-90 mb animated fadeIn">
    <img style={style.logoIcon} className='logoIcon' src="./images/skeletor.jpg" alt="logo"/>
    <h2 className="fw2 f4 lh-copy mt0 mb3 white animated fadeIn slower">
    Click on an image to earn points, but don't click on the same one twice!
    </h2>
  </article>
);

export default Banner;