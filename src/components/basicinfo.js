import React from 'react';
import basic from '../images/basic.svg';
import Wizard from './wizard';

class Basicinfo extends React.Component {
    render(){
        return(
                <div className='stage content posAbslute'>
                    <div className='intro stage-padding posRelative'>
                        <div className='title'>Basic Information</div>
                        <p>
                            <img src ={basic} alt='basic' className='thumb alignLeft'></img>
                            <div className='txt'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                            </div>
                        </p>
                    </div>
                    <div className='toolbar borderBottom borderTop'></div>
                    <div className='option stage-padding posRelative'>
                        <div className='template'>
                            <div className='subtitle'>Templates</div>
                            <img src ={basic} alt='basic' className='thumb'></img>
                            <img src ={basic} alt='basic' className='thumb'></img>
                            <img src ={basic} alt='basic' className='thumb'></img>
                        </div>
                        <div className='info'>
                            <div className='subtitle'>Basic Information</div>
                            <label className="fname">Title</label>
                            <input type='text' defaultValue='{asdaf}' placeholder='Write app title' />
                        </div>
                    </div>
                    <Wizard />
                 </div>
        );
    }
}
export default Basicinfo;