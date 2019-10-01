import React from 'react';
import basic from '../images/basic.svg';
import Wizard from './wizard';

class results extends React.Component {
    render(){
        return(
                <div className='stage content posAbslute'>
                    <div className='intro stage-padding posRelative'>
                        <div className='title'>Individual Results</div>
                        <p>
                            <img src ={basic} alt='basic' className='thumb alignLeft'></img>
                            <div className='txt'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                            </div>
                        </p>
                    </div>
                    <div className='toolbar borderBottom borderTop'>
                        <div className='toolbar controler'></div>
                    </div>
                    <div className='option stage-padding posRelative'>
                        <div className='template'>
                            <div className='subtitle'>Individual Results</div>
                        </div>
                    </div>
                    <Wizard />
                 </div>
        );
    }
}
export default results