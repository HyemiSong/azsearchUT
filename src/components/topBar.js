import React from 'react';
import imgLeft from '../images/topbarLeft.png';
import imgRight from '../images/topbarRight.png';

class TopBar extends React.Component {
    render() {
        return (
            <div className='topBar'>
                <img src={imgLeft} alt='topBar' className='topBarL'></img>
                <img src={imgRight} alt='topBar' className='topBarR'></img>
            </div>
        );
    }
}
export default TopBar;