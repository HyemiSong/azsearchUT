import React from 'react';
import img from '../images/mainNav.png';

class NavBar extends React.Component {
    render() {
        return(
          <div className = 'navBar'>
            <img src={img} alt='navBar'></img>
          </div>
        );
    }
}
export default NavBar